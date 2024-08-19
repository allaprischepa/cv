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
  return props.large ? 'text-xl w-10 h-10 bg-gray-200' : 'text-sm w-6 h-6 bg-white';
});
</script>

<template>
  <div :class="['rounded-full flex items-center justify-center text-purple-900', iconClass]">
    <font-awesome-icon :icon="faIcon" v-if="faIcon"/>
    <Icon :icon="iconifyIcon" v-if="iconifyIcon" class="fill-current"/>
  </div>
</template>
