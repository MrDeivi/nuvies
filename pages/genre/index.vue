<script lang="ts" setup>
const route = useRoute()
const results = await getGenreList('movie')

const siteStore = useSiteStore()
onBeforeMount(() => {
  siteStore.blurMediaUrl = ''
})
</script>

<template>
  <div class="">
    <div px7 flex items-center justify="between">
      <TextHeader>
        Discover Movies by Genres
      </TextHeader>
    </div>
    <div grid="~ cols-minmax-10rem lg:cols-minmax-15rem" gap="x5 y15" p8>
      <div v-for="(genre, index) in results.genres" :key="index" class="group">
        <NuxtLink :to="`/genre/movie/${genre.id}`">
          <div
            bg-gradient-to-br from-primary-300:20 via-white:10 to-white:10 min-h30
            px4 py1 cursor-pointer z-1000 rounded-lg flex h10 items-center justify="center"
            group-hover="ring-2 ring-primary via-primary-400/30" transition="all duration-200"
            :title="`Explore ${genre.name} movies`"
          >
            <h1 text-xl font="bold" flex items-center>
              {{ genre.name }}
              <span
                i-solar:map-arrow-right-bold-duotone flex op0 transform="translate-x--2"
                group-hover="op100 translate-x-0" transition="all duration-200"
                ml4
              />
            </h1>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
