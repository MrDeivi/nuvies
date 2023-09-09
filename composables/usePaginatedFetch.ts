import type { PageResult } from '~/types'

export async function usePaginatedFetch<T = any>(fetchFn: (page: number) => Promise<PageResult<T>>, key: string) {
  const page = useState(`${key}_page`, () => 0)
  const result = useState<T[]>(`${key}_data`, () => [])
  const isLastPage = useState(`${key}_isLastPage`, () => false)
  const pending = useState(`${key}_pending`, () => true)

  const setResults = (results: T[]) => {
    if (results.length)
      result.value = [...result.value, ...results]
  }

  const execute = async () => {
    page.value++

    pending.value = true
    const { results, total_pages } = await fetchFn(page.value) as PageResult<T>

    setResults(results)
    isLastPage.value = page.value >= total_pages
    pending.value = false
  }

  if (!result.value.length)
    await execute()

  const fetchMore = async () => {
    if (!pending.value && !isLastPage.value)
      execute()
  }

  const reset = (exec = true) => {
    page.value = 0
    result.value = []
    isLastPage.value = false
  }

  return { data: result, fetchMore, execute, loading: pending, page, isLastPage, reset }
}
