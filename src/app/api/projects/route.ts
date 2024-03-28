import { prisma } from '@/src/lib/prisma'
import { NextResponse } from 'next/server'

export const GET = async () => {
    const data = await prisma.project.findMany({})
    return NextResponse.json({ data })
  }
  
  export const POST = async (request: Request) => {
    const data = await request.json()
    const project = await prisma.project.create({ data  })
    return NextResponse.json({ data: project })
  }
  