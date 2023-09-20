<script lang="ts" setup>
import type { Person } from '~/types'

const props = defineProps<{ loading: boolean; fetchMore: Function; items: Person[] }>()
</script>

<template>
  <div grid="~ cols-minmax-10rem lg:cols-minmax-15rem" gap="x5 y15 lt-md:x3" p8 lt-md:px5>
    <template
      v-for="(item, j) in items"
      :key="item.id"
    >
      <PersonCard
        data-aos="fade-left"
        :data-aos-delay="100 * j"
        :data-aos-offset="-300"
        :person="item" hmin
      />
    </template>
  </div>
</template>

<style lang="scss" scoped></style>
