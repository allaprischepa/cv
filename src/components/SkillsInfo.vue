<script setup lang="ts">
import BlockTitle from './BlockTitle.vue'
import { skills } from '../info/info'
</script>

<template>
  <div>
    <BlockTitle title="Skills" />
    <ul>
      <li v-for="skill in skills" :key="skill">{{ skill }}</li>
    </ul>
  </div>
</template>
