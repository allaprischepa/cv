<script setup lang="ts">
import PhotoComp from './components/PhotoComp.vue'
import NameComp from './components/NameComp.vue'
import ContactInfo from './components/ContactInfo.vue'
import SkillsInfo from './components/SkillsInfo.vue'
import LanguagesInfo from './components/LanguagesInfo.vue'
import AboutInfo from './components/AboutInfo.vue'
import ExperienceInfo from './components/ExperienceInfo.vue'
</script>

<template>
  <aside class="min-w-80 flex flex-col items-center gap-10 p-4">
    <div class="flex flex-col items-center gap-3">
      <PhotoComp />
      <NameComp />
    </div>
    <div class="bg-custom-gradient w-full mt-4 flex-grow">
      <div class="w-max m-auto -mt-4 flex flex-col gap-8">
        <ContactInfo />
        <SkillsInfo />
        <LanguagesInfo />
      </div>
    </div>
  </aside>
  <main class="flex flex-col space-y-8 p-4">
    <AboutInfo />
    <ExperienceInfo />
  </main>
</template>
