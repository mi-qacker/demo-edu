import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { DefaultTeacher } from "../../backend/users";
import { Login } from "../../common/components";

const TeacherLogin = () => {
  const navigate = useNavigate();
  const onSuccess = useCallback(() => {
    navigate("/main");
  }, [navigate]);

  return (
    <>
      <div>Teacher login</div>
      <Login
        formId="teacher"
        username={DefaultTeacher.username}
        password={DefaultTeacher.password}
        onSuccess={onSuccess}
      />
    </>
  );
};

export default TeacherLogin;
