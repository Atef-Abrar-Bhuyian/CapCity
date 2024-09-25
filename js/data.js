const products = [
  {
    category: "Cap",
    Name: "HEAD GEAR BLACK & CYAN SUPER SUEDE CAP",
    img: "./assets/1st.jpg",
    details: {
      price: "700",
      stock: "available",
      brand: "NY",
    },
  },
  {
    category: "Cap",
    Name: "HEAD GEAR CHOCOLATE COLOR SUPER SUEDE CAP",
    img: "./assets/2.jpg",
    details: {
      price: "550",
      stock: "available",
      brand: "NY",
    },
  },
  {
    category: "Cap",
    Name: "HEAD GEAR WHITE COLOR SUPER SUEDE CAP",
    img: "./assets/3.jpg",
    details: {
      price: "800",
      stock: "available",
      brand: "NY",
    },
  },
  {
    category: "Cap",
    Name: "HEAD GEAR SUPER SUEDE CAP",
    img: "./assets/4.jpg",
    details: {
      price: "950",
      stock: "available",
      brand: "NY",
    },
  },
  {
    category: "Cap",
    Name: "HEAD GEAR NEW SUPER SUEDE CAP",
    img: "./assets/5.jpg",
    details: {
      price: "650",
      stock: "available",
      brand: "NY",
    },
  },
  {
    category: "Cap",
    Name: "HEAD GEAR LATEST SUPER SUEDE CAP",
    img: "./assets/7.jpg",
    details: {
      price: "900",
      stock: "available",
      brand: "NY",
    },
  },
  {
    category: "Cap",
    Name: "HEAD GEAR LATEST SUPER SUEDE CAP",
    img: "./assets/6.jpg",
    details: {
      price: "500",
      stock: "available",
      brand: "NY",
    },
  },
  {
    category: "Cap",
    Name: "HEAD GEAR RED SUPER SUEDE CAP",
    img: "./assets/8.jpg",
    details: {
      price: "800",
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

        <div class="card bg-base-100 w-96 shadow-xl h-full">
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
    })" class="btn bg-[#025043] text-white hover:bg-white hover:text-primary-color">Add to Cart</button>
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
  const subTotalContainer = document.getElementById("sub-total");
  cartCountContainer.innerText = cartCount;
  subTotalContainer.innerText = subTotal;
  document.getElementById('item-with-price').classList.remove('hidden');
  document.getElementById('no-item').classList.add('hidden');
  
  

  const p = document.createElement('p');
  p.classList.add('mb-2');
  p.innerHTML = `
  <p> Item ${cartCount} Price: ${price}৳</p>
  `

  document.getElementById('single-item-price').append(p);

  my_modal_1.showModal().showModal;
}
displayProducts();
