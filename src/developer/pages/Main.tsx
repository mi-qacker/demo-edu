import { Button, List, Typography } from "antd";
import { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { Course, getCoursesByUser } from "../../backend/courses";
import { DefaultDeveloper } from "../../backend/users";

const developer = DefaultDeveloper;

const DeveloperMain = () => {
  const [courses] = useState(() => getCoursesByUser(developer));

  const renderListItem = useCallback(
    (course: Course) => (
      <List.Item>
        <Typography.Text>{course.name}</Typography.Text>{" "}
        <Button type="link">
          <Link to={`/course/${course.id}`}>Войти</Link>
        </Button>
      </List.Item>
    ),
    []
  );

  return (
    <List
      size="small"
      header={
        <Typography.Title level={3}>Администрирование курсов</Typography.Title>
      }
      dataSource={courses}
      renderItem={renderListItem}
    />
  );
};

export default DeveloperMain;
