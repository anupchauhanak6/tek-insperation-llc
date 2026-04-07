import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home"; // Load Home immediately


// Branded dark loader aligned with the website visual language
const PageLoader = () => (
  <div>

  </div>
);

function AppRoutes() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;
