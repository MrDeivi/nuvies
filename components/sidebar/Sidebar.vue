<script lang="ts" setup>
const route = useRoute()
</script>

<template>
  <div
    fixed w-60 left-0 top-0 z-50 h-100vh flex-col py-2
    overflow-hidden transform lt-lg:translate-x--80 transition-all duration-200
    lt-xl:hidden flex
  >
    <SidebarHeader />

    <div>
      <div class="scrollbox mt-3 max-h-67rem px-2">
        <div mb-4 px-2 not-first:mt-10>
          <div mb-3 block>
            <span style="letter-spacing: 1px" ml3 font-bold uppercase op40>
              MENU
            </span>
          </div>
          <SidebarLink :to="{ path: '/' }" icon="i-solar:home-angle-2-bold-duotone">
            Home
          </SidebarLink>
          <SidebarLink :active="route.path.startsWith('/movie/explore')" :to="{ path: '/movie/explore/popular' }" icon="i-solar:video-frame-play-vertical-bold-duotone">
            Movies
          </SidebarLink>
          <SidebarLink :active="route.path.startsWith('/tv/explore')" :to="{ path: '/tv/explore/popular' }" icon="i-solar:tv-bold-duotone">
            Tv Shows
          </SidebarLink>
          <SidebarLink :to="{ path: '/genre' }" icon="i-solar:widget-2-bold-duotone">
            Genres
          </SidebarLink>
          <SidebarLink :to="{ path: '/people' }" icon="i-solar:users-group-rounded-bold-duotone">
            People
          </SidebarLink>
        </div>

        <div mb-4 px-2 not-first:mt-10>
          <div mb-3 block>
            <span style="letter-spacing: 1px" ml3 uppercase op40 font="bold">
              LIBRARY
            </span>
          </div>
          <SidebarLink :to="{ path: '/favorites' }" icon="i-solar:hearts-bold-duotone">
            Favorites
          </SidebarLink>
          <SidebarLink :to="{ path: '/recent' }" icon="i-solar:clock-circle-bold-duotone">
            Recent
          </SidebarLink>
        </div>
      </div>
    </div>
    <div mb-4 px-4 mt-auto>
      <a href="https://github.com/MrDeivi/nuvies" target="__blank">
        <div bg-white:10 round hover:bg-white:20 text-center>
          <div p2 px4 flex items-center justify="center" py-3>
            <span i-akar-icons:github-fill inline-block text-2xl mr4 />
            <span class="whitespace-nowrap">View repo</span>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>
