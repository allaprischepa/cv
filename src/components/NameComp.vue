<script setup lang="ts">
import { name, surname, title } from '../info/info'
</script>

<template>
  <div class="text-center">
    <h1 class="uppercase">{{ name }}</h1>
    <h1 class="font-bold uppercase">{{ surname }}</h1>
    <h3>{{ title }}</h3>
  </div>
</template>
