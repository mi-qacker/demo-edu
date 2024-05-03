import { List, Typography } from "antd";
import { useCallback, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import logger, { Log } from "../../backend/logger";
import { getUserById } from "../../backend/users";
import s from "./User.module.css";

const DeveloperUser = () => {
  const { userId } = useParams();
  const [user] = useState(() => getUserById(Number(userId)));

  const logs: Log[] = useMemo(() => {
    if (!user) {
      return [];
    }
    return logger.getLogsByUser(user.id);
  }, [user]);

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
    <>
      <Typography.Title level={3}>
        [{userId}] {user?.type} {user?.name}
      </Typography.Title>
      <Link to="/main">Go back</Link>
      <List
        size="small"
        bordered
        dataSource={logs}
        renderItem={renderLogItem}
        header={<Typography.Text>User logs</Typography.Text>}
      />
    </>
  );
};

export default DeveloperUser;
