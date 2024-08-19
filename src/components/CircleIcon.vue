<script setup lang="ts">
import { computed } from 'vue'
import { Icon } from '@iconify/vue';

const props = defineProps({
  faIcon: {
    type: Array,
    required: false
  },
  iconifyIcon: {
    type: String,
    required: false
  },
  large: {
    type: Boolean,
    default: false
  },
});

const iconClass = computed(() => {
  return props.large ? 'text-4xl' : 'text-sm w-6 h-6';
});
</script>

<template>
  <div :class="['rounded-full flex items-center justify-center bg-white text-purple-900', iconClass]">
    <font-awesome-icon :icon="faIcon" v-if="faIcon"/>
    <Icon :icon="iconifyIcon" v-if="iconifyIcon" class="fill-current"/>
  </div>
</template>
