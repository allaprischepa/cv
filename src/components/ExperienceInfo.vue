<script setup lang="ts">
import MainBlockTitle from './MainBlockTitle.vue'
import { experience } from '@/info/info'
import { formatDate } from '@/utils/utils'
</script>

<template>
  <MainBlockTitle title="Experience" />
  <ul v-for="(expItem, expItemId) in experience.slice().reverse()" :key="expItemId">
    <li>
      <div>
        {{ expItem.title }}
      </div>
      <div>
        {{ expItem.company }}
      </div>
      <div>{{ formatDate(expItem.startDate) }} - {{ formatDate(expItem.endDate) }}</div>
      <div>
        Stack:
        <ul v-for="(techItem, techItemId) in expItem.stack" :key="techItemId">
          <li>{{ techItem }}</li>
        </ul>
      </div>
      <div>
        Duties & Accomplishments::
        <ul v-for="(dutyItem, dutyItemId) in expItem.duties" :key="dutyItemId">
          <li>{{ dutyItem }}</li>
        </ul>
      </div>
    </li>
  </ul>
</template>
