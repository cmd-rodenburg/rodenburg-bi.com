<template>
  <section id="about" class="py-20 bg-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="section-title">About me</h2>

      <div class="container mx-auto px-4">
        <div class="md:grid md:grid-cols-[2fr_1fr] md:gap-12">
          <div>
            <p class="text-xl text-emerald-500 font-semibold mb-8">
              Freelance data engineer with a knack for business intelligence              
            </p>
            <div class="space-y-6 order-last md:order-none">
              <p class="text-justify text-gray-300 leading-relaxed">
              I help organizations turn scattered, unreliable data into clear, decision-ready insight. As a senior data engineer and business intelligence specialist, I design data platforms that give teams control, speed, and confidence in their numbers.
              </p>
              <p class="text-justify text-gray-300 leading-relaxed">
              I have delivered high-impact data solutions for international organizations including Accenture, Cargill, Transavia, and Capgemini, working across the Dutch and German markets. My strength lies in quickly understanding complex business environments and translating them into scalable, maintainable data architectures.
              </p>
              <p class="text-justify text-gray-300 leading-relaxed">
              For nearly a year as an independent freelancer, I have helped companies centralize their data, streamline data pipelines, and build dashboards that actually get used. I implement Data as a Service (DaaS) so data becomes a reliable product, not a bottleneck. From ingestion to insight, I focus on outcomes: faster decisions, less manual work, and a data foundation that supports growth.
              </p>
            </div>
          </div>

          <div class="mt-8 md:mt-0">
            <div class="flex flex-col items-center">
              <div class="w-full max-w-[250px] mb-8">
                <img src="/images/AnneRodenburg.jpg" alt="Profile picture"
                  class="rounded-full w-full aspect-square object-cover shadow-lg" />
              </div>
              <div class="w-full grid grid-cols-2 gap-4">
                <div class="bg-gray-700/50 rounded-lg p-4 text-center">
                  <h3 class="text-xl font-semibold mb-1">6+ years</h3>
                  <p class="text-gray-400 text-sm">Experience</p>
                </div>
                <div class="bg-gray-700/50 rounded-lg p-4 text-center">
                  <h3 class="text-xl font-semibold mb-1">5</h3>
                  <p class="text-gray-400 text-sm">Countries</p>
                </div>
                <div class="bg-gray-700/50 rounded-lg p-4 text-center">
                  <h3 class="text-xl font-semibold mb-1">10</h3>
                  <router-link to="/project-experience" class="text-gray-400 text-sm">Projects </router-link>
                </div>
                <div class="bg-gray-700/50 rounded-lg p-4 text-center">
                  <h3 class="text-xl font-semibold mb-1">10+</h3>
                  <p class="text-gray-400 text-sm">Tech stack</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
