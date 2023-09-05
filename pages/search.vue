<script lang="ts" setup>
import type { Media, Person } from '~/types'

definePageMeta({
  pageTransition: false,
})
const siteStore = useSiteStore()

const route = useRoute()
const error = ref<unknown>()
const toggle = ref('Movies')
const options = ref(['Movies', 'Tv Shows', 'People'])
const types: Record<string, string> = {
  'Movies': 'movie',
  'Tv Shows': 'tv',
  'People': 'person',
}
const query = computed(() => route.query.q)
const type = computed(() => types[toggle.value])

async function fetch(page: number): Promise<any> {
  if (!query.value)
    return { results: [], total_pages: 0 }
  try {
    const data = await search(type.value as any, query.value as string, page)
    return { results: data.results, total_pages: data.total_pages }
  }
  catch (e: any) {
    error.value = e
  }
}

const { data, fetchMore, loading, reset } = await usePaginatedFetch<any>(fetch, 'search')
watch(type, () => reset())
watch(data, () => {
  if (data.value.length) {
    if (type.value === 'movie' || type.value === 'tv')
      siteStore.blurMediaUrl = (data.value[0] as Media).backdrop_path
    else
      siteStore.blurMediaUrl = (data.value[0] as Person).profile_path
  }
})
</script>

<template>
  <div flex="~ col" justify="center">
    <div px7 flex items-center mb10 justify="between">
      <TextHeader>
        Search results for: {{ query }}
      </TextHeader>
      <Toggle v-model:model-value="toggle" :options="options" w30rem />
    </div>
    <MediaGrid v-if="toggle === 'Movies'" class="p0!" type="movie" :items="data" :fetch-more="fetchMore" :loading="loading" />
    <MediaGrid v-else-if="toggle === 'Tv Shows'" class="p0!" type="tv" :items="data" :fetch-more="fetchMore" :loading="loading" />
    <PersonGrid v-else :items="data" :fetch-more="fetchMore" :loading="loading" />

    <Loader v-show="loading" />
  </div>
</template>

<style lang="scss" scoped></style>
