<script lang="ts" setup>
import type { Media } from '~/types'

const props = defineProps<{ title: string; items: Media[] }>()

const credits = [...props.items]
  .sort((a, b) => (b.release_date || b.first_air_date || '9999')
    .localeCompare(a.release_date || a.first_air_date || '9999'))
</script>

<template>
  <div class="mb20">
    <div flex="~ col" gap1>
      <h1 text-3xl font="bold" mb5 ml2>
        {{ title }}
      </h1>

      <div grid="~ cols-minmax-15rem lg:cols-minmax-20rem" gap="5">
        <NuxtLink
          v-for="i of credits"
          :key="i.id"
          :to="`/${i.media_type}/${i.id}`" z3
          flex="col" p4 bg-gray:5 hover:bg-gray:10 rounded-xl
        >
          <div flex="~ row">
            <div v-if="i.release_date || i.first_air_date" mr2>
              {{ i.release_date ? i.release_date.slice(0, 4) : i.first_air_date ? i.first_air_date.slice(0, 4) : '-' }} ·
            </div>
            <div>{{ i.title || i.name }}</div>
          </div>
          <div v-if="i.character" op50>
            as {{ i.character }}
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
