import { acceptHMRUpdate, defineStore } from 'pinia'

export const useSiteStore = defineStore('site', () => {
  const blurMediaUrl = ref('')

  return { blurMediaUrl }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useSiteStore, import.meta.hot))
