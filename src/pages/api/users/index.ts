import { NextApiHandler } from 'next'
import { Users } from '@/utils/users'
import prisma from '../../../../libs/prisma'

// Getting all users
const handlerGet: NextApiHandler =  async (req, res) => {
  const { page } = req.query

  // Items per page
  const take = 2

  // Offset off items
  let skip = 0

  if (page) {
    skip = (parseInt(page as string) - 1) * take
  }

  const users = await prisma.user.findMany({
    skip,
    take,
    where: {
      name: {
        startsWith: 'B'
      }
    }, 
    select: {
      id: true,
      name: true,
      email:true
    },
    orderBy: {
      id: 'asc'
    }
  })

  res.json({ status: true, users })
}

const handlerPost: NextApiHandler = async (req, res) => {
  const { name, email } = req.body

  const newUser = await prisma.user.create({
    data: { name, email }
  })

  res.status(201).json({ status: true, user: newUser })
}

const handler: NextApiHandler = (req, res) => {
  switch (req.method) {
    case 'GET':
      handlerGet(req, res)
      break
    case 'POST':
      handlerPost(req, res)
      break
  }
}

export default handler