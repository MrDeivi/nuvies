<script setup lang="ts">
import type { Media } from '~/types'

defineProps<{
  item: Media
}>()

const show = useImageModal()
</script>

<template>
  <div flex="~ col" py8 gap6 lt-xl="px5">
    <div flex gap-4 items-baseline>
      <h1 text-3xl font="bold">
        Backdrops
      </h1>
    </div>
    <div grid="~ cols-minmax-20rem" gap6>
      <PhotoCard
        v-for="i, idx of item.images?.backdrops"
        :key="i.file_path"
        :item="i"
        class="aspect-16/9"
        w-full
        @click="show(item.images!.backdrops, idx)"
      />
    </div>
    <div flex mt-10 gap-4 items-baseline>
      <h1 text-3xl font="bold">
        Posters
      </h1>
    </div>
    <div grid="~ cols-minmax-10rem lg:cols-minmax-15rem" gap6>
      <PhotoCard
        v-for="i, idx of item.images?.posters"
        :key="i.file_path"
        :item="i"
        class="aspect-9/16"
        @click="show(item.images!.posters, idx)"
      />
    </div>
  </div>
</template>
