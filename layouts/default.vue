<script lang="ts" setup>

</script>

<template>
  <div pb20>
    <Sidebar />
    <Navbar />

    <BlurEffect />

    <div p="l-90 t-26 r-30 b-10" lt-lg="pt13 pl0 pr0" transition-all duration-200>
      <slot />
    </div>

    <!-- <Footer /> -->
  </div>
</template>

<style scoped></style>
