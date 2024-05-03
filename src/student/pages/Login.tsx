import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import logger, { LogType } from "../../backend/logger";
import { DefaultStudent } from "../../backend/users";
import { Login } from "../../common/components";

const student = DefaultStudent;

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
