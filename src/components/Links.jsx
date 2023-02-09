import React from "react";
import { NavLink } from "react-router-dom";

export const Links = () => {
  return (
    <div className="flex  justify-evenly items-center mt-4">
      <NavLink
        to="/search"
        className={(nav) =>
          nav.isActive
            ? "text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2 "
            : "pb-2"
        }
      >
        🔍 All
      </NavLink>
      <NavLink
        to="/images"
        className={(nav) =>
          nav.isActive
            ? "text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2"
            : "pb-2"
        }
      >
        📸 Images
      </NavLink>
    </div>
  );
};
