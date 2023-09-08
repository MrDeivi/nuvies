<script lang="ts" setup>
import type { Media, MediaType } from '~/types'

const route = useRoute()
const no = computed(() => route.params.id as string)
const type = ref('movie' as MediaType)

const list = await getGenreList(type.value)
const name = computed(() => list.genres.find(item => item.id === +no.value)?.name)

async function fetch(page: number) {
  return await getMediaByGenre(type.value, no.value, page)
}

const { data, fetchMore, loading, reset } = await usePaginatedFetch<Media>(fetch, `${type.value}_media_${no.value}`)

const siteStore = useSiteStore()
onBeforeMount(() => {
  siteStore.blurMediaUrl = data.value[0].backdrop_path
})

useHead({
  title: `Discover ${type.value === 'movie' ? 'movies' : 'tv shows'}`,
  meta: [
    { name: 'description', content: 'Discover hundred of movies and tv shows on Nuvies' },
  ],
})
</script>

<template>
  <div class="">
    <div px7 flex items-center justify="between" lt-md="px5">
      <TextHeader>
        {{ name }}
      </TextHeader>
    </div>
    <MediaGrid :type="type" :items="data" :fetch-more="fetchMore" :loading="loading" class="lt-md:px5" />
    <Loader v-show="loading" />
  </div>
</template>

<style lang="scss" scoped></style>
