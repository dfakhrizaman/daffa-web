import React from "react";
import { Routes, Route } from "react-router-dom";
import { NAVBAR_LINKS } from "../constants/navbarLinks";
import { ROUTES } from "../constants/routes";
import { NavbarHeader } from "../containers/header";
import HomePage from "../pages/home";

const AppRouting = () => {
  return (
    <Routes>
      <Route element={<NavbarHeader links={NAVBAR_LINKS} />}>
        <Route element={<HomePage />} path={ROUTES.home} />
      </Route>
    </Routes>
  );
};

export default AppRouting;
