// Bag.jsx
import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../Contex";
import ShopBagItem from "../components/ShopBagItem";
import "../staylCss/bag.css";

const Bag = ({ reference }) => {
  const [total, setTotal] = useState(0);
  const { bag, handleRemoveFromBag } = useGlobalContext();

  const totalPayment = () => {
    return bag
      .map((game) => game.price * (1 - game.discount))
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
      .toFixed(2);
  };

  useEffect(() => {
    setTotal(totalPayment());
  }, [bag]);

  return (
    <section id="bag" className="bag" ref={reference}>
      <div className="container-fluid">
        <div className="row mb-3">
          <h1>My Bag</h1>
        </div>
      </div>
      {bag.length === 0 ? (
        <h2>Your bag is empty</h2>
      ) : (
        <>
          <div className="row">
            <div className="table-responsive">
              <table className="shopBagTable table table-borderless align-middle">
                <thead>
                  <tr>
                    <th scope="col">No</th>
                    <th scope="col">Preview</th>
                    <th scope="col">Games</th>
                    <th scope="col">Price</th>
                    <th scope="col">Discount</th>
                    <th scope="col">Payment</th>
                    <th scope="col">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {bag.map((game, index) => (
                    <ShopBagItem
                      index={index}
                      game={game}
                      key={game._id}
                      onRemove={handleRemoveFromBag}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="row d-flex justify-content-between mt-5">
            <div className="col-lg-2 d-flex align-items-center">
              <p className="itemCount">Total Items: {bag.length}</p>
            </div>

            <div className="col-lg-10 d-flex justify-content-end">
              <div className="payment">
                Total: ${total}
                <a href="#">
                  Check out <i className="bi bi-wallet-fill"></i>
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Bag;
