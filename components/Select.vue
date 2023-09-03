<script lang="ts" setup>
const props = defineProps<{ value: string; options: { label: string; value: string }[] }>()
const value = useVModel(props, 'value')
</script>

<template>
  <select v-model="value" outline="none" p2 rounded-xl px4>
    <option v-for="(option, index) in options" :key="option.value" :value="option.value">
      {{ option.label }}
    </option>
  </select>
</template>

<style lang="scss" scoped></style>
