const { PrismaClient, Prisma } = require('@prisma/client');
const e = require('express');

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
  classCreate: async (_, { name, teacherId }, __) => {
    // const { name, email, className } = teacher;
    if (!name || !teacherId) {
      return {
        userErrors: [
          {
            message: 'You must provide all the required credentials',
          },
        ],
        class: null,
      };
    }

    return {
      userErrors: [],
      class: await prisma.class.create({
        data: {
          name,
          teacherId,
        },
      }),
    };
  },

  studentCreate: async (
    _,
    { name, classId, rollnumber, email, status },
    __
  ) => {
    // const { name, email, className } = teacher;
    if (!name || !classId || !rollnumber || !email || !status) {
      return {
        userErrors: [
          {
            message: 'You must provide all the required credentials',
          },
        ],
        studentData: null,
      };
    }

    return {
      userErrors: [],
      studentData: await prisma.studentData.create({
        data: {
          name,
          classId,
          rollnumber,
          email,
          status,
        },
      }),
    };
  },
};
module.exports = { Mutation };
