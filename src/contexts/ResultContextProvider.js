import { createContext, useContext, useState } from "react";

const ResultContext = createContext();
const baseUrl = "https://google-search72.p.rapidapi.com";

export const ResultContextProvider = ({ children }) => {
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const getResults = async (type) => {
    setIsLoading(true);
    const response = await fetch(`${baseUrl}${type}`, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_PUBLIC_KEY,
        "X-RapidAPI-Host": "google-search72.p.rapidapi.com",
      },
    });
    const data = await response.json();
    setResult(data);
    setIsLoading(false);
  };
  return (
    <ResultContext.Provider
      value={{ getResults, result, isLoading, searchTerm, setSearchTerm }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => useContext(ResultContext);
