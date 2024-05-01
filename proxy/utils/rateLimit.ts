import naxIpware from '@fullerstack/nax-ipware'

const { Ipware } = naxIpware
const ipware = new Ipware()

const { REQUEST_LIMIT = 50 } = useRuntimeConfig()
export async function rateLimitRequest(req: any) {
  const ip = ipware.getClientIP(req)

  if (!ip?.ip)
    return { success: false }

  const { success, count } = await limit(ip?.ip)

  console.log(`isBlocked: ${!success} ip: ${ip?.ip} count: ${count}`)

  const error = success
    ? null
    : new Response('You have reached your request limit.', {
      status: 429,
    })

  return { success, error }
}

const blackList: string[] = []
const requestMap = new Map<string, number>()

function limit(ip: string | undefined): { success: boolean; count?: number } {
  if (!ip)
    return { success: false }

  const requests = requestMap.get(ip) || 0
  if (requests > REQUEST_LIMIT)
    blackList.push(ip)
  else requestMap.set(ip, requests + 1)

  return { success: !blackList.includes(ip), count: requests }
}
