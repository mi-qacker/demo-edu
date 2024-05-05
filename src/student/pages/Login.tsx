import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { student } from "..";
import logger, { LogType } from "../../backend/logger";
import { Login } from "../../common/components";

const StudentLogin = () => {
  const navigate = useNavigate();
  const onSuccess = useCallback(() => {
    logger.newLog(student.id, LogType.Login);
    navigate("/main");
  }, [navigate]);

  return (
    <>
      <div>Student login</div>
      <Login
        formId="student"
        username={student.username}
        password={student.password}
        onSuccess={onSuccess}
      />
    </>
  );
};

export default StudentLogin;
