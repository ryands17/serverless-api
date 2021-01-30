// @ts-check

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  const user1 = await prisma.user.create({
    data: {
      name: 'Random User',
      posts: { create: { title: 'Post 1' } },
    },
  })
  console.log(user1)
}

main().finally(async () => {
  await prisma.$disconnect()
})
