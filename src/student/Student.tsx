import { StudentLogin } from "./pages/Login";
import { StudentMain } from "./pages/Main";
import { createMemoryRouter, RouterProvider } from "react-router-dom";

const router = createMemoryRouter([
  {
    path: "/",
    element: <StudentLogin />,
  },
  {
    path: "/main",
    element: <StudentMain />,
  },
]);

const Student = () => {
  return <RouterProvider router={router} />;
};

export { Student };
