import { prisma } from '@/src/lib/prisma'
import { NextResponse } from 'next/server'

export const GET = async () => {
    const data = await prisma.user.findMany({
      include: {
        projects: true
      }
    })
    return NextResponse.json({ data })
  }
  
  export const POST = async (request: Request) => {
    const data = await request.json()
    const user = await prisma.user.create({ data  })
    return NextResponse.json({ data: user })
  }
  