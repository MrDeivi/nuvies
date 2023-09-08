<script setup lang="ts">
const props = defineProps<{
  error: any
  message?: string
  title?: string
}>()

const message = computed(() => props.message || String(props.error?.message || 'Looks like you\'ve followed a broken link or entered a URL that doesn\'t exist on this site.'))
const is404 = computed(() => props.error?.statusCode === 404 || message.value?.includes('404'))
const isDev = process.dev

function handleError() {
  return clearError({ redirect: '/' })
}
</script>

<template>
  <NuxtLayout>
    <div flex="~ col" h-screen text-center items-center justify-center gap4>
      <slot v-if="$slots.icon" name="icon" />
      <span v-else i-solar:sad-square-line-duotone text-8xl op40 />
      <div text-3xl>
        {{ title ? title : is404 ? 'This page could not be found' : 'An error occurred' }}
      </div>
      <div text-xl op50>
        {{ message }}
      </div>
      <pre v-if="isDev">{{ error }}</pre>
      <button hoverable px4 round py2 @click="handleError">
        Go Back
      </button>
    </div>
  </NuxtLayout>
</template>
