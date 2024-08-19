<script setup lang="ts">
import BlockTitle from './BlockTitle.vue'
import { location, email, linkedin, github } from '../info/info'
import CircleIcon from './CircleIcon.vue'

const contactItemClass = 'flex gap-2'
</script>

<template>
  <div>
    <BlockTitle title="Contact" />
    <ul class="flex flex-col gap-2">
      <li :class="contactItemClass">
        <CircleIcon :faIcon="['fas', 'location-dot']" />
        {{ location }}
      </li>
      <li :class="contactItemClass">
        <CircleIcon :faIcon="['fas', 'envelope']" />
        <a :href="'mailto:' + email" target="_blank">{{ email }}</a>
      </li>
      <li :class="contactItemClass">
        <CircleIcon :faIcon="['fab', 'linkedin-in']" />
        <a :href="linkedin" target="_blank">My LinkedIn</a>
      </li>
      <li :class="contactItemClass">
        <CircleIcon :faIcon="['fab', 'github']" />
        <a :href="github" target="_blank">My GitHub</a>
      </li>
    </ul>
  </div>
</template>
