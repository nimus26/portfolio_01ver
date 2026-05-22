import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./app/App.tsx";
import { Gallery3D } from "./app/components/Gallery3D.tsx";
import "./styles/index.css";

const router = createBrowserRouter([
  { path: "/",             element: <App /> },
  { path: "/project/:id", element: <Gallery3D /> },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
