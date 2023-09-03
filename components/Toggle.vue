<script lang="ts" setup>
const props = defineProps<{
  options: string[]
  modelValue: string
}>()

const emit = defineEmits(['update:modelValue'])

const { options } = toRefs(props)

const width = computed(() => (100 / (options.value?.length || 0)).toFixed(2))

const sliderPosition = computed(() => {
  const pos = options?.value?.findIndex(option => option === props.modelValue)
  return (isDefined(pos) && (pos as any) === -1 ? 0 : (pos as any)) * 100
})

const toggleStyle = computed(() => {
  return {
    width: `${width.value}%`,
    transform: `translateX(${sliderPosition.value}%)`,
  } as any
})
const activeIndex = ref(0)

function selectValue(i: number) {
  activeIndex.value = i

  const newValue = options?.value?.[i]
  emit('update:modelValue', newValue)
}
</script>

<template>
  <div
    relative transition-all ease-out duration-200 outline-none p1 justify="around" grid="~"
    :style="{ 'grid-template-columns': `repeat(${options.length},minmax(0,1fr))` }"
    min-w-10rem bg-gradient-to-r from-primary-400 to-primary-700 rounded-1rem overflow="hidden"
  >
    <label
      v-for="(option, index) in options"
      :key="index"
      z-4 cursor="pointer" flex flex-grow
      py2 px4 text-center justify="center"
      rounded-4xl select-none
      @click="selectValue(index)"
    >
      <span font-bold>{{ option }}</span>
    </label>

    <div
      absolute left-0 bottom-0 top-0 transition="all duration-200"
      :style="toggleStyle" p.4
    >
      <div class="bg-[#1d1d1d]" w-full h-full rounded-1rem />
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
