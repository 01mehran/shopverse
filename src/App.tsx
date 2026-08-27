// React Router Dom;
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Layout;
import MainLayout from "./layout/MainLayout";

// Pages;
import { Home, ProductDetails, Cart } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,

    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/product-details/:id",
        element: <ProductDetails />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
