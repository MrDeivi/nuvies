<script lang="ts" setup>
import type { Media, MediaType } from '~/types'

const props = defineProps<{ title: string; items: Media[]; type: MediaType; hiddeBtn?: boolean }>()
</script>

<template>
  <div class="mt-15">
    <div flex my-7 justify="between" z-10 items-center>
      <h1 text-3xl font-bold>
        {{ title }}
      </h1>
      <NuxtLink v-if="!hiddeBtn" :to="`/${type}/explore/popular`" z-10>
        <Button>
          See All
        </Button>
      </NuxtLink>
    </div>

    <div class="" relative>
      <Slider pb5>
        <template
          v-for="i of items"
          :key="i.id"
        >
          <MediaCard
            v-if="i.poster_path"
            :type="type"
            card-class="w-15rem"
            :item="i"
          />
        </template>
      </Slider>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
