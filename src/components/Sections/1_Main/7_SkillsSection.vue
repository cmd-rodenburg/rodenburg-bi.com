<script setup lang="ts">
const skills = [
  {
    category: 'Programming Languages',
    items: ['Python', 'SQL', 'PySpark', 'Power M Query', 'DAX', 'Vue'],
  },
  {
    category: 'Cloud Platforms',
    items: ['Azure', 'Snowflake', 'Databricks'],
  },
  {
    category: 'Data Visualization',
    items: ['Power BI', 'Tableau'],
  },
  {
    category: 'Data Warehousing',
    items: ['Snowflake', 'PostgreSQL', 'Azure SQL', 'Databricks', 'Hadoop'],
  },
  {
    category: 'ETL Tools',
    items: [
      'dbt',
      'Prefect',
      'Azure Data Factory',
      'Hadoop',
      'Apache Airflow',
      'Terraform',
    ],
  },
  {
    category: 'Version Control & CI/CD',
    items: ['Git', 'Azure DevOps', 'Docker'],
  },
  {
    category: 'API integrations',
    items: [
      'Adobe Analytics',
      'Adobe Experience Platform',
      'Amazon Media',
      'Amazon Retail',
      'Custom API Integrations',
      'DateV',
      'Google Analytics',
      'Hubspot',
      'Linkedin',
      'Marketo',
      'SevDesk',
      'Sharepoint',
    ],
  },
];
// Map each tool to its official webpage
const toolLinks: Record<string, string> = {
  Linkedin: 'https://developer.linkedin.com/',
  Python: 'https://www.python.org/',
  SQL: 'https://en.wikipedia.org/wiki/SQL',
  PySpark: 'https://spark.apache.org/docs/latest/api/python/',
  'Power M Query': 'https://learn.microsoft.com/en-us/power-query/',
  DAX: 'https://learn.microsoft.com/en-us/dax/',
  Azure: 'https://azure.microsoft.com/',
  Snowflake: 'https://www.snowflake.com/',
  Databricks: 'https://www.databricks.com/',
  'Power BI': 'https://powerbi.microsoft.com/',
  Tableau: 'https://www.tableau.com/',
  PostgreSQL: 'https://www.postgresql.org/',
  'Azure SQL': 'https://azure.microsoft.com/en-us/products/azure-sql/',
  Hadoop: 'https://hadoop.apache.org/',
  dbt: 'https://www.getdbt.com/',
  Vue: 'https://vuejs.org/',
  Prefect: 'https://www.prefect.io/',
  'Azure Data Factory':
    'https://azure.microsoft.com/en-us/products/data-factory/',
  'Apache Airflow': 'https://airflow.apache.org/',
  Terraform: 'https://www.terraform.io/',
  Git: 'https://git-scm.com/',
  'Azure DevOps': 'https://azure.microsoft.com/en-us/products/devops/',
  Docker: 'https://www.docker.com/',
  Hubspot: 'https://www.hubspot.com/',
  SevDesk: 'https://sevdesk.com/',
  DateV: 'https://www.datev.com/',
  'Amazon Media': 'https://advertising.amazon.com/',
  'Adobe Analytics':
    'https://business.adobe.com/products/analytics/adobe-analytics.html',
  'Amazon Retail': 'https://www.amazon.com/',
  'Adobe Experience Platform':
    'https://business.adobe.com/products/experience-platform/adobe-experience-platform.html',
  Marketo: 'https://business.adobe.com/products/marketo/adobe-marketo.html',
  Sharepoint:
    'https://www.microsoft.com/en-us/microsoft-365/sharepoint/collaboration',
};
</script>

<template>
  <section id="skills" class="py-20 bg-gray-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="section-title">Technical Skills</h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(skill, index) in skills" :key="index" :class="[
          'card',
          skill.category === 'API integrations'
            ? 'md:col-span-2 lg:col-span-3'
            : '',
        ]">
          <h3 class="text-xl font-semibold mb-4 text-primary-600">
            {{ skill.category }}
          </h3>
          <div class="flex flex-wrap gap-2">
            <span v-for="item in skill.items" :key="item"
              class="px-3 py-1 bg-primary-900/20 text-primary-700 rounded-full text-sm">
              <a :href="toolLinks[item]" target="_blank" rel="noopener">{{
                item
              }}</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
