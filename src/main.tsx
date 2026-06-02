import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./app/App.tsx";
import { Gallery3D } from "./app/components/Gallery3D.tsx";
import "./styles/index.css";

const routerBase = import.meta.env.BASE_URL === "/" ? "/" : import.meta.env.BASE_URL.replace(/\/$/, "");

const router = createBrowserRouter(
  [
    { path: "/", element: <App /> },
    { path: "/project/:id", element: <Gallery3D /> },
  ],
  { basename: routerBase }
);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
