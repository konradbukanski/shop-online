import React, { Component } from "react";
import "../styles/productsPage.css";
import Product from "../components/Product";

const products = [
  {
    id: 1,
    image: "mi-a2",
    title: "Xiaomi mi2",
    price: "600 zł"
  },
  {
    id: 2,
    image: "mi-a2",
    title: "Xiaomi mi3",
    price: "200 zł"
  },
  {
    id: 3,
    image: "mi-a2",
    title: "Xiaomi mi4",
    price: "300 zł"
  },
  {
    id: 4,
    image: "mi-a2",
    title: "Xiaomi mi5",
    price: "400 zł"
  },
  {
    id: 5,
    image: "mi-a2",
    title: "Xiaomi mi3",
    price: "200 zł"
  },
  {
    id: 6,
    image: "mi-a2",
    title: "Xiaomi mi4",
    price: "300 zł"
  }
];

class ProductsPage extends Component {
  render() {
    const productsList = products.map(item => (
      <Product key={item.id} {...item} cardDetails={this.cardDetails} />
    ));

    return <div className="productList">{productsList}</div>;
  }
}

export default ProductsPage;
