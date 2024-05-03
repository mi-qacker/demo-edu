export enum UserType {
  Student = "Student",
  Teacher = "Teacher",
  Developer = "Developer",
}

export type User = {
  id: number;
  name: string;
  username: string;
  password: string;
  type: UserType;
};

export const DefaultTeacher: User = {
  id: 1,
  name: "Кузнецов Дмитрий Дмитриевич",
  username: "teacher",
  password: "teacher",
  type: UserType.Teacher,
};

export const DefaultStudent: User = {
  id: 2,
  name: "Иванов Иван Иванович",
  username: "student",
  password: "student",
  type: UserType.Student,
};

export const DefaultDeveloper: User = {
  id: 0,
  name: "Сидоров Александр Александрович",
  username: "developer",
  password: "developer",
  type: UserType.Developer,
};

export const users: User[] = [DefaultDeveloper, DefaultTeacher, DefaultStudent];

export const getUserById = (id: number): User | undefined => {
  return users.find((user) => user.id === id);
};
