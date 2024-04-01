import { prisma } from '@/src/lib/prisma'
import { NextResponse } from 'next/server'

export const GET = async () => {
    const data = await prisma.project.findMany({
      include: {
        users: {
          include: {
            user: true,
          },
        },
      },
    })
    return NextResponse.json({ data })
  }
  
  export const POST = async (request: Request) => {
    const data = await request.json()
    const project = await prisma.project.create({ data : 
      {
      name: data.name,
      description: data.description,
      initialDate: new Date(data.initialDate),
      endDate: data.endDate ? new Date(data.endDate) : undefined,
      users: {
        create: [
        {
          role: 'PO',
          user: {
          connect: {id: data.po}
          }
        },
        {
          role: 'SM',
          user: {
          connect: {id: data.sm}
          }
        },
        ...data.devs.map((dev: number) => ({
          role: 'DEV',
          user: {
          connect: {id: dev}
          }
        }))
        ]
      }
      }
    })
    return NextResponse.json({ data: project })
  }
  