<script lang="ts" setup>
import { QUERY_LIST } from '~/constants/lists'
import type { Media, MediaType } from '~/types'

const route = useRoute()
const router = useRouter()
const category = computed(() => route.params.category as string)
const type = computed(() => route.params.type as MediaType || 'movie')

const toggle = ref(getCategoryTitle(category.value) ?? 'Popular')
const options = ref(QUERY_LIST[type.value].map(query => query.title))

async function fetch(page: number) {
  return await listMedia(type.value, category.value, page)
}

const { data, fetchMore, loading, reset } = await usePaginatedFetch<Media>(fetch, `media_${type.value}_${category.value}`)

const title = computed(() => {
  return QUERY_LIST[type.value].find(i => i.query === category.value)?.title
})

function getCategoryTitle(category: string) {
  return QUERY_LIST[type.value].find(i => i.query === category)?.title
}

const siteStore = useSiteStore()
onBeforeMount(() => {
  siteStore.blurMediaUrl = data.value[0].backdrop_path
})

watch([type, toggle], () => {
  const query = QUERY_LIST[type.value].find(i => i.title === toggle.value)?.query
  reset()
  router.push(`/${type.value}/explore/${query}`)
})
</script>

<template>
  <div class="">
    <div px7 flex items-center justify="between" lt-md="items-start flex-col px5">
      <TextHeader>
        {{ title }}
      </TextHeader>
      <Toggle v-model:model-value="toggle" :options="options" lt-md="text-sm mt3" />
    </div>
    <MediaGrid :type="type" :items="data" :fetch-more="fetchMore" :loading="loading" class="lt-md:!px5" />
    <Loader v-show="loading" />
  </div>
</template>

<style lang="scss" scoped></style>
