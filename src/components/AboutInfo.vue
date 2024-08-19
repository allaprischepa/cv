<script setup lang="ts">
import MainBlockTitle from './MainBlockTitle.vue'
import { about } from '../info/info'
</script>

<template>
  <div>
    <MainBlockTitle title="About me" :faIcon="['fas', 'user']"/>
    <div>{{ about }}</div>
  </div>
</template>
