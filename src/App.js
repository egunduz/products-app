import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ProductBrowser from "./pages/productBrowser/ProductBrowser";
import LoginPage from "./pages/loginPage/LoginPage";

/**
 * This page will be eddited in the future
 */
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<ProductBrowser />} />
        <Route path={"products"} element={<ProductBrowser />} />
        <Route path={"login"} element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
