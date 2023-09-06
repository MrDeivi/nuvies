<script lang="ts" setup>
import type { Media } from '~/types'

const props = defineProps<{ item: Media; showDetails?: boolean }>()
const directors = computed(() => props.item.credits?.crew.filter(person => person.job === 'Director'))
</script>

<template>
  <div flex flex-row>
    <div relative w-20rem min-w-20rem lt-lg="hidden">
      <NuxtImg
        width="400"
        height="600"
        format="webp"
        :src="`/tmdb${item.poster_path}`"
        :alt="item.title || item.name"
        block lt-md:hidden rounded-xl border border-white:10
        transition duration-400 object-cover contain-layout aspect="10/16"
        w-full
      />
      <NuxtImg
        v-if="item.poster_path "
        width="500"
        height="800"
        format="webp"
        :src="`/tmdb${item.poster_path}`"
        class="z--10  w-70% left-50%"
        absolute blur-xl opacity="10" h-4rem bottom-0 transform="translate-x--60% translate-y-2"
      />
    </div>

    <div flex="~ col" m="l-30" lt-lg="ml0" lt-xl="px5">
      <h1 text-3xl font="bold">
        Storyline
      </h1>
      <p mt4 text-lg>
        {{ item.overview }}
      </p>

      <div text-lg op80 mt15>
        <ul grid="~ cols-[max-content_1fr] lg:cols-[max-content_1fr_max-content_1fr] gap3" items-center>
          <template v-if="item.release_date">
            <div>
              Release Date
            </div>
            <div>
              {{ formatDate(item.release_date) }}
            </div>
          </template>
          <template v-if="item.runtime">
            <div>
              Runtime
            </div>

            <div>
              {{ formatTime(item.runtime) }}
            </div>
          </template>
          <template v-if="directors?.length">
            <div>
              Director
            </div>

            <div flex="~ row wrap gap1">
              <NuxtLink
                v-for="person of directors"
                :key="person.id"
                :to="`/person/${person.id}`"
                bg="primary-600/30 hover:primary-500" p="x2 y1" transition="all"
                rounded text-sm
              >
                {{ person.name }}
              </NuxtLink>
            </div>
          </template>
          <template v-if="item.budget">
            <div>
              Budget
            </div>

            <div>
              ${{ numberWithCommas(item.budget) }}
            </div>
          </template>
          <template v-if="item.revenue">
            <div>
              Revenue
            </div>

            <div>
              ${{ numberWithCommas(item.revenue) }}
            </div>
          </template>
          <template v-if="item?.genres?.length">
            <div>
              Genre
            </div>

            <div flex="~ row wrap gap1">
              <NuxtLink
                v-for="genre of item.genres" :key="genre.id"
                :to="`/genre/${genre.id}/movie`"
                bg="primary-600/30 hover:primary-500" p="x2 y1" transition="all"
                rounded text-sm
              >
                {{ genre.name }}
              </NuxtLink>
            </div>
          </template>
          <template v-if="item.status">
            <div>
              Status
            </div>

            <div>
              {{ item.status }}
            </div>
          </template>
          <template v-if="item.original_language">
            <div>
              Language
            </div>

            <div>
              {{ formatLang(item.original_language) }}
            </div>
          </template>
          <template v-if="item?.production_companies?.length">
            <div>
              Production
            </div>

            <div>
              {{ item.production_companies.map(i => i.name).join(', ') }}
            </div>
          </template>
        </ul>
      </div>
    </div>
  </div>

  <div mt20>
    <h1 text-3xl font="bold" lt-xl="px5">
      Cast
    </h1>
    <Slider pb5 lt-xl="!pl4">
      <PersonCard
        v-for="i of item.credits?.cast"
        :key="i.id"
        :person="i"
        w-15rem min-w-15rem
      />
    </Slider>
  </div>
</template>

<style lang="scss" scoped></style>
