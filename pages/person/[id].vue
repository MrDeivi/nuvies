<script lang="ts" setup>
const route = useRoute()
const id = computed(() => route.params.id as string)
const toggle = ref('Known for')
const options = ref(['Known for', 'Credits', 'Photos'])

const person = await getPerson(id.value)
const siteStore = useSiteStore()
onBeforeMount(() => siteStore.blurMediaUrl = person.profile_path)

const show = useImageModal()
</script>

<template>
  <div wfull max-w-80rem m-auto mt10>
    <PersonInfo :person="person" />
  </div>

  <div max-w-40rem m="x-auto t-15 b-30" lt-xl="px5 mb10">
    <Toggle v-model="toggle" :options="options" />
  </div>

  <div max-w-80rem m="x-auto t-10" lt-xl="px5 !mt0">
    <template v-if="toggle === 'Known for' && person.combined_credits?.cast">
      <MediaGrid type="movie" class="p-0! grid-cols-minmax-15rem lg:grid-cols-minmax-16rem!" :items="person.combined_credits?.cast" />
    </template>
    <template v-else-if="toggle === 'Credits'">
      <PersonCredits :person="person" />
    </template>
    <template v-else-if="toggle === 'Photos'">
      <div grid="~ cols-minmax-10rem lg:cols-minmax-15rem" gap6>
        <PhotoCard
          v-for="i, idx of person.images?.profiles"
          :key="i.file_path"
          :item="i"
          class="aspect-9/16"
          @click="show(person.images!.profiles, idx)"
        />
      </div>
    </template>
  </div>
</template>

<style lang="scss" scoped></style>
