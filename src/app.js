const dishes = [
  { id: "veg-bowl", name: "Veggie Power Bowl", description: "Seasonal vegetables, grains and a bright dressing.", price: 149 },
  { id: "paneer-wrap", name: "Paneer Wrap", description: "Spiced paneer and crunchy salad in a soft wrap.", price: 129 },
  { id: "classic-burger", name: "Classic Burger", description: "A simple burger with lettuce and house sauce.", price: 179 },
  { id: "masala-rice", name: "Masala Rice Bowl", description: "Comforting rice with aromatic spices.", price: 119 }
];

const cart = new Map();
const menuContainer = document.querySelector("#menu-items");
const searchInput = document.querySelector("#menu-search");
const cartCount = document.querySelector("#cart-count");
const cartMessage = document.querySelector("#cart-message");
const cartTotal = document.querySelector("#cart-total");

function renderMenu(query = "") {
  const normalizedQuery = query.trim().toLowerCase();
  const filtered = dishes.filter((dish) =>
    `${dish.name} ${dish.description}`.toLowerCase().includes(normalizedQuery)
  );

  menuContainer.replaceChildren();
  if (filtered.length === 0) {
    const empty = document.createElement("p");
    empty.textContent = "No dishes match your search.";
    menuContainer.append(empty);
    return;
  }

  filtered.forEach((dish) => {
    const card = document.createElement("article");
    card.className = "menu-card";
    const title = document.createElement("h3");
    title.textContent = dish.name;
    const description = document.createElement("p");
    description.textContent = dish.description;
    const price = document.createElement("p");
    price.className = "price";
    price.textContent = `₹${dish.price}`;
    const button = document.createElement("button");
    button.className = "button";
    button.type = "button";
    button.textContent = "Add to order";
    button.addEventListener("click", () => addToCart(dish.id));
    card.append(title, description, price, button);
    menuContainer.append(card);
  });
}

function addToCart(id) {
  cart.set(id, (cart.get(id) || 0) + 1);
  renderCart();
}

function renderCart() {
  let count = 0;
  let total = 0;
  cart.forEach((quantity, id) => {
    const dish = dishes.find((item) => item.id === id);
    count += quantity;
    total += dish.price * quantity;
  });
  cartCount.textContent = String(count);
  cartTotal.textContent = `₹${total}`;
  cartMessage.textContent = count === 0
    ? "Your order is empty. Add a dish to get started."
    : `${count} item(s) in your demo order.`;
}

searchInput.addEventListener("input", (event) => renderMenu(event.target.value));
document.querySelector("#clear-cart").addEventListener("click", () => {
  cart.clear();
  renderCart();
});

renderMenu();
renderCart();
