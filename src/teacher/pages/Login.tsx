import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import logger, { LogType } from "../../backend/logger";
import { DefaultTeacher } from "../../backend/users";
import { Login } from "../../common/components";

const teacher = DefaultTeacher;

const TeacherLogin = () => {
  const navigate = useNavigate();
  const onSuccess = useCallback(() => {
    logger.newLog(teacher.id, LogType.Login);
    navigate("/main");
  }, [navigate]);

  return (
    <>
      <div>Teacher login</div>
      <Login
        formId="teacher"
        username={teacher.username}
        password={teacher.password}
        onSuccess={onSuccess}
      />
    </>
  );
};

export default TeacherLogin;
