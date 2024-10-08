// window.addEventListener("DOMContentLoaded", init);

// const document = productTemplate.cloneNode(true);


// const id = 1532;
// const uri = `https://kea-alt-del.dk/t7/api/products/${id}`;
// const imgURI = `https://kea-alt-del.dk/t7/images/webp/640/${id}.webp`;

// function init() {
//   fetch(uri)
//     .then((reponse) => reponse.json())
//     .then(handleData);
// }

// function handleData(json) {
//   console.log("json", json);

//   document.querySelector("h1").textContent = json.productdisplayname;
//   document.querySelector("p").textContent = json.brandbio;

//   document.querySelector("img").src = imgURI;
//   document.querySelector("img").alt = `Image of ${json.productdisplayname}`;
// }


const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch("https://kea-alt-del.dk/t7/images/webp/640/${id}")
.then(response =>response.json())
.then(data => showProduct(data));


function showProduct(product){
 console.log(product);
 document.querySelector(".purchaseBox h3").textContent = product.productdisplayname;
 document.querySelector(".purchaseBox .brand").textContent = product.brandname;
 document.querySelector(".purchaseBox .price").textContent = product.price;
 document.querySelector("img").src= `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
}


// // {
//   "id": 1525,
//   "gender": "Unisex",
//   "category": "Accessories",
//   "subcategory": "Bags",
//   "articletype": "Backpacks",
//   "basecolour": "Navy Blue",
//   "season": "Fall",
//   "productionyear": 2010,
//   "usagetype": "Casual",
//   "productdisplayname": "Deck Navy Blue Backpack",
//   "parsed": 1,
//   "soldout": 0,
//   "relid": 1525,
//   "price": 1299,
//   "discount": 55,
//   "variantname": "Deck Backpack",
//   "brandname": "Puma",
//   "brandbio": "PUMA is the World's Fastest Sports Brand",
//   "brandimage": "http://assets.myntassets.com/assets/images/2015/11/17/11447736932686-113016-3ff8sf.jpg",
//   "agegroup": "Adults-Unisex",
//   "colour1": "NA",
//   "colour2": "NA",
//   "fashiontype": "Fashion",
//   "materialcaredesc": null,
//   "sizefitdesc": null,
//   "description": "<p>asfafaf<br> kasjhdkashd</p>",
//   "styledesc": null
// }


