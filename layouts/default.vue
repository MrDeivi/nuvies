<script lang="ts" setup>

</script>

<template>
  <div pb20>
    <Sidebar />
    <Navbar />
    <MobileBar />
    <MobileNav />

    <BlurEffect />

    <div p="l-90 t-26 r-30 b-10" lt-xl="px-0 pt-20" transition-all duration-200>
      <slot />
    </div>

    <!-- <Footer /> -->
  </div>
</template>

<style scoped></style>
