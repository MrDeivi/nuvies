import { createIPX, createIPXMiddleware } from 'ipx'

const ipx = createIPX({
	maxAge: 3600,
	alias: {
		'/tmdb': 'https://image.tmdb.org/t/p/original/',
		'/youtube': 'https://img.youtube.com/',
	},
	domains: [
		'image.tmdb.org',
		'img.youtube.com',
	],
})

const ipxMiddleware = createIPXMiddleware(ipx)
const ipxHandler = fromNodeMiddleware(ipxMiddleware)


import { Ipware } from '@fullerstack/nax-ipware'
import { Ratelimit } from '@upstash/ratelimit'
import { kv } from '@vercel/kv'

const ipware = new Ipware();
const ratelimit = new Ratelimit({
	redis: kv,
	// 5 requests from the same IP in 10 seconds
	limiter: Ratelimit.slidingWindow(15, '30 s'),
})

export default eventHandler(async (event) => {
	const ip = ipware.getClientIP(event.node.req)

	//   const ip = event.node.req.socket.remoteAddress ?? event.node.req.headers['x-forwarded-for'] ?? '127.0.0.1'

	if (!ip?.ip) return

	const { success, pending, limit, reset, remaining } = await ratelimit.limit(
		ip.ip
	)
	
	if(!success) return

	event.node.req.url = `/${event.context.params!.path}`
	return ipxHandler(event)
})
