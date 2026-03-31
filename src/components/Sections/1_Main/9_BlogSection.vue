<script setup lang="ts">
const blogs = [
  {
    title: 'Optimize Your Data Platform: The “To-do’s”',
    summary: 'Read about my tips for optimizing your Data Platform',
    blog_link: 'https://medium.com/@rodenburg.bi/optimize-your-data-platform-the-to-dos-90254aa892cb',
    image: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/0*VMd0wsduIvG9wEcl.jpg',
  },
  {
    title: 'AEP object management in multiple sandboxes',
    summary: 'Appliying infrastructre as code for Adobe Experience Platform object management',
    blog_link: 'https://medium.com/@rodenburg.bi/solving-aep-object-management-in-multiple-sandboxes-through-code-882b23ce5f18',
    image: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/0*t-WWFWdkCKbCZsu-',
  }
];
</script>

<template>
  <section id="blog" class="pt-20 pb-20 bg-gradient-to-br from-primary-50 to-white dark:from-gray-900 dark:to-gray-800 py-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="section-title" >Blog posts</h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        <div v-for="(project, index) in blogs" :key="index" class="card p-8">
          <h3 class="text-2xl font-semibold mb-3">{{ project.title }}</h3>
          <a :href="project.blog_link" target="_blank">
            <img v-if="project.image" :src="project.image" :alt="project.title" class="w-full h-70 object-cover rounded-lg mb-4" />
          </a>
            <p class="text-gray-600 dark:text-gray-400">{{ project.summary }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
