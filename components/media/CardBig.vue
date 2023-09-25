<script lang="ts" setup>
import type { Media, MediaType } from '~/types'

const props = defineProps<{ trailer?: string | null ; item: Media; showDetails?: boolean; type: MediaType }>()

const showModal = useIframeModal()
function playTrailer() {
  if (props.trailer)
    showModal(props.trailer)
}

const $img = useImage()
const imgSmall = $img(`/tmdb${props.item.backdrop_path}`, { width: 150, height: 80 })
const imgBig = $img(`/tmdb${props.item.backdrop_path}`, { width: 600, height: 325 })
</script>

<template>
  <div col-span-8 lg:col-span-6 h-auto max-h-60vh relative rounded-xl bg-white:10 overflow="hidden" @click="navigateTo(`/${type}/${item.id}`)">
    <ImageBlurLoader
      :big-image-src="imgBig"
      :small-image-src="imgSmall"
      format="webp" width="600" height="325" :alt="item.title || item.name"
      h-full w-full object-cover shadow-lg
    />

    <BadgePrimary absolute top-3 right-0 z-10 md:hidden />
    <div md:hidden absolute bottom-0 left-0 bg-gradient-to-t from-black:70 via-black:70 p4 wfull>
      <h2 text="2xl" font="bold" text-shadow-xl>
        {{ item.title ?? item.name }}
      </h2>
    </div>
    <div
      lt-md-hidden
      absolute bottom-0 left-0 wfull backdrop="blur-md" p="6"
      class="bg-gradient-to-t from-transparent via-black:30  to-transparent"
    >
      <div class="flex flex-row items-center justify-between">
        <div flex="~" justify-center items-center space="x3">
          <h2 text="4xl " font="bold">
            {{ item.title ?? item.name }}
          </h2>
          <ButtonPrimary v-if="trailer" @click="playTrailer">
            <span i-solar:play-bold flex />
            <span>Play trailer</span>
          </ButtonPrimary>

          <div v-if="showDetails" class="">
            <Badge v-for="(genre, index) in item.genres" :key="index" ml2>
              {{ genre.name }}
            </Badge>
          </div>
        </div>
        <div flex="~" align="items-center" space-x-10>
          <span flex>{{ formatLang(item.original_language) }} <span mt.3 ml-2 class="i-solar:global-linear block text-primary-400" /></span>
          <span v-if="item.runtime" flex>{{ formatTime(item.runtime) }}
            <span mt.3 ml-2 class="i-solar:clock-circle-linear block text-primary-400" /></span>
          <span flex>
            {{ formatNumber(item.vote_average) }} /10
            <span mt.3 ml-2 class="i-solar:star-bold block text-primary-400" /></span>
        </div>
      </div>
      <p text="shadow-lg lg" m="t3">
        {{ item.overview }}
        <NuxtLink v-if="showDetails" :to="`/${type}/${item.id}`" ml-2 link text-primary-400>
          See more
        </NuxtLink>
      </p>
    </div>
  </div>
</template>

<style scoped>
.max-lines {
  display: block;/* or inline-block */
  text-overflow: ellipsis;
  word-wrap: break-word;
  overflow: hidden;
  max-height: 3.6em;
  line-height: 1.8em;
}
</style>
