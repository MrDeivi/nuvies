const TMDB_API_URL = 'https://api.themoviedb.org/3'

import naxipware from '@fullerstack/nax-ipware'
import { Ratelimit } from '@upstash/ratelimit'
import { kv } from '@vercel/kv'

const { Ipware } = naxipware
const ipware = new Ipware();
const ratelimit = new Ratelimit({
	redis: kv,
	// 5 requests from the same IP in 10 seconds
	limiter: Ratelimit.slidingWindow(10, '86.400 s'),
})

export default defineEventHandler(async (event) => {

	const ip = ipware.getClientIP(event.node.req)

	//   const ip = event.node.req.socket.remoteAddress ?? event.node.req.headers['x-forwarded-for'] ?? '127.0.0.1'

	if (!ip?.ip) return

	const { success, pending, limit, reset, remaining } = await ratelimit.limit(
		ip.ip
	)

	if (!success) return new Response('You have reached your request limit.', {
		status: 429,
		headers: {
			'X-RateLimit-Limit': limit.toString(),
			'X-RateLimit-Remaining': remaining.toString(),
			'X-RateLimit-Reset': reset.toString()
		}
	})


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
