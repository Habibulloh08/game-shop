import { useGlobalContext } from "../Contex";
import GameCard from "../components/GameCard";
import "../staylCss/myLibrary.css";

const MyLibrary = ({ reference }) => {
  const { library } = useGlobalContext();
  return (
    <section id="library" className="library" ref={reference}>
      <div className="container-fluid">
        <div className="row mb-3">
          <h1>My Library</h1>
        </div>
        <div className="row">
          {library.length === 0 ? (
            <h2>Your library is empty</h2>
          ) : (
            library.map((game) => <GameCard key={game._id} game={game} />)
          )}
        </div>
      </div>
    </section>
  );
};

export default MyLibrary;
