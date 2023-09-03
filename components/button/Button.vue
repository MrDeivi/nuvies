<script lang="ts" setup>

</script>

<template>
  <div
    hover:bg-white:20 bg-white:10 py3 px5 rounded-xl cursor-pointer
    active:bg-white:10
    transition="all duration-100"
  >
    <slot />
  </div>
</template>>

<style lang="scss" scoped></style>
