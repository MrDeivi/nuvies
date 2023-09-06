<script lang="ts" setup>
const { y } = useWindowScroll()
</script>

<template>
  <div
    fixed xl:hidden top-0 left-0 wfull h-16 z-100
    transition="all duration-50"
    :class="{ 'backdrop-blur-xl bg-white:10': y > 10 }"
  >
    <div hfull flex items-center lt-xl-px-5 px-10 lt-md="px4">
      <NuxtLink to="/" flex items-center class="no-touch">
        <LogosAppLogo class="scale-120" w12 />
        <h2 class="mb-0 ml2 font-bold text-3xl select-none">
          Nuvies
        </h2>
      </NuxtLink>

      <NuxtLink to="/search" ml-auto>
        <Button class="!rounded-full !p2">
          <span i-iconoir:search text-xl flex />
        </Button>
      </NuxtLink>

      <Button class="!rounded-full !p2" ml2>
        <a href="https://github.com/MrDeivi/nuvies" target="__blank" ml-auto>
          <span i-akar-icons:github-fill flex text-xl />
        </a>
      </Button>
    </div>
  </div>
</template>

<style  scoped></style>
