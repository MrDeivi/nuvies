<script lang="ts" setup>
const target = ref()
const router = useRouter()
const showSearchPanel = ref(false)
const { focused } = useFocus(target)
whenever(focused, () => nextTick(() => showSearchPanel.value = true))
const search = ref()

function onSearch() {
  router.push(`/search?q=${encodeURIComponent(search.value)}`)
}
</script>

<template>
  <div
    lt-xl-hidden fixed top-0 left-90
    z-50 h-17 flex items-center pr-8 md:h-24
    style="width: calc(100vw - 25.4rem);"
  >
    <div
      my-2 w-full flex items-center justify-center relative
    >
      <div flex="~ " justify="center" align="content-center">
        <div
          lt-md-hidden w-100 cursor-text items-center rounded-l-full shadow-lg border border-white:10
          md:flex hoverable focus-within:w-200
          relative class="group hover:!bg-[#3a3a3a] bg-[#1d1d1d]"
          :class="{ 'rounded-b-none': search }"
        >
          <input
            ref="target"
            v-model="search"
            placeholder="Search movies, people, tv shows."
            mx2 w-full border-none bg-transparent p2 outline-none
            type="search"
            @keyup.enter="onSearch"
          >
        </div>
        <button
          items-center
          bg-primary-500 w-15 flex hover-bg-primary-700 justify-center
          rounded-r-full cursor-pointer transition="all duration-100" @click="onSearch"
        >
          <span i-iconoir:search text-xl />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
