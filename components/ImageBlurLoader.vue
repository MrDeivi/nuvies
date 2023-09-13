<script lang="ts" setup>
const props = defineProps<{
  smallImageSrc: string
  bigImageSrc: string
}>()
const emit = defineEmits(['bigLoaded'])
const loaded = ref()
const visible = ref()
const currentSrc = ref(props.smallImageSrc)

function loadedBigImage() {
  currentSrc.value = props.bigImageSrc
  emit('bigLoaded')
  //   nextTick(() => loaded.value = true)

  setTimeout(() => {
    loaded.value = true
  }, 1000)
}

const target = ref()

useIntersectionObserver(target, ([{ isIntersecting }], observerElement) => {
  if (isIntersecting && !visible.value)
    visible.value = true
}, { immediate: true })
</script>

<template>
  <NuxtImg
    ref="target"
    transition-all duration-300
    :src="currentSrc"
    v-bind="$attrs"
    :class="{ 'blur-xl': !loaded }"
  />
  <NuxtImg v-if="!loaded && visible" :src="bigImageSrc" absolute op0 loading="lazy" @load="loadedBigImage" />
</template>

<style lang="scss" scoped></style>
