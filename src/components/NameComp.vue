<script setup lang="ts">
import { name, surname, title } from '../info/info'
</script>

<template>
  <div>
    <div class="text-3xl uppercase">{{ name }}</div>
    <div class="text-3xl font-bold uppercase">{{ surname }}</div>
    <div class="text-xl">{{ title }}</div>
  </div>
</template>
