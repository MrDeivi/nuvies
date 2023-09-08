<script lang="ts" setup>
import Error from '~/error.vue'
</script>

<template>
  <div class="">
    <Error title="This page is under construction">
      <template #icon>
        <span i-solar:code-circle-bold-duotone text-8xl op40 />
      </template>
    </Error>
  </div>
</template>

<style lang="scss" scoped></style>
