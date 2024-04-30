import { rateLimitRequest } from '../../utils/rateLimit'

const TMDB_API_URL = 'https://api.themoviedb.org/3'

export default defineEventHandler(async (event) => {
  const { success, error } = await rateLimitRequest(event.node.req)

  if (!success)
    return error

  const query = getQuery(event)
  const config = useRuntimeConfig()
  if (!config.tmdb.apiKey)
    throw new Error('TMDB API key is not set')
  try {
    return await $fetch(event.context.params!.path, {
      baseURL: TMDB_API_URL,
      params: {
        api_key: config.tmdb.apiKey,
        language: 'en-US',
        ...query,
      },
      headers: {
        Accept: 'application/json',
      },
    })
  }
  catch (e: any) {
    const status = e?.response?.status || 500
    setResponseStatus(event, status)
    return {
      error: String(e)?.replace(config.tmdb.apiKey, '***'),
    }
  }
})
