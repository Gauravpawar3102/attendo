const Teacher = {
  classes: (parent, __, { prisma }) => {
    return prisma.class.findMany({
      where: {
        teacherId: parent.id,
      },
    });
  },
};

module.exports = { Teacher };
