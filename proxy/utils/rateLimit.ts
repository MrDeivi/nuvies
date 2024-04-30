import naxIpware from '@fullerstack/nax-ipware'
import { Ratelimit } from '@upstash/ratelimit'

import { Redis } from '@upstash/redis'

const { Ipware } = naxIpware
const ipware = new Ipware()
const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.cachedFixedWindow(20, '60s'),
  ephemeralCache: new Map(),
  analytics: true,
})

export async function rateLimitRequest(req: any) {
  const ip = ipware.getClientIP(req)
  console.log(ip)

  const BLOQUED_IP = process.env.BLOQUED_IP
  console.log(BLOQUED_IP, 'BLOQUED_IP')
  console.log(typeof BLOQUED_IP, 'typeof BLOQUED_IP')

  const blackList: string[] = JSON.parse(BLOQUED_IP ?? '[]')
  console.log(blackList, 'blackList')
  console.log(typeof blackList, 'typeof blackList')

  if (!ip?.ip)
    return { success: false }

  if (isBlocked(ip?.ip, blackList))
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

function isBlocked(ip: string, blackList: string[]) {
  return blackList.includes(ip)
}
