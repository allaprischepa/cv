<script setup lang="ts">
import BlockTitle from './BlockTitle.vue'
import { languages } from '../info/info'
</script>

<template>
  <BlockTitle title="Languages" />
  <ul v-for="language in languages" :key="language.name">
    <li>
      <div>{{ language.name }}</div>
      <div>{{ language.level }}</div>
    </li>
  </ul>
</template>
