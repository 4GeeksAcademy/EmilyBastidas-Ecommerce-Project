import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from "react-router-dom";

import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Single } from "./pages/Single";
import { Demo } from "./pages/Demo";
import { Favorites } from "./pages/Favorites";
import { ProductDetails } from "./components/ProductDetails";
import { ProductsList } from "./pages/ProductsList";
import { Admin } from "./pages/Admin";
import { Variants } from "./pages/Variants";
import { Orders } from "./pages/Orders";
import { Users } from "./pages/Users";



import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { Private } from "./pages/Private";

const logged = true;

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>}>


      <Route index element={<Home />} />


      <Route path="single/:theId" element={<Single />} />
      <Route path="demo" element={<Demo />} />


      <Route path="favorites" element={<Favorites />} />

      <Route path="product/:id" element={<ProductDetails />} />
      <Route path="products" element={<ProductsList />} />

      <Route path="admin" element={<Admin />}>
        <Route path="variants" element={<Variants />} />
        <Route path="orders" element={<Orders />} />
        <Route path="users" element={<Users />} />   
      </Route>
     


      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />

      {logged
        ? <Route path="private" element={<Private />} />
        : <Route path="private" element={<Navigate to="/login" />} />
      }

    </Route>
  )
);