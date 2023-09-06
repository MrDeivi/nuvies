<script lang="ts" setup>
const props = defineProps<{
  icon: string
  to?: { path?: string; name?: string }
  active?: boolean
}>()
</script>

<template>
  <NuxtLink v-slot="{ isActive }" :to="to" class="no-touch">
    <div
      hfull px-4 transition-all duration-200 flex justify-center items-center lt-sm:py2
      class="group"
    >
      <div
        group-hover:text-primary-400 flex flex-col justify-center items-center
        :class="{ 'text-primary-500': active || isActive }"
      >
        <span
          :class="icon"
          lt-sm="text-xl"
          text-2xl inline-flex
        />
        <span text-sm font="bold" mt1 lt-sm="text-xs" class="whitespace-nowrap">
          <slot />
        </span>
      </div>
    </div>
  </NuxtLink>
</template>

<style  scoped></style>
