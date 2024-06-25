import { createSession, lineItemsType } from '@/api/create-session'

export interface CreateSessionResponse {
  sessionURL: string
}

export async function POST(request: Request) {
  const { lineItems }: { lineItems: lineItemsType[] } = await request.json()

  const session = await createSession({ items: lineItems })

  return Response.json({ sessionURL: session.url })
}
