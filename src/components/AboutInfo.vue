<script setup lang="ts">
import MainBlockTitle from './MainBlockTitle.vue'
import { about } from '../info/info'
</script>

<template>
  <div>
    <MainBlockTitle title="About me" />
    <div>{{ about }}</div>
  </div>
</template>
