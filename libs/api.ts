import prisma from "./prisma";

const endpoints = {
  getAllUsers: async (page: number) => {
    // Items per page
    const take = 2

    // Offset off items
    let skip = 0

    if (page) {
      skip = (page - 1) * take
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

    return users
  }
}

export default endpoints