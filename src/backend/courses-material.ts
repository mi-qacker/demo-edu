import { SQUARE_MATERIAL, LINEAR_MATERIAL } from "./raw-materials";

export type CourseMaterial = {
  lecture: {
    text: string;
  };
  test: {
    questions: TestQuestions[];
  };
};

export type TestQuestions = {
  question: string;
  answers: string[];
  correctAnswers: number;
};

export const SQUARE_COURSE_MATERIAL: CourseMaterial = {
  lecture: {
    text: SQUARE_MATERIAL,
  },
  test: {
    questions: [
      {
        question: "Какой вид имеют квадратные уравнения?",
        answers: [
          "ax + b = 0",
          "ax^3 + bx^2 + cx + d = 0",
          "ax^2 + bx + c = 0",
          "x = 0",
        ],
        correctAnswers: 2,
      },
    ],
  },
};

export const LINEAR_COURSE_MATERIAL: CourseMaterial = {
  lecture: {
    text: LINEAR_MATERIAL,
  },
  test: {
    questions: [
      {
        question: "Какой вид имеют квадратные уравнения?",
        answers: [
          "ax + b = 0",
          "ax^3 + bx^2 + cx + d = 0",
          "ax^2 + bx + c = 0",
          "x = 0",
        ],
        correctAnswers: 0,
      },
    ],
  },
};
