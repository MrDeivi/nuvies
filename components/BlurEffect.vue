<script lang="ts" setup>
const { blurMediaUrl } = storeToRefs(useSiteStore())
</script>

<template>
  <NuxtImg
    v-if="blurMediaUrl"
    width="400"
    height="225"
    format="webp"
    :src="`/tmdb${blurMediaUrl}`"
    w70vw h-80vh bg-cover top-0 left-20vw bg-no-repeat
    class="duration-1000 transition-all"
    scale-120 blur-3xl op30 absolute
  />
</template>

<style lang="scss" scoped></style>
