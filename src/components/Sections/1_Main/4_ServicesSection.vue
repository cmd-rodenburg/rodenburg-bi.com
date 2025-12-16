<script setup lang="ts">
const projects = [
  {
    "title": "Data Warehouse Architecture",
    "description": "Scalable, structured architecture ensuring efficient storage, retrieval, and integration of data across enterprise systems.",
    "image": "https://cdn-icons-png.flaticon.com/512/2910/2910791.png"
  },
  {
    "title": "Data Modeling",
    "description": "Scalable models consolidating multi-source data for optimized storage, fast retrieval, and seamless analytical processing.",
    "image": "https://cdn3.iconfinder.com/data/icons/service-design-tools/100/3_Mar-77-512.png"
  },
  {
    "title": "Intelligent Dashboards",
    "description": "Automated dashboards eliminating manual reporting while delivering real-time insights into business-critical key performance indicators.",
    "image": "https://static.vecteezy.com/system/resources/thumbnails/008/329/474/small_2x/dashboard-icon-style-free-vector.jpg"
  },
  {
    "title": "API Ingestions",
    "description": "Seamless API integrations automating data ingestion, ensuring continuous, real-time updates with minimal manual intervention.",
    "image": "https://cdn-icons-png.flaticon.com/512/10988/10988100.png"
  },
  {
    "title": "Data Integration & ETL",
    "description": "Optimized ETL workflows consolidating and transforming data for structured, efficient storage and analytics-ready datasets.",
    "image": "https://static.vecteezy.com/system/resources/thumbnails/049/779/866/small_2x/airflow-icon-showing-air-particles-moving-with-arrows-vector.jpg"
  },
  {
    "title": "Data Lake Implementation",
    "description": "Scalable data lakes storing structured and unstructured data, enabling flexible, high-performance exploration and analytics.",
    "image": "https://cdn-icons-png.flaticon.com/512/1163/1163835.png"
  },
  {
    "title": "Best Practices Implementation",
    "description": "Industry-standard methodologies ensuring data integrity, security, governance, and compliance across all business processes.",
    "image": "https://cdn-icons-png.flaticon.com/512/5404/5404250.png"
  },
  {
    "title": "Data Quality Management",
    "description": "Comprehensive frameworks monitoring, cleansing, and validating datasets to maintain accuracy, consistency, and reliability.",
    "image": "https://cdn-icons-png.flaticon.com/512/5070/5070861.png"
  },
  {
    "title": "Data Security & Compliance",
    "description": "Robust security measures ensuring regulatory compliance, data privacy, encryption, and protection from unauthorized access.",
    "image": "https://static.thenounproject.com/png/1815164-200.png"
  }
]


</script>

<template>
  <section id="services" class="bg-gray-800 py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="section-title">Services</h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(project, index) in projects" :key="index" class="card p-8">
            
          <a v-if="project.image" target="_blank" class="flex justify-center items-center ">
            <img :src="project.image" :alt="project.title" class="w-32 h-32 object-cover rounded-lg mb-4 bg-white p-2" />
          </a>
          <h3 class="text-2xl font-semibold mb-3">{{ project.title }}</h3>
          <p class="text-gray-300 mb-4">
            {{ project.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
