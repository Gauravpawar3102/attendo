const Student = {
  classes: (parent, __, { prisma }) => {
    return prisma.class.findMany({
      where: {
        id: parent.classId,
      },
    });
  },
};

module.exports = { Student };
