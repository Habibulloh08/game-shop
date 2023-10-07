import { useGlobalContext } from "../Contex";
import "../staylCss/shopBagItem.css";
const ShopBagItem = ({ game, index }) => {
  const { handleRemoveFromBag } = useGlobalContext();
  return (
    <tr className="shopBagItem">
      <th scope="row">{index + 1}</th>
      <td>
        <img src={game.img} alt="" className="fluid" />
      </td>
      <td>{game.title}</td>
      <td>${game.price.toFixed(2)}</td>
      <td>{game.discount * 100}%</td>
      <td>${(game.price * (1 - game.discount)).toFixed(2)}</td>
      <td>
        <a href="#" onClick={() => handleRemoveFromBag(game)}>
          <i className="bi bi-trash"></i>
        </a>
      </td>
    </tr>
  );
};

export default ShopBagItem;
