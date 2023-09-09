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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1.5em" height="1.5em"><g fill="none">
              <g clip-path="url(#akarIconsGithubFill0)"><path fill="currentColor" fill-rule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z" clip-rule="evenodd" />
              </g>
              <defs><clipPath id="akarIconsGithubFill0"><path fill="#fff" d="M0 0h24v24H0z" /></clipPath></defs>
            </g>
            </svg>
            <span ml3 class="whitespace-nowrap">View repo</span>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>
