import React, { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [games, setGames] = useState([]);
  
  const [active, setActive] = useState(false);
  const [library, setLibrary] = useState([]);

  const handleAddToLibrary = (game) => {
    if (!library.some((item) => item._id === game._id)) {
      setLibrary([...library, game]);
    }
  };

  const handleRemoveFromLibrary = (game) => {
    const updatedLibrary = library.filter((item) => item._id !== game._id);
    setLibrary(updatedLibrary);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:5173/api/gamesData.json"
        );
        const data = await response.json();
        setGames(data);
      } catch (error) {
        console.error("Ma'lumotlarni olishda xato yuz berdi: ", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const savedLibrary = JSON.parse(localStorage.getItem("library"));
    if (savedLibrary) {
      setLibrary(savedLibrary);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("library", JSON.stringify(library));
  }, [library]);

  return (
    <AppContext.Provider
      value={{
        games,
        setGames,
        active,
        setActive,
        library,
        handleAddToLibrary,
        handleRemoveFromLibrary,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
