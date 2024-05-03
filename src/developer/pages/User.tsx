import { Typography } from "antd";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getUserById } from "../../backend/users";

const DeveloperUser = () => {
  const { userId } = useParams();
  const [user] = useState(() => getUserById(Number(userId)));

  return (
    <>
      <Typography.Title level={3}>
        [{userId}] {user?.type} {user?.name}
      </Typography.Title>
      <Link to="/main">Go back</Link>
    </>
  );
};

export default DeveloperUser;
