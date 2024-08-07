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
  <aside>
    <PhotoComp />
    <NameComp />
    <ContactInfo />
    <SkillsInfo />
    <LanguagesInfo />
  </aside>
  <main>
    <AboutInfo />
    <ExperienceInfo />
  </main>
</template>
