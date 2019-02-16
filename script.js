const productBase = [
  [
    { nazwa: "samsung5", price: 5, rating: 5 },
    { nazwa: "samsung3", price: 3, rating: 5 },
    { nazwa: "samsung1", price: 1, rating: 5 },
    { nazwa: "samsung2", price: 2, rating: 5 }
  ],
  [
    { nazwa: "Xiaomi5", price: 5, rating: 5 },
    { nazwa: "Xiaomi3", price: 3, rating: 5 },
    { nazwa: "Xiaomi1", price: 1, rating: 5 },
    { nazwa: "Xiaomi2", price: 2, rating: 5 }
  ],
  [
    { nazwa: "Sony5", price: 5, rating: 5 },
    { nazwa: "Sony3", price: 3, rating: 5 },
    { nazwa: "Sony1", price: 1, rating: 5 },
    { nazwa: "Sony2", price: 2, rating: 5 }
  ],
  [
    { nazwa: "Apple25", price: 5, rating: 5 },
    { nazwa: "Apple43", price: 3, rating: 5 },
    { nazwa: "Apple51", price: 1, rating: 5 },
    { nazwa: "Apple62", price: 2, rating: 5 }
  ]
];

let products = [];

const handle = document.querySelector(".products");

const samsung = document.querySelectorAll("li");

samsung.forEach(element => {
  element.addEventListener("click", function() {
    products = productBase[this.value].slice();
    displayProducts();
  });
});

document.querySelector(".sortPrice").addEventListener("click", () => {
  products.sort((a, b) => (a.nazwa > b.nazwa ? 1 : b.nazwa > a.nazwa ? -1 : 0));
  displayProducts();
});
document.querySelector(".sortName").addEventListener("click", () => {
  products.sort((a, b) => (a.price > b.price ? 1 : b.price > a.price ? -1 : 0));
  displayProducts();
});

function displayProducts() {
  while (handle.firstChild) {
    handle.removeChild(handle.firstChild);
  }
  for (i = 0; i < products.length; i++) {
    const product = document.createElement("div");
    product.classList.add = "products__name";
    const price = document.createElement("div");
    product.classList.add = "products__price";
    const rating = document.createElement("div");
    product.classList.add = "products__rating";
    product.innerHTML = products[i].nazwa;
    price.innerHTML = `${products[i].price} zł`;
    rating.innerHTML = products[i].rating;
    handle.appendChild(product);
    handle.appendChild(price);
    handle.appendChild(rating);
  }
}
