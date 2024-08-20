<script setup lang="ts">
import BlockTitle from './BlockTitle.vue'
import { education } from '../info/info'
import { formatDate } from '@/utils/utils';
</script>

<template>
  <div>
    <BlockTitle title="Education" />
    <div>
      <h5 class="text-center text-gray-500 italic my-2">University</h5>
      <ul>
        <li v-for="(university, uIndex) in education.university" :key="uIndex">
          <div class="font-bold">{{ university.name }}</div>
          <div>{{ university.degree }}, {{ university.field }}</div>
          <div class="italic text-gray-500">{{ formatDate(university.startDate) }} - {{ formatDate(university.endDate) }}</div>
        </li>
      </ul>
    </div>
    <div>
      <h5 class="text-center text-gray-500 italic my-2">Certifications</h5>
      <ul class="flex flex-col gap-3">
        <li v-for="(certification, cIndex) in education.certifications.reverse()" :key="cIndex">
          <div class="font-bold">{{ certification.courseName }} (Score: {{ certification.score }})</div>
          <div>{{ certification.schoolName }}</div>
          <div class="italic text-gray-500">{{ formatDate(certification.date) }}</div>
          <a :href="certification.link" target="_blank" class="button">
            Show certificate
            <font-awesome-icon :icon="['fas', 'arrow-right']" class="-rotate-30 opacity-70 ml-0.5" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
