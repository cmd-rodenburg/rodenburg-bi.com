<script setup lang="ts">
import ContactForm from '../../forms/ContactForm.vue';
import BaseButton from '../../CommonElements/Button.vue';
</script>

<template>
  <section id="contact" class="py-20 bg-gray-900 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Title -->
      <h2 class="text-3xl font-bold text-center mb-8">Contact Me</h2>

      <div class="max-w-xl mx-auto text-center space-y-6">
        <p class="text-lg font-semibold">
          Curious to learn more about how I can help your business grow?
        </p>

        <!-- Book a Meeting Section -->
        <div class="bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 class="text-xl font-semibold mb-2">Book a Meeting Now</h3>
          <router-link to="/meet-anne">
            <BaseButton class="mt-4">Book a Meeting</BaseButton>
          </router-link>
        </div>

        <!-- Contact Form Section -->
        <div class="bg-white text-gray-900 dark:bg-gray-800 dark:text-white p-8 rounded-lg shadow-lg">
          <h3 class="text-xl font-semibold mb-4">Get in Touch</h3>
          <ContactForm />
        </div>

        <!-- Social Links -->
        <div class="flex justify-center space-x-6 mt-6">
          <a href="https://www.linkedin.com/in/annerodenburgbi" target="_blank" class="hover:opacity-80 transition">
            <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="LinkedIn" class="w-12 h-12">
          </a>
          <a href="https://medium.com/@rodenburg.bi" target="_blank" class="hover:opacity-80 transition">
            <img src="https://img.icons8.com/color/48/000000/medium.png" alt="Medium" class="w-12 h-12">
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
