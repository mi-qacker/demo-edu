import { Typography } from "antd";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getCourseById } from "../../backend/courses";

export const TeacherCourse = () => {
  const { courseId } = useParams();
  const [course] = useState(() => getCourseById(Number(courseId)));

  return (
    <>
      <Typography.Title level={3}>{course?.name}</Typography.Title>
      <Link to="/main">Go back</Link>
    </>
  );
};
