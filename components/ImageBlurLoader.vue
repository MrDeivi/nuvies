<script lang="ts" setup>
const props = defineProps<{
  smallImageSrc: string
  bigImageSrc: string
}>()
const emit = defineEmits(['bigLoaded'])
const loaded = ref()
const currentSrc = ref(props.smallImageSrc)

function loadedBigImage() {
  currentSrc.value = props.bigImageSrc
  emit('bigLoaded')
  nextTick(() => loaded.value = true)
}
</script>

<template>
  <NuxtImg
    transition-all duration-500
    :src="currentSrc"
    v-bind="$attrs"
    :class="{ 'blur-xl': !loaded }"
  />
  <NuxtImg v-if="!loaded" :src="bigImageSrc" absolute op0 loading="lazy" @load="loadedBigImage" />
</template>

<style lang="scss" scoped></style>
