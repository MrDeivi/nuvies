<script lang="ts" setup>
const route = useRoute()
</script>

<template>
  <div
    fixed xl:hidden bottom-7 left-0 wfull h-16 z-300 p4
  >
    <div backdrop-blur-2xl rounded-full of-hidden p1 bg-white:10>
      <div flex="~ row" justify="around" hfull>
        <MobileBarLink :to="{ path: '/' }" icon="i-solar:home-angle-2-bold">
          Home
        </MobileBarLink>
        <MobileBarLink :to="{ path: '/movie/explore/popular' }" :active="route.path.startsWith('/movie/explore')" icon="i-solar:video-frame-play-vertical-bold-duotone">
          Movies
        </MobileBarLink>
        <MobileBarLink :to="{ path: '/tv/explore/popular' }" :active="route.path.startsWith('/tv/explore')" icon="i-solar:tv-bold-duotone">
          Tv Shows
        </MobileBarLink>
        <MobileBarLink :to="{ path: '/genre' }" icon="i-solar:widget-2-bold-duotone">
          Genres
        </MobileBarLink>
        <MobileBarLink :to="{ path: '/people' }" icon="i-solar:users-group-rounded-bold-duotone">
          People
        </MobileBarLink>
      </div>
    </div>
  </div>
</template>

<style  scoped></style>
