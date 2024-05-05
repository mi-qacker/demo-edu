import { getCourseById } from "./courses";

export enum LogType {
  Login,
  CourseOpen,
  CourseClose,
  CourseRegister,
}

const getActionByLogType = (
  type: LogType,
  options?: Pick<Log, "courseId">
): string => {
  const basicAction: Record<LogType, string> = {
    [LogType.Login]: "User has logged in",
    [LogType.CourseOpen]: "User opened the course:",
    [LogType.CourseClose]: "User has closed the course:",
    [LogType.CourseRegister]: "User has registered the course:",
  };

  if (
    [LogType.CourseRegister, LogType.CourseOpen, LogType.CourseClose].includes(
      type
    ) &&
    options?.courseId !== undefined
  ) {
    const course = getCourseById(options.courseId);
    return `${basicAction[type]} "${course?.name}"`;
  }

  return basicAction[type];
};

export type Log = {
  userId: number;
  type: LogType;
  action: string;
  date: Date;
  courseId?: number;
};

const logs: Log[] = [];

const logger = {
  getLogsByUser(userId: number): Log[] {
    return logs.filter((log) => log.userId === userId);
  },
  newLog(userId: number, type: LogType, options?: Pick<Log, "courseId">) {
    const newLog: Log = {
      userId,
      type,
      action: getActionByLogType(type, options),
      date: new Date(),
    };

    if (type === LogType.CourseRegister) {
      if (options?.courseId === undefined) {
        throw new Error("For LogType.CourseRegister required courseId option");
      }
      newLog.courseId = options.courseId;
    }

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
