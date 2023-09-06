<script lang="ts" setup>
import type { Person } from '~/types'

const props = defineProps<{ person: Person }>()
const { person } = toRefs(props)
</script>

<template>
  <div flex flex-row lt-lg="flex-col" lt-xl="px-5">
    <div relative w-20rem min-w-20rem m-auto>
      <NuxtImg
        width="400"
        height="600"
        format="webp"
        :src="`/tmdb${person.profile_path}`"
        :alt="person.name || person.also_known_as?.[0]"
        block rounded-xl border border-white:10
        transition duration-400 object-cover contain-layout aspect="10/16"
        w-full lt-lg="max-h-25rem"
      />
      <NuxtImg
        v-if="person.profile_path"
        width="500"
        height="800"
        format="webp"
        :src="`/tmdb${person.profile_path}`"
        class="z--10  w-70% left-50%"
        absolute blur-xl opacity="10" h-4rem bottom-0 transform="translate-x--60% translate-y-2"
      />
    </div>

    <div flex="~ col" m="l-30" lt-lg="ml0 pt10" lt-xl="px0">
      <h1 text-3xl font="bold" lt-xl="text-center">
        {{ person.name }}
      </h1>
      <p mt4 text-lg>
        {{ person.biography }}
      </p>

      <div text-lg op80 mt15>
        <ul grid="~ cols-[max-content_1fr] gap3" items-center>
          <template v-if="person.birthday">
            <div>
              Birth Date:
            </div>
            <div>
              {{ formatDate(person.birthday) }}
            </div>
          </template>

          <template v-if="person.known_for_department">
            <div>
              Known for:
            </div>
            <div>
              {{ person.known_for_department }}
            </div>
          </template>

          <template v-if="person.place_of_birth">
            <div>
              Place of birth:
            </div>
            <div>
              {{ person.place_of_birth }}
            </div>
          </template>

          <template v-if="person.popularity">
            <div>
              Popularity:
            </div>
            <div>
              {{ person.popularity }}
            </div>
          </template>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
