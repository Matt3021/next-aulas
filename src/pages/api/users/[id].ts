import { NextApiHandler } from 'next'
import { Users } from '@/utils/users'
import prisma from '../../../../libs/prisma'

const handlerGet: NextApiHandler = async (req, res) => {
  const { id } = req.query

  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(id as string)
    }
  })

  if (user) {
    res.json({ status: true, user })
    return
  }
  
  res.json({ error: 'Usuário não encontrado' })
}

const handlerPut: NextApiHandler = async (req, res) => {
  const { name, active } = req.body
  const { id } = req.query

  let data: {
    name? : string,
    active? : boolean
  } = {}

  if (name) {
    data.name = name
  }

  if (active) {
    switch (active) {
      case 'true':
      case '1':
        data.active = true
        break
      case 'false':
      case '0':
        data.active = false
        break
      
    }
  }

  const updateUser = await prisma.user.update({
    where: {
      id: parseInt(id as string)
    },
    data
  })

  if (updateUser) {
    res.json({ status: true, updateUser })
    return
  }

  res.json({ error: 'Não foi possível alterar este usuário' })
}

const handler: NextApiHandler = async (req, res) => {
  switch (req.method) {
    case 'GET':
      handlerGet(req, res)
      break
    case 'PUT':
      handlerPut(req, res)
      break
  }
}

export default handler