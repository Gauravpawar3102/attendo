const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Aussdtehr',
  },
];
const Query = {
  books: {
    books: () => books,
  },
  teacherData: (_, __, { prisma }) => {
    return prisma.teacher.findMany();
    //   {
    //   where:{
    //     id:1
    //   }
    // }
  },
  teacher: (_, { name }, { prisma }) => {
    return prisma.teacher.findUnique({
      where: {
        name,
      },
    });
  },
  classData: (_, __, { prisma }) => {
    return prisma.class.findMany();
  },
  studentData: (_, __, { prisma }) => {
    return prisma.studentData.findMany();
  },
};

module.exports = { Query };
