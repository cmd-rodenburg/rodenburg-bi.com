<script setup lang="ts">
import NavigationBar    from '../components/Layout/NavigationBar.vue';
import Header           from '../components/Layout/Header.vue'
import HeroSection      from '../components/Sections/1_Main/1_HeroSection.vue';
import ClientLogoStrip  from '../components/Sections/1_Main/0_ClientLogoStrip.vue';
import AboutSection     from '../components/Sections/1_Main/2_AboutSection.vue';
import TimelineSection  from '../components/Sections/1_Main/2b_TimelineSection.vue';
import FeaturedProjects from '../components/Sections/1_Main/3_FeaturedProjectsSection.vue'
import Services         from '../components/Sections/1_Main/4_ServicesSection.vue'
import DiagnosticSection from '../components/Diagnostic/DiagnosticSection.vue'
import HowIWorkSection  from '../components/Sections/1_Main/4b_HowIWorkSection.vue';
import SkillsSection    from '../components/Sections/1_Main/5_SkillsSection.vue';
import DashboardSection from '../components/Sections/1_Main/5b_DashboardSection.vue';
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
      <ClientLogoStrip />
      <AboutSection />
      <TimelineSection />
      <FeaturedProjects />
      <Services />
      <DiagnosticSection />
      <HowIWorkSection />
      <SkillsSection />
      <DashboardSection />
      <Blog/>
      <ContactSection />
    </main>
    <AskAnneWidget />
  </div>
</template>
