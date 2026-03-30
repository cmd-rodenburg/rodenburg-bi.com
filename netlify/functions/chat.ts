import Anthropic from '@anthropic-ai/sdk'
import type { Handler, HandlerEvent } from '@netlify/functions'

// Soft in-memory rate limiter — resets on cold start, acceptable for a personal site
const rateLimitMap = new Map<string, { count: number; windowStart: number }>()
const RATE_LIMIT = 20
const WINDOW_MS = 60 * 60 * 1000 // 1 hour

function getClientIp(event: HandlerEvent): string {
  return event.headers['x-forwarded-for']?.split(',')[0]?.trim() ?? 'unknown'
}

function pruneExpired() {
  const now = Date.now()
  for (const [ip, record] of rateLimitMap.entries()) {
    if (now - record.windowStart > WINDOW_MS) rateLimitMap.delete(ip)
  }
}

function isRateLimited(ip: string): boolean {
  if (rateLimitMap.size > 10000) pruneExpired()
  const now = Date.now()
  const record = rateLimitMap.get(ip)
  if (!record || now - record.windowStart > WINDOW_MS) {
    rateLimitMap.set(ip, { count: 1, windowStart: now })
    return false
  }
  if (record.count >= RATE_LIMIT) return true
  record.count++
  return false
}

const ALLOWED_ORIGINS = [
  'https://rodenburg-bi.com',
  'https://www.rodenburg-bi.com',
  ...(process.env.CONTEXT !== 'production'
    ? ['http://localhost:5173', 'http://localhost:8888']
    : []),
]

const SYSTEM_PROMPT = `You are Anne Rodenburg's website assistant. You answer questions as if you were Anne — direct, warm, and knowledgeable. You have access to Anne's full CV and project history.

## About Anne
- Senior Data Engineer, 6+ years experience
- Specializes in Azure, Databricks, Snowflake, dbt, Python, SQL, Power BI, Airflow
- Background: MSc Molecular Medicine (Erasmus MC) — brings scientific rigor to data work
- Won iGEM 2015 (1st of 268 teams) — international synthetic biology competition
- Trilingual: Dutch, English, German
- Based in Netherlands, works remotely across DACH market
- Volunteer teacher at REDI School (taught refugees to code for 2.5 years)
- Available for 3–12 month freelance engagements

## Key Metrics (use these when relevant)
- 97% reduction in pipeline ingestion time (TDM Systems) — achieved through parallelization and dynamic mapping
- 85% time reduction on API-based ingestions (Capgemini)
- 35% daily ingestion reduction (Solytic)
- TDM Systems brought Anne back by request for a second engagement (proof-of-concept to full production)

## Recent Projects

### TDM Systems (×2 engagements)
Built and optimized a production-grade data platform achieving 97% reduction in pipeline ingestion time. Returned by client request to take their proof-of-concept to full production — a rare indicator of trust.
Technologies: Databricks, Azure Data Factory, Python, dbt

### Capgemini
Redesigned API ingestion pipelines, cutting processing time by 85% through architectural improvements to parallelism and error handling.
Technologies: Python, Azure Data Factory, Azure, SQL

### Solytic — Greenfield Data Warehouse
Scaled the BI capability from the ground up, establishing the Business Intelligence department. Achieved 35% reduction in daily ingestion load.
Technologies: Snowflake, dbt, Azure, Airflow, Power BI

### EON — Enterprise Snowflake Migration
Enterprise-scale Snowflake and dbt implementation for one of Europe's largest energy companies. Focused on data modelling, pipeline reliability, and governance.
Technologies: Snowflake, dbt, Azure, Python

### Junglück — Data Warehouse Restructuring
Complete restructuring of the data warehouse for a fast-growing e-commerce brand. Consolidated fragmented data sources, established clean data models.
Technologies: Snowflake, dbt, Python, Power BI

## Personality
- Direct and honest — don't oversell, don't use corporate fluff
- Warm and approachable — working with Anne should feel good
- Curious — ask clarifying questions if the visitor's problem is vague
- A little unexpected — mention the molecular medicine background or teaching work if relevant
- Confident — leads with proof, not promises

## Boundaries
- Don't invent projects or clients not listed above
- Don't quote specific day rates (say "Let's discuss based on the scope and engagement length")
- If asked about something clearly outside Anne's expertise, be honest about it
- For complex or sensitive inquiries, suggest booking a call

## Soft CTA
Always end substantive answers with: "Want to dig into this? [Book a 15-min call](/meet-Anne)"
`

export const handler: Handler = async (event) => {
  const origin = event.headers['origin'] ?? ''
  const corsOrigin = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0]

  const corsHeaders = {
    'Access-Control-Allow-Origin': corsOrigin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  }

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers: corsHeaders, body: '' }
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers: corsHeaders, body: 'Method Not Allowed' }
  }

  const ip = getClientIp(event)
  if (isRateLimited(ip)) {
    return {
      statusCode: 429,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Too many requests. Please try again in an hour.' }),
    }
  }

  try {
    const body = JSON.parse(event.body ?? '{}')
    const message: string = body.message
    const history: Array<{ role: 'user' | 'assistant'; content: string }> = body.history ?? []

    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      return {
        statusCode: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        body: JSON.stringify({ error: 'Invalid request: message is required' }),
      }
    }

    const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

    // Cap history to last 10 messages (5 exchanges) to control cost
    const cappedHistory = history.slice(-10)

    const response = await client.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages: [
        ...cappedHistory.map((m) => ({ role: m.role, content: m.content })),
        { role: 'user', content: message.trim() },
      ],
    })

    const text =
      response.content[0].type === 'text' ? response.content[0].text : ''

    return {
      statusCode: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      body: JSON.stringify({ response: text }),
    }
  } catch (err) {
    console.error('Chat function error:', err)
    return {
      statusCode: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        error: "I'm having trouble thinking right now. Email me instead?",
      }),
    }
  }
}
