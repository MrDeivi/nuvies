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
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1.5em" height="1.5em"><g fill="none">
            <g clip-path="url(#akarIconsGithubFill0)"><path fill="currentColor" fill-rule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z" clip-rule="evenodd" />
            </g>
            <defs><clipPath id="akarIconsGithubFill0"><path fill="#fff" d="M0 0h24v24H0z" /></clipPath></defs>
          </g>
          </svg>
        </a>
      </Button>
    </div>
  </div>
</template>

<style  scoped></style>
