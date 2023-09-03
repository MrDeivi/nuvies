<script setup lang="ts">
import type { Image } from '~/types'

const props = defineProps<{
  item: Image
}>()
</script>

<template>
  <button
    text-left block
    bg-gray4:10 transition
    duration-400 relative rounded-xl
    class="group" overflow="hidden"
    title="View photo"
  >
    <NuxtImg
      width="400"
      height="600"
      format="webp"
      :src="`/tmdb${props.item.file_path}`"
      alt="Photo"
      w-full h-full object-cover rounded-xl group-hover="scale-103"
      transition="all duration-200"
    />
  </button>
</template>
