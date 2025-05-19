document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for contacting TheFoodX! We'll be in touch soon.");
});
const products = [
    { name: "Paragon Classic Burger 4oz", price: "£21.99", image: "placeholder.jpg" },
    { name: "Paragon Ali Baba Burger 4oz", price: "£28.99", image: "placeholder.jpg" },
    { name: "Paragon Gourmet Burger 6oz", price: "£32.99", image: "placeholder.jpg" },
    { name: "Americana Seeded Buns 4.5''", price: "£8.49", image: "placeholder.jpg" },
    { name: "Americana Seeded Buns 5''", price: "£9.99", image: "placeholder.jpg" },
    { name: "Aviko Vegetable Burger", price: "£15.99", image: "placeholder.jpg" },
    { name: "Aviko Battered Onion Rings", price: "£3.99", image: "placeholder.jpg" },
    { name: "Chef’s Pride Halal Pepperoni", price: "£8.49", image: "placeholder.jpg" },
    { name: "Breaded Cod Fish Fillet Burger", price: "£25.99", image: "placeholder.jpg" },
    { name: "Frozen Garlic Cloves", price: "£14.99", image: "placeholder.jpg" },
    { name: "Habibi Halal Pepperoni", price: "£10.99", image: "placeholder.jpg" },
    { name: "Aminah Halal Turkey Ham", price: "£4.99", image: "placeholder.jpg" },
    { name: "Aviko Jalapeno Bites", price: "£7.49", image: "placeholder.jpg" },
    { name: "Kerrymaid Cheese Slices", price: "£8.99", image: "placeholder.jpg" },
    { name: "King Prawn", price: "£6.49", image: "placeholder.jpg" },
    { name: "Lamb Weston Mozzarella Sticks", price: "£8.99", image: "placeholder.jpg" },
    { name: "Lamb Weston Private Reserve Fries", price: "£15.49", image: "placeholder.jpg" },
    { name: "Lamb Weston Seasoned Twisters", price: "£7.49", image: "placeholder.jpg" },
    { name: "Lamb Weston Ziggy Fries", price: "£21.99", image: "placeholder.jpg" },
    { name: "Breaded Garlic Mushrooms", price: "£4.49", image: "placeholder.jpg" },
    { name: "McCain Breaded Mozzarella Sticks", price: "£7.99", image: "placeholder.jpg" },
    { name: "McCain Chilli Cheese Nuggets", price: "£7.99", image: "placeholder.jpg" },
    { name: "McCain Fast Food Thin Fries 3/8", price: "£14.99", image: "placeholder.jpg" },
    { name: "McCain Fast Food Julienne Fries 7/7", price: "£14.99", image: "placeholder.jpg" },
    { name: "Meadow Vale Battered Chicken Nuggets", price: "£5.49", image: "placeholder.jpg" },
    { name: "Meadow Vale Southern Fried Chicken", price: "£52.99", image: "placeholder.jpg" },
    { name: "Tortilla Wraps Love Tortilla 12''", price: "£19.99", image: "placeholder.jpg" },
    { name: "Youngs Cod Fish Fingers", price: "£10.99", image: "placeholder.jpg" },
    { name: "Kings Crunchy Coated Fries", price: "£13.99", image: "placeholder.jpg" },
    { name: "Elite Cheese 80/20", price: "£57.99", image: "placeholder.jpg" },
    { name: "Paragon Chicken Steak Burger", price: "£16.99", image: "placeholder.jpg" },
    { name: "Breaded Fish Fillet", price: "£22.99", image: "placeholder.jpg" },
    { name: "Habibi Halal Beef Pepperoni", price: "£12.99", image: "placeholder.jpg" },
    { name: "Mozzarella Cheese Block", price: "£49.99", image: "placeholder.jpg" },
    { name: "Potato Wedges", price: "£9.99", image: "placeholder.jpg" },
    { name: "Prawn Tempura", price: "£27.99", image: "placeholder.jpg" },
    { name: "Fried Calamari Rings", price: "£23.99", image: "placeholder.jpg" },
    { name: "Halal Beef Bacon", price: "£8.99", image: "placeholder.jpg" },
    { name: "Crumbed Chicken Tenders", price: "£18.99", image: "placeholder.jpg" },
    { name: "Smoked Salmon Slices", price: "£14.99", image: "placeholder.jpg" },
    { name: "Seafood Mix", price: "£19.99", image: "placeholder.jpg" },
    { name: "Halloumi Cheese Block", price: "£10.99", image: "placeholder.jpg" },
    { name: "Aviko Curly Fries", price: "£7.99", image: "placeholder.jpg" },
    { name: "Parmesan Cheese", price: "£15.99", image: "placeholder.jpg" },
    { name: "Breaded Shrimp", price: "£22.49", image: "placeholder.jpg" },
    { name: "Love Tortilla Wraps 10''", price: "£16.99", image: "placeholder.jpg" },
    { name: "Hash Brown Patties", price: "£9.99", image: "placeholder.jpg" },
    { name: "Feta Cheese Crumbles", price: "£12.99", image: "placeholder.jpg" },
    { name: "Crispy Fried Chicken Wings", price: "£22.99", image: "placeholder.jpg" }
];

const itemsPerPage = 30;
let currentPage = 1;

function displayProducts() {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedProducts = products.slice(startIndex, endIndex);

    paginatedProducts.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <p>${product.name} - ${product.price}</p>
        `;
        productList.appendChild(productDiv);
    });

    document.getElementById("pageNumber").innerText = `Page ${currentPage}`;
}

document.getElementById("nextPage").addEventListener("click", () => {
    if (currentPage * itemsPerPage < products.length) {
        currentPage++;
        displayProducts();
    }
});

document.getElementById("prevPage").addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        displayProducts();
    }
});

// Initial Load
displayProducts();
