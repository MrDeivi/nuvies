<script setup lang="ts">
import type { Media, MediaType } from '~/types'

const props = defineProps<{
  item: Media
  type: MediaType
  cardClass?: string
}>()

const $img = useImage()
const imgSmall = $img(`/tmdb${props.item.poster_path}`, { width: 100, height: 200 })
</script>

<template>
  <NuxtLink
    :to="`/${type}/${item.id}`" pb2 class="group"
  >
    <div
      block
      :class="[cardClass]"
      class="aspect-10/16"
      transition duration-400 rounded-xl relative
    >
      <div overflow="hidden" h-full bg-white:10 mb3 wfull rounded-xl>
        <ImageBlurLoader
          v-if="item.poster_path"
          :big-image-src="`/tmdb${item.poster_path}`"
          :small-image-src="imgSmall"
          format="webp" width="400"
          height="600" :alt="item.title || item.name"
          h-full w-full object-cover contain-layout rounded-xl group-hover="scale-103"
        />
        <!-- <NuxtImg
          v-if="item.poster_path"
          width="400"
          height="600"
          format="webp"
          :src="`/tmdb${item.poster_path}`"
          :alt="item.title || item.name"
          w-full h-full object-cover contain-layout rounded-xl group-hover="scale-103"
          transition="all duration-200"
        /> -->
      </div>

      <!-- <NuxtImg
        v-if="imgSmall"
        width="400"
        height="600"
        format="webp"
        :src="imgSmall"
        class="z--10  w-70% left-50% group-hover:op0 transition-all duration-700"
        absolute blur-lg opacity="10" h-4rem bottom-0 transform="translate-x--50% translate-y--5"
      /> -->

      <!-- <div v-else h-full op10 flex>
        <div i-ph:question ma text-4xl />
      </div> -->
    </div>
    <div
      :class="cardClass"
      max-w-17rem truncate font-bold :title="item.title || item.name "
    >
      {{ item.title || item.name }}
    </div>
    <div flex text-sm gap-2 items-center>
      <div flex items-center justify="center">
        <span mt1 text-md op60>{{ formatNumber(item.vote_average) }} /10</span>
        <span mt.3 ml-2 text-md class="i-solar:star-bold block text-primary-400" />
      </div>
    </div>
  </NuxtLink>
</template>
