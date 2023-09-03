<script lang="ts" setup>

</script>

<template>
  <button
    bg-primary-500
    py2 px3 rounded-xl cursor-pointer hover:bg-primary-400 flex space="x2" items-center transition="all duration-200"
  >
    <slot />
  </button>
</template>

<style lang="scss" scoped></style>
