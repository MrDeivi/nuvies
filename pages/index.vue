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

useHead({
  title: 'Nuvies',
  meta: [
    { name: 'description', content: 'Discover hundred of movies and tv shows in Nuvies' },
  ],
})
</script>

<template>
  <div flex justify="center">
    <div class="2xl:max-w-90rem xl:max-w-70rem w-full">
      <MediaSectionHero type="movie" :item="item" :trailer="trailer" :recommendations="popularMovies.results" />
      <MediaContainer type="movie" :items="popularMovies.results.slice(3)" title="Popular Movies" />
      <MediaContainer type="tv" :items="popularShows.results" title="Popular TV Shows" />
    </div>
  </div>
</template>
