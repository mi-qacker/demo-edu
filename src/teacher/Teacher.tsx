import { TeacherLogin } from "./pages/Login";
import { TeacherMain } from "./pages/Main";
import { createMemoryRouter, RouterProvider } from "react-router-dom";

const router = createMemoryRouter([
  {
    path: "/",
    element: <TeacherLogin />,
  },
  {
    path: "/main",
    element: <TeacherMain />,
  },
]);

const Teacher = () => {
  return <RouterProvider router={router} />;
};

export { Teacher };
