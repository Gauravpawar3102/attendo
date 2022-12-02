const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Austehr',
  },
];
const Query = {
  books: {
    books: () => books,
  },
  teacherData: (_, __, { prisma }) => {
    return prisma.teacher.findMany();
  },
  classData: (_, __, { prisma }) => {
    return prisma.class.findMany();
  },
  studentData: (_, __, { prisma }) => {
    return prisma.studentData.findMany();
  },
};

module.exports = { Query };
