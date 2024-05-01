import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { DeveloperCourse } from "./pages/Course";
import { DeveloperLogin } from "./pages/Login";
import { DeveloperMain } from "./pages/Main";

const router = createMemoryRouter([
  {
    path: "/",
    element: <DeveloperLogin />,
  },
  {
    path: "/main",
    element: <DeveloperMain />,
  },
  {
    path: "/course/:courseId",
    element: <DeveloperCourse />,
  },
]);

const Developer = () => {
  return <RouterProvider router={router} />;
};

export { Developer };
