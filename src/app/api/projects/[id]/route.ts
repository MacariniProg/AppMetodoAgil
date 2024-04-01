import { prisma } from '@/src/lib/prisma'
import {  NextRequest, NextResponse } from 'next/server'

export const GET = async (req : NextRequest, { params }: { params: { id: string }}) => {
  const id = params.id;
  const project = await prisma.project.findUnique({
    where: {
      id: Number(id),
    },
    include: {
      users: {
        include: {
          user: true,
        },
      },
    },
  })
  return NextResponse.json({ project })
}

