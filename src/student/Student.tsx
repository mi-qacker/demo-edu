import { lazy, Suspense } from "react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";

const StudentLogin = lazy(() => import("./pages/Login"));
const StudentMain = lazy(() => import("./pages/Main"));
const StudentCourse = lazy(() => import("./pages/Course"));

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
  return (
    <Suspense>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export { Student };
