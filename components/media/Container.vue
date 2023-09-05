<script lang="ts" setup>
import type { Media, MediaType } from '~/types'

const props = defineProps<{ title: string; items: Media[]; type: MediaType; hiddeBtn?: boolean }>()
</script>

<template>
  <div mt15 lt-md:mt-7>
    <div flex my-7 justify="between" z-10 items-center lt-xl:px5>
      <TextHeader>
        {{ title }}
      </TextHeader>
      <NuxtLink v-if="!hiddeBtn" :to="`/${type}/explore/popular`" z-10>
        <Button>
          See All
        </Button>
      </NuxtLink>
    </div>

    <div class="" relative lt-xl:pl4>
      <Slider pb5 lt-md:space-x-2>
        <template
          v-for="i of items"
          :key="i.id"
        >
          <MediaCard
            v-if="i.poster_path"
            :type="type"
            card-class="w-15rem lt-md:w-10rem max-h-15rem"
            :item="i"
          />
        </template>
      </Slider>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
