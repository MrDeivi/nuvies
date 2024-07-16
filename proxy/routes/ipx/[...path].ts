import { createIPX, createIPXMiddleware } from 'ipx'
import { rateLimitRequest } from '../../utils/rateLimit'

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

export default eventHandler(async (event) => {
	const { success, error } = await rateLimitRequest(event.node.req)

	if (!success) {
		console.log('Invalid request ');
		throw new Error('Ip blocked')
	}

	event.node.req.url = `/${event.context.params!.path}`
	return ipxHandler(event)
})
