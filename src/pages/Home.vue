<script setup lang="ts">
import NavigationBar    from '../components/Layout/NavigationBar.vue';
import Header           from '../components/Layout/Header.vue'
import HeroSection      from '../components/Sections/1_Main/1_HeroSection.vue';
import AboutSection     from '../components/Sections/1_Main/2_AboutSection.vue';
import FeaturedProjects from '../components/Sections/1_Main/3_FeaturedProjectsSection.vue'
import Services         from '../components/Sections/1_Main/4_ServicesSection.vue'
import DiagnosticSection from '../components/Diagnostic/DiagnosticSection.vue'
import SkillsSection    from '../components/Sections/1_Main/5_SkillsSection.vue';
import Blog             from '../components/Sections/1_Main/6_BlogSection.vue';
import ContactSection   from '../components/Sections/1_Main/7_ContactSection.vue';
import AskAnneWidget   from '../components/AskAnne/AskAnneWidget.vue';
</script>

<template>
  <div class="min-h-screen">
    <NavigationBar />
    <Header imageSrc="/images/Background_contact.jpg" />
    <main class="main-content">
      <HeroSection />
      <AboutSection />
      <FeaturedProjects />
      <Services />
      <DiagnosticSection />
      <SkillsSection />
      <Blog/>
      <ContactSection />
    </main>
    <AskAnneWidget />
  </div>
</template>
