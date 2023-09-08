<script lang="ts" setup>
import type { Media, MediaType } from '~/types'

const props = defineProps<{ trailer?: string | null; item: Media; recommendations: Media[]; type: MediaType }>()
</script>

<template>
  <div class="">
    <Slider pb5 class="!px5" lt-md:space-x-2 md-hidden>
      <NuxtLink :to="`/movie/${item.id}`">
        <MediaCardBig :item="item" :type="type" :trailer="trailer" :show-details="true" class="min-w-25rem min-h-17rem hfull" />
      </NuxtLink>
      <NuxtLink :to="`/movie/${recommendations[1].id}`">
        <MediaCardBig :item="recommendations[1]" :type="type" :show-details="true" class="min-w-25rem min-h-17rem hfull" />
      </NuxtLink>
      <NuxtLink :to="`/movie/${recommendations[2].id}`">
        <MediaCardBig :item="recommendations[2]" :type="type" :show-details="true" class="min-w-25rem min-h-17rem hfull" />
      </NuxtLink>
      <NuxtLink :to="`/movie/${recommendations[3].id}`">
        <MediaCardBig :item="recommendations[3]" :type="type" :show-details="true" class="min-w-25rem min-h-17rem hfull" />
      </NuxtLink>
    </Slider>
  </div>
  <div grid grid-cols-8 gap-7 lt-xl:px5>
    <MediaCardBig lt-md:hidden :item="item" :type="type" :trailer="trailer" :show-details="true" />
    <div
      grid gap7 col-span-8 z2 max-h-60vh
      grid-cols-3 grid-rows-1
      lg="grid-cols-1 grid-rows-3 col-span-2"
      lt-md-hidden
    >
      <MediaCardRecommendation :type="type" :item="recommendations[1]" />
      <MediaCardRecommendation :type="type" :item="recommendations[2]" />
      <MediaCardRecommendation :type="type" :item="recommendations[3]" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
