<script lang="ts" setup>
const props = defineProps<{
  icon: string
  to?: { path?: string; name?: string }
  active?: boolean
}>()
</script>

<template>
  <NuxtLink v-slot="{ isActive }" :to="to">
    <div
      p-4 round mb-3 cursor-pointer transition-all duration-200
      class="group sidebar-link" relative
      :class="{ active: active || isActive }"
    >
      <div
        mr-5 flex="~ row" items-center
        group-hover:text-primary-300 text-xl transition-all duration-200
        :class="{ 'text-primary-400': active || isActive }"
      >
        <span
          :class="[icon, { 'text-primary-400': active || isActive }]" text-gray group-hover:text-primary-400
          mr-4 text-3xl inline-flex transition-all duration-300
        />
        <slot />
      </div>
    </div>
  </NuxtLink>
</template>

<style  scoped>
.sidebar-link::before{
    @apply bg-red-400 absolute -left-.8rem top-1.1rem transition-all duration-300;
    content: '';
    border-radius: 0 3rem 3rem 0;
    width: 4px;
}
.sidebar-link.active::before{
    height: 2.2rem;
}
</style>
