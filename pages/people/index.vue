<script lang="ts" setup>
import type { Person } from '~/types'

async function fetch(page: number) {
  return await getPeople()
}

const { data, fetchMore, loading, reset } = await usePaginatedFetch<Person>(fetch, 'people')

const siteStore = useSiteStore()
onBeforeMount(() => {
  siteStore.blurMediaUrl = data.value[0].profile_path
})
</script>

<template>
  <div class="">
    <div px7 flex items-center justify="between" lt-md="px5">
      <TextHeader>
        Trending people
      </TextHeader>
    </div>
    <PersonGrid :items="data" :fetch-more="fetchMore" :loading="loading" />
    <Loader v-show="loading" />
  </div>
</template>

<style lang="scss" scoped></style>
