<script setup lang="ts">
import PhotoComp from './components/PhotoComp.vue'
import NameComp from './components/NameComp.vue'
import ContactInfo from './components/ContactInfo.vue'
import SkillsInfo from './components/SkillsInfo.vue'
import LanguagesInfo from './components/LanguagesInfo.vue'
import AboutInfo from './components/AboutInfo.vue'
import ExperienceInfo from './components/ExperienceInfo.vue'
import EducationInfo from './components/EducationInfo.vue'
</script>

<template>
  <aside class="w-screen px-0 md:min-w-80 md:max-w-md flex flex-col items-center gap-8 md:px-4 pt-4 box-border mb-4 md:mb-0">
    <div class="flex flex-col items-center gap-3">
      <PhotoComp />
      <NameComp />
    </div>
    <div class="bg-custom-gradient w-full mt-4 flex-grow pb-4">
      <div class="w-fit m-auto -mt-4 flex flex-col gap-8 px-6">
        <ContactInfo />
        <SkillsInfo />
        <EducationInfo />
        <LanguagesInfo />
      </div>
    </div>
  </aside>
  <main class="flex flex-col space-y-8 p-4 md:pl-0 box-border">
    <AboutInfo />
    <ExperienceInfo />
  </main>
</template>
