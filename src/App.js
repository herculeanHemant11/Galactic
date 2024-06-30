import React from "react";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "../src/pages/Home";
import About from "../src/pages/About";
import Contact from "../src/pages/Contact";
import Privacy from "./components/Privacy";
import ThemeMode from "./components/ThemeMode";

const Layout = () => (
  <div className="body-wrapper">
    <Header />
    <main>
      <Outlet />
    </main>
    <Footer />
    <ThemeMode />
  </div>
);

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/privacy",
        element: <Privacy />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={appRoute} />;
};

export default App;
