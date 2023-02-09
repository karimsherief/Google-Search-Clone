import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { useResultContext } from "../contexts/ResultContextProvider";
import { Links } from "./Links";

export const Search = () => {
  const { setSearchTerm } = useResultContext();
  const [text, setText] = useState("");
  const [debouncedValue] = useDebounce(text, 300);
  useEffect(() => {
    if (debouncedValue) {
      setSearchTerm(debouncedValue);
    }
  }, [debouncedValue]);
  return (
    <div className="relative sm:ml-48 md:ml-52 md:-mt-10 mt-3">
      <input
        type="text"
        value={text}
        placeholder="Search"
        className="p-6 border-gray-700 dark:bg-gray-700 dark:text-white rounded-full pl-5 outline-none sm:w-96 w-80 h-10 shadow-sm text-black hover:shadow-lg"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      {text && (
        <button
          className="absolute top-1.5 right-4 text-2xl text-gray-500"
          onClick={() => setText("")}
        >
          X
        </button>
      )}
      <Links />
    </div>
  );
};
