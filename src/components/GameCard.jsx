// GameCard.jsx
import React from "react";
import { useGlobalContext } from "../Contex";
import "../staylCss/gameCard.css";
import GameRating from "./GameRating";

const GameCard = ({ game }) => {
  const { handleAddToLibrary, handleRemoveFromLibrary, library } =
    useGlobalContext();

  const handleLikeClick = (e) => {
    e.preventDefault();
    const isGameInLibrary = library.some((item) => item._id === game._id);
    isGameInLibrary ? handleRemoveFromLibrary(game) : handleAddToLibrary(game);
  };

  return (
    <div className="col-xl-3 col-lg-4 col-md-6">
      <div className="gameCard">
        <img src={game.img} alt={game.title} className="img-fluid" />
        <a
          href="#"
          className={`like ${
            library.some((item) => item._id === game._id) ? "active" : ""
          }`}
          onClick={handleLikeClick}
        >
          <i className="bi bi-heart-fill"></i>
        </a>
        <div className="gameFeature">
          <span className="gameType">{game.level}</span>
          <GameRating rating={game.rating} />
        </div>
        <div className="gameTitle mt-4 mb-3">{game.title}</div>
        <div className="gamePrice">
          {game.discount !== 0 && (
            <>
              <span className="discount">
                <i>{game.discount * 100}%</i>
              </span>
              <span className="prevPrice">${game.price.toFixed(2)}</span>
            </>
          )}
          <span className="currentPrice">
            ${(1 - game.discount) * game.price.toFixed(2)}
          </span>
        </div>
        <a href="#" className="addBag">
          <i className="bi bi-bag-plus"></i>
        </a>
      </div>
    </div>
  );
};

export default GameCard;
