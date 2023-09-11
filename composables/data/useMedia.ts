import type { MaybeRef } from '@vueuse/core'
import type { MediaType } from '~/types'

export function useMedia(id: MaybeRef<string>, type: MaybeRef<MediaType>) {
  const result = ref()
  const isLoading = ref()

  const trailer = computed(() => result.value ? getTrailer(result.value) : undefined)

  const execute = () => {
    isLoading.value = true
    getMedia(unref(type), unref(id)).then((data) => {
      result.value = data
      isLoading.value = false
    })
  }

  return { execute, isLoading, item: result, trailer }
}
