import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { StudentCourse } from "./pages/Course";
import { StudentLogin } from "./pages/Login";
import { StudentMain } from "./pages/Main";

const router = createMemoryRouter([
  {
    path: "/",
    element: <StudentLogin />,
  },
  {
    path: "/main",
    element: <StudentMain />,
  },
  {
    path: "/course/:courseId",
    element: <StudentCourse />,
  },
]);

const Student = () => {
  return <RouterProvider router={router} />;
};

export { Student };
