import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import AllProductsPage from "../pages/AllProductsPage";
import Homepage from "../pages/Homepage";
import SingleProductPage from "../pages/SingleProductPage";
import ContactPage from "../pages/ContactPage";
import CheckoutPage from "../pages/CheckoutPage";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import InvoicePage from "../pages/InvoicePage";
import RulesPage from "../pages/RulesPage";
import UserProfilePage from "../pages/UserProfilePage";
import NotFoundPage from "../pages/NotFoundPage";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/about" element={<AboutPage />}></Route>
      <Route path="/products" element={<AllProductsPage />}></Route>
      <Route path="/products/:id" element={<SingleProductPage />}></Route>
      <Route path="/contact" element={<ContactPage />}></Route>
      <Route path="/checkout" element={<CheckoutPage />}></Route>
      <Route path="/sign-in" element={<SignInPage />}></Route>
      <Route path="/sign-up" element={<SignUpPage />}></Route>
      <Route path="/invoice/:id" element={<InvoicePage />}></Route>
      <Route path="/rules" element={<RulesPage />}></Route>
      <Route path="/user" element={<UserProfilePage />}></Route>
      <Route path="*" element={<NotFoundPage />}></Route>
    </Routes>
  );
};

export default Routers;
