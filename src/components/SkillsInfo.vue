<script setup lang="ts">
import BlockTitle from './BlockTitle.vue'
import { skills } from '../info/info'
</script>

<template>
  <BlockTitle title="Skills" />
  <ul v-for="skill in skills" :key="skill">
    <li>{{ skill }}</li>
  </ul>
</template>
