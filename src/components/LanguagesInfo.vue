<script setup lang="ts">
import BlockTitle from './BlockTitle.vue'
import { languages } from '../info/info'
</script>

<template>
  <div>
    <BlockTitle title="Languages" />
    <ul>
      <li v-for="language in languages" :key="language.name" class="flex gap-2">
        <div class="text-gray-900">{{ language.name }}</div>
        <div class="text-gray-500 italic">{{ language.level }}</div>
      </li>
    </ul>
  </div>
</template>
