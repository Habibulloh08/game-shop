import "../staylCss/bag.css";

const Bag = ({ games, reference }) => {

  return (
    <section id="bag" className="bag" ref={reference}>
      <h1>Bag</h1>
    </section>
  );
};

export default Bag;
