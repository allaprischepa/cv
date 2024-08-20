<script setup lang="ts">
import BlockTitle from './BlockTitle.vue'
import { skills } from '../info/info'
import CircleIcon from './CircleIcon.vue';
</script>

<template>
  <div>
    <BlockTitle title="Skills" />
    <ul class="grid grid-cols-2 gap-2">
      <li v-for="skill in skills" :key="skill.name" class="text-gray-900 flex gap-2">
        <CircleIcon :faIcon="['fab', skill.faIcon]" v-if="skill.faIcon" />
        <CircleIcon :iconifyIcon="skill.iconifyIcon" v-if="skill.iconifyIcon" />
        {{ skill.name }}
      </li>
    </ul>
  </div>
</template>
