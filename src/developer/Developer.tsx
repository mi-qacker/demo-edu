import { lazy, Suspense } from "react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";

const DeveloperLogin = lazy(() => import("./pages/Login"));
const DeveloperMain = lazy(() => import("./pages/Main"));
const DeveloperCourse = lazy(() => import("./pages/Course"));

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
  return (
    <Suspense>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export { Developer };
