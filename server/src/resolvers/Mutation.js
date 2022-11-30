const { PrismaClient, Prisma } = require('@prisma/client');

const prisma = new PrismaClient();
const Mutation = {
  teacherCreate: async (_, { name, email, className }, __) => {
    // const { name, email, className } = teacher;
    if (!name || !email || !className) {
      return {
        userErrors: [
          {
            message: 'You must provide all the required credentials',
          },
        ],
        teacher: null,
      };
    }

    return {
      userErrors: [],
      teacher: await prisma.teacher.create({
        data: {
          name,
          email,
          className,
        },
      }),
    };
  },
};
module.exports = { Mutation };
