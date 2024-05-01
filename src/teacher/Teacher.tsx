import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { TeacherCourse } from "./pages/Course";
import { TeacherLogin } from "./pages/Login";
import { TeacherMain } from "./pages/Main";

const router = createMemoryRouter([
  {
    path: "/",
    element: <TeacherLogin />,
  },
  {
    path: "/main",
    element: <TeacherMain />,
  },
  {
    path: "/course/:courseId",
    element: <TeacherCourse />,
  },
]);

const Teacher = () => {
  return <RouterProvider router={router} />;
};

export { Teacher };
