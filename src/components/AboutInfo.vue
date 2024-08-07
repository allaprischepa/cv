<script setup lang="ts">
import MainBlockTitle from './MainBlockTitle.vue'
import { about } from '../info/info'
</script>

<template>
  <MainBlockTitle title="About me" />
  <div>{{ about }}</div>
</template>
