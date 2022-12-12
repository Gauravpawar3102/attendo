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
        name: String(name),
      },
    });
  },
  student: (_, { rollnumber }, { prisma }) => {
    return prisma.studentData.findUnique({
      where: {
        rollnumber: Number(rollnumber),
      },
    });
  },
  classes: (_, __, { prisma }) => {
    return prisma.class.findMany();
  },

  students: (_, __, { prisma }) => {
    return prisma.studentData.findMany();
  },
};

module.exports = { Query };
