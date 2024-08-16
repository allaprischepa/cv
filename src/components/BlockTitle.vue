<script setup lang="ts">
defineProps({
  title: String
})
</script>

<template>
  <h3 class="bg-gray-800 text-white text-center py-1.5 px-10 uppercase font-extrabold w-full mb-4">
    {{ title }}
  </h3>
</template>
