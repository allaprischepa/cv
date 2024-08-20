<script setup lang="ts">
import MainBlockTitle from './MainBlockTitle.vue'
import { experience } from '@/info/info'
import { formatDate } from '@/utils/utils'
</script>

<template>
  <div>
    <MainBlockTitle title="Experience" :faIcon="['fas', 'briefcase']" />
    <ul class="space-y-6">
      <li v-for="(expItem, expItemId) in experience.slice().reverse()" :key="expItemId">
        <div class="flex flex-col gap-x-10 mb-2 items-start lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h3 class="font-bold">
              {{ expItem.title }}
            </h3>
            <h4>
              {{ expItem.company }}
            </h4>
          </div>
          <div class="italic min-w-fit">
            {{ formatDate(expItem.startDate) }} - {{ formatDate(expItem.endDate) }}
          </div>
        </div>
        <div class="mb-1">
          Stack:
          <ul class="flex flex-wrap gap-2 items-baseline">
            <li
              v-for="(techItem, techItemId) in expItem.stack"
              :key="techItemId"
              class="border-2 py-1 px-2 rounded-md"
            >
              {{ techItem }}
            </li>
          </ul>
        </div>
        <div>
          Duties & Accomplishments:
          <ul class="list-circle">
            <li v-for="(dutyItem, dutyItemId) in expItem.duties" :key="dutyItemId">
              {{ dutyItem }}
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>
