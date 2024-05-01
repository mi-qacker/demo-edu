import { Button, List, Typography } from "antd";
import { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import {
  Course,
  getCoursesByUser,
  registerUserOnCourse,
} from "../../backend/courses";
import { DefaultTeacher } from "../../backend/users";

const teacher = DefaultTeacher;

const TeacherMain = () => {
  const [courses] = useState(() => getCoursesByUser(teacher));

  const onClickButton = useCallback((course: Course) => {
    if (!course.teachers.includes(teacher)) {
      registerUserOnCourse(teacher, course.id);
    }
  }, []);

  const renderListItem = useCallback(
    (course: Course) => (
      <List.Item>
        <Typography.Text>{course.name}</Typography.Text>{" "}
        <Button type="link" onClick={() => onClickButton(course)}>
          <Link to={`/course/${course.id}`}>
            {course.teachers.includes(teacher) ? "Войти" : "Записаться"}
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
        <Typography.Title level={3}>
          Список преподаваемых курсов
        </Typography.Title>
      }
      dataSource={courses}
      renderItem={renderListItem}
    />
  );
};

export default TeacherMain;
