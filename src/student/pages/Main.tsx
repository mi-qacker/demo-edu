import { Button, List, Typography } from "antd";
import { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import {
  Course,
  getCoursesByUser,
  registerUserOnCourse,
} from "../../backend/courses";
import { DefaultStudent } from "../../backend/users";

const student = DefaultStudent;

export const StudentMain = () => {
  const [courses] = useState(() => getCoursesByUser(student));

  const onClickButton = useCallback((course: Course) => {
    if (!course.students.includes(student)) {
      registerUserOnCourse(student, course.id);
    }
  }, []);

  const renderListItem = useCallback(
    (course: Course) => (
      <List.Item>
        <Typography.Text>{course.name}</Typography.Text>{" "}
        <Button type="link" onClick={() => onClickButton(course)}>
          <Link to={`/course/${course.id}`}>
            {course.students.includes(student) ? "Войти" : "Записаться"}
          </Link>
        </Button>
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
