import AppLayout from "@/AppLayout/AppLayout";
import Home from "@/features/Landing/components/Landing";
import CartPage from "@/pages/Cart";
import NotFound from "@/pages/NotFound";
import ProductPage from "@/pages/Products";
import WishListPage from "@/pages/WishList";

import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />, // This will include Sidebar + layout
    children: [
      { index: true, element: <ProductPage />},
      {
        path: "products",
        element: <ProductPage />,
      },
      { path: "cart", element: <CartPage /> },
      { path: "wish", element: <WishListPage /> },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path:'landing',
    element: <Home />
  }

]);
