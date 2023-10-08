import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Cart from './components/Cart/Cart.jsx';
import Order from './components/Ordersummury/Order.jsx';
import Orderreview from './components/OrderReview/Orderreview.jsx';
import Inventory from './components/Manageinventory/Inventory.jsx';
import Login from './components/LogIn/Login.jsx';
import Cartloder from './components/Loderdata/Cartloder.js';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Cart></Cart>
      },
      {
        path: "Order Review",
        element: <Orderreview></Orderreview>,
        loader: Cartloder
      },
      {
        path: "Manage Inventory",
        element: <Inventory></Inventory>
      },
      {
        path: "Login",
        element: <Login></Login>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
