import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Login } from "../../common/components";

export const TeacherLogin = () => {
  const navigate = useNavigate();
  const onSuccess = useCallback(() => {
    navigate("/main");
  }, [navigate]);

  return (
    <>
      <div>Teacher login</div>
      <Login
        formId="teacher"
        username="teacher"
        password="teacher"
        onSuccess={onSuccess}
      />
    </>
  );
};
