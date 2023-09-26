import { NextApiHandler } from 'next'
import { Users } from '@/utils/users'
import prisma from '../../../../libs/prisma'

// Getting all users
const handlerGet: NextApiHandler = (req, res) => {
  const { search, age } = req.query
  res.status(200).json(Users)
}

const handlerPost: NextApiHandler = (req, res) => {
  const { name, age } = req.body

  res.status(201).json({ status: true, user: { name, age } })
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