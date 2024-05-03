export enum LogType {
  Login,
}

const LogTypeDescribe: Record<LogType, string> = {
  [LogType.Login]: "User has logged in",
};

export type Log = {
  userId: number;
  type: LogType;
  action: string;
  date: Date;
};

const logs: Log[] = [];

const logger = {
  getLogsByUser(userId: number): Log[] {
    return logs.filter((log) => log.userId === userId);
  },
  newLog(userId: number, type: LogType) {
    logs.push({
      userId,
      type,
      action: LogTypeDescribe[type],
      date: new Date(),
    });
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
