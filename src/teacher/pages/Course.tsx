import { Collapse, CollapseProps, List, Typography } from "antd";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getCourseById } from "../../backend/courses";
import logger, { Log } from "../../backend/logger";
import s from "./Course.module.css";

const TeacherCourse = () => {
  const { courseId } = useParams();
  const [course] = useState(() => getCourseById(Number(courseId)));
  const studentOnCourse = useMemo<CollapseProps["items"]>(
    () =>
      course?.students.map((student, index) => ({
        key: index,
        label: student.name,
        children: <UserLog userId={student.id} courseId={Number(course.id)} />,
      })) ?? [],
    [course]
  );

  return (
    <>
      <Typography.Title level={3}>{course?.name}</Typography.Title>
      <Link to="/main">Go back</Link>
      {course && (
        <>
          <div>
            <Typography.Title level={4}>Материалы лекции:</Typography.Title>
            <div>{course.material.lecture.text}</div>
          </div>
          <div>
            <Typography.Title level={4}>Студенты на курсе</Typography.Title>
            <Collapse items={studentOnCourse} />
          </div>
        </>
      )}
    </>
  );
};

export default TeacherCourse;

const UserLog = (props: { userId: number; courseId: number }) => {
  const [logs, setLogs] = useState<Log[]>(() =>
    logger.getLogsByUser(props.userId, props.courseId)
  );

  useEffect(() => {
    const unwatchLogs = logger.watchNewLogs(() => {
      setLogs(() => logger.getLogsByUser(props.userId, props.courseId));
    });
    return () => {
      unwatchLogs();
    };
  }, [props]);

  const renderLogItem = useCallback((item: Log) => {
    return (
      <div className={s["log-item"]}>
        <span className={s["log-date"]}>
          {item.date.toLocaleDateString()} {item.date.toLocaleTimeString()}
        </span>
        <span>{item.action}</span>
      </div>
    );
  }, []);

  return (
    <List
      size="small"
      bordered
      dataSource={logs}
      renderItem={renderLogItem}
      header={<Typography.Text>User logs</Typography.Text>}
    />
  );
};
