<script lang="ts" setup>
import type { Media } from '~/types'

const props = defineProps<{ item: Media }>()
</script>

<template>
  <MediaPhotos :item="item" />
</template>

<style lang="scss" scoped></style>
