// src/composables/usePostHog.ts
import posthog from 'posthog-js'

export function usePostHog() {
  if (!import.meta.env.VITE_POSTHOG_API_KEY) {
    console.warn('PostHog API key is missing')
    return { posthog: null }
  }

  if (!posthog.__loaded) { // Prevent duplicate initialization
    posthog.init(import.meta.env.VITE_POSTHOG_API_KEY, {
      api_host: import.meta.env.VITE_POSTHOG_HOST || 'https://eu.i.posthog.com',
      autocapture: true, // Automatically track events
      capture_pageview: false, // We handle page tracking manually
    })
    posthog.__loaded = true
  }

  return { posthog }
}
