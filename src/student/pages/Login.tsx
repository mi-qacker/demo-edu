import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { DefaultStudent } from "../../backend/users";
import { Login } from "../../common/components";

const StudentLogin = () => {
  const navigate = useNavigate();
  const onSuccess = useCallback(() => {
    navigate("/main");
  }, [navigate]);

  return (
    <>
      <div>Student login</div>
      <Login
        formId="student"
        username={DefaultStudent.username}
        password={DefaultStudent.password}
        onSuccess={onSuccess}
      />
    </>
  );
};

export default StudentLogin;
