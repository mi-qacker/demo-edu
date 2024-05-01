import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Login } from "../../common/components";

export const StudentLogin = () => {
  const navigate = useNavigate();
  const onSuccess = useCallback(() => {
    navigate("/main");
  }, [navigate]);

  return (
    <>
      <div>Student login</div>
      <Login
        formId="student"
        username="student"
        password="student"
        onSuccess={onSuccess}
      />
    </>
  );
};
