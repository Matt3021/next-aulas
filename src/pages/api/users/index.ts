import { NextApiHandler } from 'next'
import { Users } from '@/utils/users'
import prisma from '../../../../libs/prisma'
import endpoints from '../../../../libs/api'

// Getting all users
const handlerGet: NextApiHandler =  async (req, res) => {
  const { page } = req.query

  const users = await endpoints.getAllUsers(parseInt(page as string))

  res.json({ status: true, users })
}

const handlerPost: NextApiHandler = async (req, res) => {
  const { name, email } = req.body

  const newUser = await prisma.user.create({
    data: { name, email }
  }).catch((e) => {
    res.json({ error: 'Usuário já existe' })
  })
  if (newUser) {
    res.status(201).json({ status: true, user: newUser })
  }
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