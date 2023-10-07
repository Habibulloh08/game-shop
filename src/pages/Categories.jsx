import "../staylCss/categories.css";
import GameCard from "../components/GameCard";
import { useGlobalContext } from "../Contex";
import filterListData from "../data/filterListData";
import { useEffect, useState } from "react";
const Categories = ({ reference }) => {
  const { games } = useGlobalContext();
  const [data, setData] = useState(games);
  const [filters, setFilters] = useState(filterListData);
  const handleFilterGames = (category) => {
    setFilters(
      filters.map((filter) => ({
        ...filter,
        active: filter.name === category,
      }))
    );

    if (category === "All") {
      setData(games);
    } else {
      setData(games.filter((game) => game.category === category));
    }
  };
  useEffect(() => {
    setData(games);
  }, [games]);

  const [text, setText] = useState("");
  const handleSearchGames = (e) => {
    setData(
      games.filter((game) =>
        game.title.toLowerCase().includes(e.target.value.toLowerCase().trim())
      )
    );
    setText(e.target.value);
  };
  return (
    <section id="categories" className="categories" ref={reference}>
      <div className="container-fluid mt-2">
        <div className="row">
          <div className="col-lg-8 d-flex align-items-center justify-content-start">
            <ul className="filters">
              {filters.map((filter) => (
                <li
                  key={filter._id}
                  className={`${filter.active ? "active" : ""}`}
                  onClick={() => handleFilterGames(filter.name)}
                >
                  {filter.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-4 d-flex align-items-center justify-content-end">
            <div className="search">
              <i className="bi bi-search"></i>
              <input
                type="text"
                name="search"
                placeholder="Search"
                value={text}
                onChange={handleSearchGames}
              />
            </div>
          </div>
        </div>
        <div className="row">
          {data.map((game) => (
            <GameCard key={game._id} game={game} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
