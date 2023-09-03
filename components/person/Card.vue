<script lang="ts" setup>
import type { Person } from '~/types'

const props = defineProps<{ person: Person }>()
const imgLoaded = ref(false)
</script>

<template>
  <NuxtLink :to="`/person/${person.id}`">
    <div
      block bg-gray4:10
      class="group aspect-10/16"
      transition duration-400 rounded-xl relative
    >
      <NuxtImg
        v-if="person.profile_path"
        width="500"
        height="800"
        format="webp"
        :src="`/tmdb${person.profile_path}`"
        :alt="person.name"
        border
        border-white:10 w-full
        h-full object-cover rounded-xl hover="opacity-80" transition="all duration-200"
        @load="imgLoaded = true"
      />
      <div v-else h-full op10 justify="center" items-center flex>
        <div i-ph:user text-6rem />
      </div>
      <NuxtImg
        v-if="person.profile_path && imgLoaded"
        width="500"
        height="800"
        format="webp"
        :src="`/tmdb${person.profile_path}`"
        class="z--10  w-70% left-50% group-hover:op0 transition-all duration-700"
        absolute blur-lg opacity="10" h-4rem bottom-0 transform="translate-x--50% translate-y-2"
      />
    </div>
    <div mt-4 text-xl>
      <span>{{ person.name }}</span>
    </div>
    <div op50 text-lg max-w-15rem truncate :title="person.character || person.known_for_department">
      <span>{{ person.character || person.known_for_department }}</span>
    </div>
  </NuxtLink>
</template>

<style lang="scss" scoped>
</style>
