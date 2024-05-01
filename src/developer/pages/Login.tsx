import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { DefaultDeveloper } from "../../backend/users";
import { Login } from "../../common/components";

export const DeveloperLogin = () => {
  const navigate = useNavigate();
  const onSuccess = useCallback(() => {
    navigate("/main");
  }, [navigate]);

  return (
    <>
      <div>Developer login</div>
      <Login
        formId="developer"
        username={DefaultDeveloper.username}
        password={DefaultDeveloper.password}
        onSuccess={onSuccess}
      />
    </>
  );
};
