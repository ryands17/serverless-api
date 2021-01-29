// @ts-check

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  const user1 = await prisma.user.create({
    data: { name: 'Alice' },
  })
  const user2 = await prisma.user.create({
    data: { name: 'Bob' },
  })
  console.log({ user1, user2 })
}

main().finally(async () => {
  await prisma.$disconnect()
})
