<script lang="ts" setup>
import type { Media, MediaType } from '~/types'

const props = defineProps<{ loading: boolean; fetchMore: Function; items: Media[]; type: MediaType }>()
const { loading, fetchMore } = toRefs(props)
useInfiniteGrid(loading, fetchMore.value)
</script>

<template>
  <div grid="~ cols-minmax-10rem lg:cols-minmax-15rem" gap="x5 y15" p8>
    <template
      v-for="item in items"
      :key="item.id"
    >
      <MediaCard
        v-if="item.poster_path"
        :item="item"
        :type="type"
      />
    </template>
  </div>
</template>

<style lang="scss" scoped></style>
