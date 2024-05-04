import {
  CourseMaterial,
  LINEAR_COURSE_MATERIAL,
  SQUARE_COURSE_MATERIAL,
} from "./courses-material";
import { DefaultStudent, DefaultTeacher, User, UserType } from "./users";

export type Course = {
  id: number;
  name: string;
  material: CourseMaterial;
  students: User[];
  teachers: User[];
};

export const DefaultCurses: Course[] = [
  {
    id: 0,
    name: "Решение квадратного уравнения в общем виде",
    material: SQUARE_COURSE_MATERIAL,
    students: [DefaultStudent],
    teachers: [DefaultTeacher],
  },
  {
    id: 1,
    name: "Решение линейного уравнения в общем виде",
    material: LINEAR_COURSE_MATERIAL,
    students: [],
    teachers: [],
  },
];

export const registerUserOnCourse = (user: User, courseId: number): void => {
  const course = getCourseById(courseId);
  if (!course) {
    return;
  }

  if (user.type === UserType.Teacher && !course.teachers.includes(user)) {
    course.teachers.push(user);
  } else if (
    user.type === UserType.Student &&
    !course.students.includes(user)
  ) {
    course.students.push(user);
  }
};

export const getCoursesByUser = (user: User): Course[] => {
  const register: Course[] = [];
  const nonRegister: Course[] = [];

  if (user.type === UserType.Developer) {
    return [...DefaultCurses];
  }

  DefaultCurses.forEach((course) => {
    if (user.type === UserType.Student) {
      course.students.includes(user)
        ? register.push(course)
        : nonRegister.push(course);
    } else if (user.type === UserType.Teacher) {
      course.teachers.includes(user)
        ? register.push(course)
        : nonRegister.push(course);
    }
  });
  return [...register, ...nonRegister];
};

export const getCourseById = (id: number): Course | undefined => {
  return DefaultCurses.find((course) => course.id === id);
};
