<script setup lang="ts">
import type { MediaType } from '~/types'

const route = useRoute()
const toggle = ref('Details')
const options = ref(['Details', 'Shots', 'Videos'])

const id = computed(() => route.params.id as string)
const type = computed(() => route.params.type as MediaType || 'movie')

const [item, recommendations] = await Promise.all([
  getMedia(type.value, id.value),
  getRecommendations(type.value, id.value),
])
const trailer = computed(() => item ? getTrailer(item) : undefined)

const $img = useImage()
const siteStore = useSiteStore()
onBeforeMount(() => siteStore.blurMediaUrl = item.backdrop_path)

const showModal = useIframeModal()
function playTrailer() {
  if (trailer.value)
    showModal(trailer.value)
}

useHead({
  title: item.name || item.title,
  meta: [
    { name: 'description', content: item.overview },
    { property: 'og:image', content: $img(`/tmdb${item.poster_path}`, { width: 1200, height: 630 }) },
  ],
})
</script>

<template>
  <div flex justify="center">
    <div wfull max-w-80rem lt-xl="px5">
      <MediaCardBig :type="type" :trailer="trailer" :item="item" class="min-h-17rem hfull" />
    </div>
  </div>
  <div flex justify="center">
    <div wfull lt-xl="px5" mt5>
      <ButtonPrimary v-if="trailer" wfull text-center md:hidden justify="center" h12 relative @click="playTrailer">
        <span i-solar:play-bold />
        <span>Play Trailer</span>
      </ButtonPrimary>
    </div>
  </div>

  <div max-w-40rem m="x-auto t-15 b-30" lt-xl="px5 mb0 mt10">
    <Toggle v-model="toggle" :options="options" />
  </div>

  <div max-w-80rem m="x-auto t-10">
    <div>
      <MediaInfo v-if="toggle === 'Details'" :item="item" />
      <MediaInfoShots v-else-if="toggle === 'Shots'" :item="item" />
      <MediaInfoVideos v-else :item="item" />
    </div>
    <div mt30 lt-lg="mt-0">
      <MediaContainer hidde-btn type="movie" :items="recommendations.results" :title="`Recommended ${type === 'movie' ? 'Movies' : 'Tv Shows'}`" />
    </div>
  </div>
</template>

<style>
</style>
