import React from "react";
import { Routes as ReactRoutes, Route } from "react-router";
import { Navigate } from "react-router-dom";
import { Results } from "./Results";
export const Routes = () => {
  return (
    <div>
      <ReactRoutes>
        <Route path="/" element={<Navigate to="/search" />} />
        <Route path="/search" element={<Results />} />
        <Route path="/images" element={<Results />} />
        <Route path="/news" element={<Results />} />
        <Route path="/videos" element={<Results />} />
      </ReactRoutes>
    </div>
  );
};
