<script setup lang="ts">
import BlockTitle from './BlockTitle.vue'
import { location, email, linkedin, github } from '../info/info'
</script>

<template>
  <div>
    <BlockTitle title="Contact" />
    <ul>
      <li>{{ location }}</li>
      <li>{{ email }}</li>
      <li><a :href="linkedin" target="_blank">My LinkedIn</a></li>
      <li><a :href="github" target="_blank">My GitHub</a></li>
    </ul>
  </div>
</template>
