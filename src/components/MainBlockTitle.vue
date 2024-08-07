<script setup lang="ts">
defineProps({
  title: String
})
</script>

<template>
  <div class="text-2xl font-bold py-1 uppercase w-full">{{ title }}</div>
</template>
