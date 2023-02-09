import React from "react";
import { Link } from "react-router-dom";
import { Search } from "./Search";

export const Navbar = ({ setDarkTheme, darkTheme }) => {
  return (
    <div className="p-5 pb-5 flex flex-wrap justify-center sm:justify-between items-center border-b dark:border-gray-700 border-gray-200">
      <div className="flex justify-between items-center space-x-5 w-screen">
        <Link to="/">
          <p className="text-2xl bg-blue-500 font-bold text-white py-1 px-2 rounded dark:bg-gray-500 dark:text-gray-900">
            Google 🔎
          </p>
        </Link>
        <button
          onClick={() => setDarkTheme((dark) => !dark)}
          type="button"
          className="text-xl font-bold text-white dark:bg-gray-500 dark:border-gray-500 dark:text-gray-900 bg-blue-500 border rounded-full px-2 py-1 hover:shadow-lg"
        >
          {!darkTheme ? "Dark 🌙" : "Light ☀️"}
        </button>
      </div>
      <Search />
    </div>
  );
};
