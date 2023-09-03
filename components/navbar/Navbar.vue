<script lang="ts" setup>
const target = ref()
const showSearchPanel = ref(false)
const { focused } = useFocus(target)
whenever(focused, () => nextTick(() => showSearchPanel.value = true))
</script>

<template>
  <div
    lt-lg-hidden fixed top-0 left-90
    z-50 h-17 flex items-center pr-8 md:h-24
    style="width: calc(100vw - 25.4rem);"
  >
    <div
      my-2 w-full flex items-center justify-center
    >
      <div
        lt-md-hidden w-100 cursor-text items-center rounded-full mr-20 shadow-lg border border-white:10
        p-2 md:flex hoverable focus-within:w-200
        relative class="group hover:!bg-[#3a3a3a] bg-[#1d1d1d]"
      >
        <span i-iconoir:search ml2 text-2xl />
        <input
          ref="target"
          placeholder="Search movies, people, tv shows."
          mx2 w-full border-none bg-transparent outline-none
          type="search"
        >
        <div
          class="ml-auto items-center mr-1 w-15 flex justify-center rounded-full bg-white/10  cursor-text py.5 px2"
        >
          <span class="i-solar:command-linear inline-flex text-xs mr-2" /> K
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
