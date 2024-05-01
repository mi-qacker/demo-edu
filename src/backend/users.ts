export enum UserType {
  Student,
  Teacher,
  Developer,
}

export type User = {
  username: string;
  password: string;
  type: UserType;
};

export const DefaultTeacher: User = {
  username: "teacher",
  password: "teacher",
  type: UserType.Teacher,
};

export const DefaultStudent: User = {
  username: "student",
  password: "student",
  type: UserType.Student,
};
export const DefaultDeveloper: User = {
  username: "developer",
  password: "developer",
  type: UserType.Developer,
};
