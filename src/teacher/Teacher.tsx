import { lazy, Suspense } from "react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";

const TeacherLogin = lazy(() => import("./pages/Login"));
const TeacherMain = lazy(() => import("./pages/Main"));
const TeacherCourse = lazy(() => import("./pages/Course"));

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
  return (
    <Suspense>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export { Teacher };
