const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];
const Query = {
  books: {
    books: () => books,
  },
  teacherData: (_, __, { prisma }) => {
    return prisma.teacher.findMany();
  },
};

module.exports = { Query };
