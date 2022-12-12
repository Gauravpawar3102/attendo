const Class = {
  students: (parent, __, { prisma }) => {
    return prisma.studentData.findMany({
      where: {
        classId: parent.id,
      },
    });
  },
};

module.exports = { Class };
