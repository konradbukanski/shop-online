import React from "react";

const Product = props => {
  return (
    <div className="productList__product">
      <img src={require(`../images/${props.image}.png`)} />
      <h2>Xiaomi mi2</h2>
      <p>cena 500 zł</p>
      <button onClick={() => props.cardDetails(props.amount + 1)}>
        dodaj do koszyka
      </button>
    </div>
  );
};

export default Product;
