import { Ipware } from '@fullerstack/nax-ipware'
import { Ratelimit } from '@upstash/ratelimit'
import { kv } from '@vercel/kv'

const ipware = new Ipware()
const ratelimit = new Ratelimit({
  redis: kv,
  // 150 requests from the same IP in 1 day
  limiter: Ratelimit.slidingWindow(150, '86400 s'),
})

export async function rateLimitRequest(req: any) {
  const ip = ipware.getClientIP(req)
  if (!ip?.ip)
    return { success: false }

  const { success, pending, limit, reset, remaining } = await ratelimit.limit(
    ip.ip,
  )

  const error = success
    ? null
    : new Response('You have reached your request limit.', {
      status: 429,
      headers: {
        'X-RateLimit-Limit': limit.toString(),
        'X-RateLimit-Remaining': remaining.toString(),
        'X-RateLimit-Reset': reset.toString(),
      },
    })

  return { success, limit, pending, reset, remaining, error }
}
