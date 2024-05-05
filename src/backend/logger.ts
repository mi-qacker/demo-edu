import { getCourseById } from "./courses";

export enum LogType {
  Login,
  CourseOpen,
  CourseClose,
  CourseRegister,
  TestStart,
  TestFinish,
}

const getActionByLogType = (
  type: LogType,
  options?: Log["options"]
): string => {
  const basicAction: Record<LogType, string> = {
    [LogType.Login]: "User has logged in",
    [LogType.CourseOpen]: "User opened the course:",
    [LogType.CourseClose]: "User has closed the course:",
    [LogType.CourseRegister]: "User has registered the course:",
    [LogType.TestStart]: "User has started test on the course:",
    [LogType.TestFinish]: "User has finished test on the course:",
  };

  const actionsWithCourse: boolean = [
    LogType.CourseRegister,
    LogType.CourseOpen,
    LogType.CourseClose,
    LogType.TestStart,
  ].includes(type);

  if (actionsWithCourse) {
    if (options?.courseId === undefined) {
      throw new Error("For this log type required courseId option");
    }
    const course = getCourseById(options.courseId);
    return `${basicAction[type]} "${course?.name}"`;
  }

  if (type === LogType.TestFinish) {
    if (options?.courseId === undefined || options?.testScore === undefined) {
      throw new Error("For this log type required courseId, testScore option");
    }
    const { courseId, testScore } = options;
    const course = getCourseById(courseId)!;
    const questionCount = course.material.test.questions.length;
    return `${basicAction[type]} "${course?.name}". Результат: ${testScore}/${questionCount}`;
  }

  return basicAction[type];
};

export type Log = {
  userId: number;
  type: LogType;
  action: string;
  date: Date;
  options?: {
    courseId?: number;
    testScore?: number;
  };
};

const logs: Log[] = [];

const logger = {
  getLogsByUser(userId: number): Log[] {
    return logs.filter((log) => log.userId === userId);
  },
  newLog(userId: number, type: LogType, options?: Log["options"]) {
    const newLog: Log = {
      userId,
      type,
      action: getActionByLogType(type, options),
      date: new Date(),
    };

    logs.push(newLog);
    callAllListeners();
  },
  watchNewLogs(listener: () => void): () => void {
    if (listenerSet.has(listener)) {
      throw new Error("listener has already been added");
    }
    listenerSet.add(listener);
    return () => {
      listenerSet.delete(listener);
    };
  },
};

const listenerSet = new Set<() => void>();

const callAllListeners = () => {
  Array.from(listenerSet).forEach((listener) => listener());
};

export default logger;
