<script setup lang="ts">
defineProps({
  title: String
})
</script>

<template>
  <div class="bg-gray-800 text-white text-xl py-1 px-10 uppercase font-extrabold w-full">
    {{ title }}
  </div>
</template>
