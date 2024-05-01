import { DeveloperLogin } from "./pages/Login";
import { DeveloperMain } from "./pages/Main";
import { createMemoryRouter, RouterProvider } from "react-router-dom";

const router = createMemoryRouter([
  {
    path: "/",
    element: <DeveloperLogin />,
  },
  {
    path: "/main",
    element: <DeveloperMain />,
  },
]);

const Developer = () => {
  return <RouterProvider router={router} />;
};

export { Developer };
