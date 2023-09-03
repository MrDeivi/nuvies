<script lang="ts" setup>
import type { Media, MediaType } from '~/types'

const props = defineProps<{ item: Media; type: MediaType }>()
</script>

<template>
  <NuxtLink :to="`/${type}/${item.id}`">
    <div relative class="group" overflow="hidden" bg-white:10 rounded-xl cursor-pointer h-full>
      <BadgePrimary absolute top-3 right-0 z-10 />
      <NuxtImg
        format="webp"
        :src="`/tmdb${item?.backdrop_path}`"
        :alt="item?.title || item?.name"
        h-full w-full object-cover shadow-lg rounded-xl group-hover="scale-105"
        transition="all duration-200"
      />

      <div absolute bottom-0 left-0 bg-gradient-to-t from-black:40 via-black:50 p3 wfull>
        <h2 text="lg" font="bold" text-shadow-xl>
          {{ item.title }}
        </h2>
      </div>
    </div>
  </NuxtLink>
</template>

<style lang="scss" scoped></style>
