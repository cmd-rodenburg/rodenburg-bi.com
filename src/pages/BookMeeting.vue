<script setup lang="ts">
import MeetMeSection from '../components/Sections/Contact/MeetMeSection.vue';
import NavigationBar from '../components/Layout/NavigationBar.vue'
import Header from '../components/Layout/Header.vue';
</script>

<template>
  <section
    class="items-center justify-center bg-gray-800">
    
    <div class="min-h-screen">
      <NavigationBar />
      <Header imageSrc="/images/Background_contact.jpg" />
      <MeetMeSection />
    </div>
  </section>
</template>