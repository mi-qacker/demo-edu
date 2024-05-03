import { Button, List, Typography } from "antd";
import { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { getCoursesByUser } from "../../backend/courses";
import { DefaultDeveloper, UserType, users } from "../../backend/users";

const developer = DefaultDeveloper;

type ListItem = { name: string; id: number; type: string };

const DeveloperMain = () => {
  const [courses] = useState<ListItem[]>(() =>
    getCoursesByUser(developer).map(({ name, id }) => ({
      name,
      id,
      type: "course",
    }))
  );
  const [teachers] = useState<ListItem[]>(() =>
    users
      .filter(({ type }) => type === UserType.Teacher)
      .map(({ name, id }) => ({ name, id, type: "user" }))
  );
  const [students] = useState<ListItem[]>(() =>
    users
      .filter(({ type }) => type === UserType.Student)
      .map(({ name, id }) => ({ name, id, type: "user" }))
  );

  const renderListItem = useCallback(
    ({ name, id, type }: ListItem) => (
      <List.Item>
        <Typography.Text>{name}</Typography.Text>
        <Button type="link">
          <Link to={`/${type}/${id}`}>Открыть</Link>
        </Button>
      </List.Item>
    ),
    []
  );

  return (
    <>
      <List
        size="small"
        header={
          <Typography.Title level={3}>
            Администрирование курсов
          </Typography.Title>
        }
        dataSource={courses}
        renderItem={renderListItem}
      />
      <List
        size="small"
        header={
          <Typography.Title level={3}>
            Администрирование преподавателей
          </Typography.Title>
        }
        dataSource={teachers}
        renderItem={renderListItem}
      />
      <List
        size="small"
        header={
          <Typography.Title level={3}>
            Администрирование студентов
          </Typography.Title>
        }
        dataSource={students}
        renderItem={renderListItem}
      />
    </>
  );
};

export default DeveloperMain;
