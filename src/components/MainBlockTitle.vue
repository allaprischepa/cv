<script setup lang="ts">
import CircleIcon from './CircleIcon.vue';

defineProps({
  title: String,
  faIcon: Array,
})
</script>

<template>
  <div class="flex gap-2 items-center mb-4">
    <CircleIcon large :faIcon="faIcon" v-if="faIcon" />
    <h2 class="font-bold uppercase w-full border-b-2">{{ title }}</h2>
  </div>
</template>
