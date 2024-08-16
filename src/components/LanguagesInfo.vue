<script setup lang="ts">
import BlockTitle from './BlockTitle.vue'
import { languages } from '../info/info'
</script>

<template>
  <div>
    <BlockTitle title="Languages" />
    <ul>
      <li v-for="language in languages" :key="language.name">
        <div>{{ language.name }}</div>
        <div>{{ language.level }}</div>
      </li>
    </ul>
  </div>
</template>
