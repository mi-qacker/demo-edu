import { Button, List, Typography } from "antd";
import { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { student } from "..";
import {
  Course,
  getCoursesByUser,
  registerUserOnCourse,
} from "../../backend/courses";
import logger, { LogType } from "../../backend/logger";

const StudentMain = () => {
  const [courses] = useState(() => getCoursesByUser(student));

  const onClickButton = useCallback((course: Course) => {
    const courseId = course.id;
    if (!course.students.includes(student)) {
      registerUserOnCourse(student, courseId);
      logger.newLog(student.id, LogType.CourseRegister, { courseId });
    }
    logger.newLog(student.id, LogType.CourseOpen, { courseId });
  }, []);

  const renderListItem = useCallback(
    (course: Course) => (
      <List.Item>
        <Typography.Text>{course.name}</Typography.Text>{" "}
        <Link to={`/course/${course.id}`}>
          <Button type="link" onClick={() => onClickButton(course)}>
            {course.students.includes(student) ? "Войти" : "Записаться"}
          </Button>
        </Link>
      </List.Item>
    ),
    [onClickButton]
  );

  return (
    <List
      size="small"
      header={
        <Typography.Title level={3}>Список изучаемых курсов</Typography.Title>
      }
      dataSource={courses}
      renderItem={renderListItem}
    />
  );
};

export default StudentMain;
