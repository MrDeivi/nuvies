<script lang="ts" setup>
import type { Media, MediaType } from '~/types'

const props = defineProps<{ trailer?: string | null; item: Media; recommendations: Media[]; type: MediaType }>()
</script>

<template>
  <div grid grid-cols-8 gap-7>
    <MediaCardBig :item="item" :type="type" :trailer="trailer" :show-details="true" />
    <div grid grid-cols-1 grid-rows-3 gap7 col-span-2 z2 max-h-60vh>
      <MediaCardRecommendation :type="type" :item="recommendations[1]" />
      <MediaCardRecommendation :type="type" :item="recommendations[2]" />
      <MediaCardRecommendation :type="type" :item="recommendations[3]" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
