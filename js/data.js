const products = [
  {
    category: "Cap",
    Name: "HEAD GEAR BLACK & CYAN SUPER SUEDE CAP",
    img: "./assets/1st.jpg",
    details: {
      price: "100",
      stock: "available",
      brand: "NY",
    },
  },
  {
    category: "Cap",
    Name: "HEAD GEAR CHOCOLATE COLOR SUPER SUEDE CAP",
    img: "./assets/2.jpg",
    details: {
      price: "100",
      stock: "available",
      brand: "NY",
    },
  },
  {
    category: "Cap",
    Name: "HEAD GEAR WHITE COLOR SUPER SUEDE CAP",
    img: "./assets/3.jpg",
    details: {
      price: "100",
      stock: "available",
      brand: "NY",
    },
  },
  {
    category: "Cap",
    Name: "HEAD GEAR SUPER SUEDE CAP",
    img: "./assets/4.jpg",
    details: {
      price: "100",
      stock: "available",
      brand: "NY",
    },
  },
  {
    category: "Cap",
    Name: "HEAD GEAR NEW SUPER SUEDE CAP",
    img: "./assets/5.jpg",
    details: {
      price: "100",
      stock: "available",
      brand: "NY",
    },
  },
  {
    category: "Cap",
    Name: "HEAD GEAR LATEST SUPER SUEDE CAP",
    img: "./assets/6.jpg",
    details: {
      price: "100",
      stock: "available",
      brand: "NY",
    },
  },
  {
    category: "Cap",
    Name: "HEAD GEAR RED SUPER SUEDE CAP",
    img: "./assets/8.jpg",
    details: {
      price: "100",
      stock: "available",
      brand: "NY",
    },
  },
  
];

let cartCount = 0;
let subTotal = 0;

function displayProducts() {
  for (let item of products) {
    const card = document.createElement("div");

    card.innerHTML = `

        <div class="card bg-base-100 w-96 shadow-xl">
  <figure class="">
    <img
      src="${item.img}"
      alt="Shoes" />
  </figure>
                <div class="card-body">
                  <h2 class="card-title ">
                    ${item.Name || "Product Name"}
                  </h2>
                  <p>${
                    item.details.description ||
                    "Product description not available."
                  }</p>
                  <p class="font-bold text-primary-color">Price: ${
                    item.details.price || "N/A"
                  }৳</p>
                  <div class="card-actions justify-end">
      <button onclick="addToCart('${item.Name}', ${
      item.details.price
    })" class="btn bg-primary-color">Buy Now</button>
    </div>
            </div>
        `;
    document.getElementById("products").append(card);
  }
}

function addToCart(name, price) {
  cartCount++;
  subTotal = subTotal + price;
  const cartCountContainer = document.getElementById("cart-count");
  const cartTotalContainer = document.getElementById("cart-total");
  const subTotalContainer = document.getElementById("sub-total");
  cartCountContainer.innerText = cartCount;
  cartTotalContainer.innerText = cartCount;
  subTotalContainer.innerText = subTotal;
  my_modal_1.showModal().showModal;
}
displayProducts();
