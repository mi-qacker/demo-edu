import { Typography, Collapse, CollapseProps } from "antd";
import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getCourseById } from "../../backend/courses";

const TeacherCourse = () => {
  const { courseId } = useParams();
  const [course] = useState(() => getCourseById(Number(courseId)));
  const studentOnCourse = useMemo<CollapseProps["items"]>(
    () =>
      course?.students.map((student, index) => ({
        key: index,
        label: student.name,
        children: <span>Место для протокола студента</span>,
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
