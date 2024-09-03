window.addEventListener("DOMContentLoaded", init);

const productsURI = "https://kea-alt-del.dk/t7/api/products";
// const imgurl = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;

let productList;
let productTemplate;

function init() {
  productList = document.querySelector("#product_list");
  console.log("productList", productList);

  productTemplate = document.querySelector("template").content;
  console.log("productTemplate", productTemplate);

  fetch(productsURI)
    .then((response) => {
      console.log("response", response);
      return response.json();
    })
    .then(handleData);
}

function handleData(json) {
  console.log("json", json);
  json.forEach(showProduct);
}

function showProduct(product) {
  const clone = productTemplate.cloneNode(true);
  clone.querySelector("h3").textContent = product.productdisplayname;
  clone.querySelector("p").textContent = product.price;
  clone.querySelector("img").src =`https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
//   clone.querySelector("img").alt = ;

  if (product.soldout){
    clone.querySelector("article").classList.add("soldOut");
  };

  if(product.discounted) {
    clone.querySelector("article").classList.add("onSale");
    clone.querySelector(".discoundt p span").textContent = Math.round(product.price - (product.price * product.discount)/100);
    clone.querySelector(".discoundt p+p span").textContent = product.discount;
  }

  productList.appendChild(clone);
}