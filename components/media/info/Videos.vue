<script lang="ts" setup>
import type { Media } from '~/types'

const props = defineProps<{ item: Media }>()
</script>

<template>
  <div min-h-40rem lt-xl="px5">
    <div v-if="!item.videos?.results.length" flex="~ col" space="y7">
      <span i-solar:emoji-funny-circle-line-duotone flex text-7xl text-gray m-auto />
      <span text-2xl m-auto flex text-gray>No videos</span>
    </div>
    <div v-else grid="~ cols-minmax-20rem" gap4>
      <VideoCard v-for="i of item.videos?.results" :key="i.id" :item="i" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
