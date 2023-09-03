<script setup lang="ts">
import { QUERY_LIST } from '~/constants/lists'
import type { Media } from '~/types'

const [popularMovies, popularShows] = await Promise.all([
  listMedia('movie', QUERY_LIST.movie[0].query, 1),
  listMedia('tv', QUERY_LIST.tv[0].query, 1),
])

const item = popularMovies.results[0]
const itemDetails = ref<Media>()

const siteStore = useSiteStore()
const trailer = computed(() => itemDetails.value ? getTrailer(itemDetails.value) : undefined)

onMounted(() => {
  siteStore.blurMediaUrl = item.backdrop_path
  getMedia('movie', item.id).then((data) => {
    itemDetails.value = data
  })
})
</script>

<template>
  <div flex justify="center">
    <div max-w-95rem>
      <MediaSectionHero type="movie" :item="item" :trailer="trailer" :recommendations="popularMovies.results" />
      <MediaContainer type="movie" :items="popularMovies.results.slice(3)" title="Popular Movies" />
      <MediaContainer type="tv" :items="popularShows.results" title="Popular TV Shows" />
    </div>
  </div>
</template>
