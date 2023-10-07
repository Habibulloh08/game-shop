import React, { createContext, useContext, useState, useEffect } from "react";
import { data } from "./data/api/gamesData";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [games, setGames] = useState(data);

  const [active, setActive] = useState(false);
  const [library, setLibrary] = useState([]);
  const [bag, setBag] = useState([]);

  useEffect(() => {
    const savedLibrary = JSON.parse(localStorage.getItem("library")) || [];
    const savedBag = JSON.parse(localStorage.getItem("bag")) || [];

    setLibrary(savedLibrary);
    setBag(savedBag);
  }, []);

  useEffect(() => {
    localStorage.setItem("library", JSON.stringify(library));
    localStorage.setItem("bag", JSON.stringify(bag));
  }, [library, bag]);

  const handleAddToLibrary = (game) => {
    if (!library.some((item) => item._id === game._id)) {
      setLibrary([...library, game]);
    }
  };

  const handleRemoveFromLibrary = (game) => {
    const updatedLibrary = library.filter((item) => item._id !== game._id);
    setLibrary(updatedLibrary);
  };

  const handleAddToBag = (game) => {
    const isGameInBag = bag.some((item) => item._id === game._id);
    if (!isGameInBag) {
      setBag([...bag, game]);
    }
  };

  const handleRemoveFromBag = (game) => {
    const updatedBag = bag.filter((item) => item._id !== game._id);
    setBag(updatedBag);
  };
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(
  //         "http://localhost:5173/api/gamesData.json"
  //       );
  //       const data = await response.json();
  //       setGames(data);
  //     } catch (error) {
  //       console.error("Ma'lumotlarni olishda xato yuz berdi: ", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <AppContext.Provider
      value={{
        games,
        setGames,
        active,
        setActive,
        library,
        bag,
        handleAddToLibrary,
        handleRemoveFromLibrary,
        handleAddToBag,
        handleRemoveFromBag,
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
