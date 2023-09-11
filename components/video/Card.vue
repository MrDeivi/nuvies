<script setup lang="ts">
import type { Video } from '~/types'

const props = defineProps<{
  item: Video
}>()

const showModal = useIframeModal()
function play() {
  return showModal(getVideoLink(props.item)!)
}
</script>

<template>
  <button pb2 text-left @click="play()">
    <div
      block bg-gray4:10 flex rounded-xl overflow="hidden"
      class="aspect-16/9 group"
      transition duration-400 relative
    >
      <NuxtImg
        :src="`/youtube/vi/${item.key}/maxresdefault.jpg`"
        width="400"
        height="600"
        format="webp"
        :alt="props.item.name"
        w-full h-full object-cover transition duration-400
        group-hover="scale-103"
      />
      <ButtonPrimary class="absoluteCenter" transform="scale-0" group-hover="scale-100" rounded-full>
        <div i-solar:play-bold ma text-3xl />
      </ButtonPrimary>
    </div>
    <div mt-2 font-bold text-lg>
      {{ props.item.name }}
    </div>
    <div op60 text-md>
      {{ props.item.type }}
    </div>
  </button>
</template>
