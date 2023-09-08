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

const searchInput = ref('')
const debouncedSearchInput = debouncedRef(searchInput, 500)

async function fetch(page: number): Promise<any> {
  const q = searchInput.value ?? query.value
  if (!q)
    return { results: [], total_pages: 0 }
  try {
    const data = await search(type.value as any, q as string, page)
    return { results: data.results, total_pages: data.total_pages }
  }
  catch (e: any) {
    error.value = e
  }
}

const { data, execute, fetchMore: loadMore, loading, reset } = await usePaginatedFetch<any>(fetch, 'search')

function fetchMore() {
  if (query.value || debouncedSearchInput.value)
    loadMore()
}

watch([type, debouncedSearchInput], async () => {
  reset()
  await execute()
})
watch(data, () => {
  if (data.value.length) {
    if (type.value === 'movie' || type.value === 'tv')
      siteStore.blurMediaUrl = (data.value[0] as Media).backdrop_path
    else
      siteStore.blurMediaUrl = (data.value[0] as Person).profile_path
  }
})

useHead({
  title: computed(() => !data.value.length ? 'Search on Nuvies' : `Search results - ${query.value ?? searchInput.value}`),
  meta: [
    { name: 'description', content: 'Discover hundred of movies and tv shows in Nuvies' },
  ],
})
</script>

<template>
  <div flex="~ col" justify="center" class="2xl:max-w-90rem xl:max-w-70rem w-full m-auto" lt-xl="px5">
    <div flex items-center mb10 justify="between" lt-lg="flex-col !justify-start items-start space-y-4">
      <div
        my-2 w-full flex items-center justify-center relative
      >
        <div flex="~ " justify="center" align="content-center" w-full>
          <div
            w-full
            cursor-text items-center rounded-xl focus-within="ring-2 ring-primary-400" bg-white:10 flex pl4
          >
            <span i-iconoir:search text-xl flex />

            <input
              v-model="searchInput"
              placeholder="Search movies, people, tv shows."
              mx2 w-full border-none bg-transparent p4 outline-none
              type="search"
            >
          </div>
        </div>
      </div>

      <Toggle v-model:model-value="toggle" :options="options" w30rem lt-lg="w-full" />
      <TextHeader op0 :class="{ 'opacity-100': query || searchInput }">
        Search results for: {{ query ?? searchInput }}
      </TextHeader>
    </div>
    <MediaGrid v-if="toggle === 'Movies'" class="p0!" type="movie" :items="data" :fetch-more="fetchMore" :loading="loading" />
    <MediaGrid v-else-if="toggle === 'Tv Shows'" class="p0!" type="tv" :items="data" :fetch-more="fetchMore" :loading="loading" />
    <PersonGrid v-else :items="data" class="p0!" :fetch-more="fetchMore" :loading="loading" />

    <Loader v-if="loading" />

    <div v-else-if="!data.length" text-center flex="~ col" justify="center" items-center py10>
      <span
        flex text-8xl op40 mb6
        :class="{
          'i-solar:tv-bold-duotone': toggle === 'Tv Shows',
          'i-solar:video-frame-play-vertical-bold-duotone': toggle === 'Movies',
          'i-solar:users-group-rounded-bold-duotone': toggle === 'People',
        }"
      />
      <span v-if="query || searchInput" text-2xl>Upps, there aren't results for your search</span>
      <span v-else text-2xl>Try input something to search</span>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
