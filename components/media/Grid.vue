<script lang="ts" setup>
import type { Media, MediaType } from '~/types'

const props = defineProps<{ loading?: boolean; fetchMore?: Function; items: Media[]; type: MediaType }>()
const { loading, fetchMore } = toRefs(props)
if (fetchMore?.value)
  useInfiniteGrid(loading, fetchMore.value)
</script>

<template>
  <div grid="~ cols-minmax-10rem lg:cols-minmax-15rem" gap="x5 y15" lt-md="gap-x-3 gap-y-10 p4" p8>
    <template
      v-for="(item, j) in items"
      :key="item.id"
    >
      <MediaCard
        v-if="item.poster_path"
        data-aos="fade-left"
        :data-aos-delay="100 * j"
        :data-aos-offset="-300"
        :item="item"
        :type="type"
      />
    </template>
  </div>
</template>

<style lang="scss" scoped></style>
