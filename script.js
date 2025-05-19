// Contact Form Submission
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for contacting TheFoodX! We'll be in touch soon.");
});

// Product List
const products = [
    { name: "Paragon Classic Burger 4oz", price: "£21.99", image: "paragon basic.jpg" },
    { name: "Paragon Ali Baba Burger 4oz", price: "£28.99", image: "ali baba halal.jpg" },
    { name: "Paragon Gourmet Burger 6oz", price: "£32.99", image: "paragon gourmet 6oz.jpg" },
    { name: "Americana Seeded Buns 4.5''", price: "£8.49", image: "americana 4.5.jpg" },
    { name: "Americana Seeded Buns 5''", price: "£9.99", image: "Americana buns 5.jpg" },
    { name: "Aviko Vegetable Burger", price: "£15.99", image: "aviko veggie burger.jpg" },
    { name: "Aviko Battered Onion Rings", price: "£3.99", image: "aviko-battered-onion-rings-6x1kg.jpg" },
    { name: "Chef’s Pride Halal Pepperoni", price: "£8.49", image: "chefs pride pepperoni.jpg" },
    { name: "Breaded Cod Fish Fillet Burger", price: "£25.99", image: "cod-fillet-burger-288.jpg" },
    { name: "Frozen Garlic Cloves", price: "£14.99", image: "garlic cloves frozen.jpg" },
    { name: "Habibi Halal Pepperoni", price: "£10.99", image: "Habibi halal pepperoni.jpg" },
    { name: "Aminah Halal Turkey Ham", price: "£4.99", image: "halal shredded turkey ham aminha.jpg" },
    { name: "Aviko Jalapeno Bites", price: "£7.49", image: "Jalapeno-aviko.png" },
    { name: "Kerrymaid Cheese Slices", price: "£8.99", image: "kerrymaid cheese slices.jpg" },
    { name: "King Prawn", price: "£6.49", image: "king prawn.jpg" },
    { name: "Lamb Weston Mozzarella Sticks", price: "£8.99", image: "lamb weston mozzarella sticks.jpg" },
    { name: "Lamb Weston Private Reserve Fries", price: "£15.49", image: "lamb weston private reserve.jpg" },
    { name: "Lamb Weston Seasoned Twisters", price: "£7.49", image: "lamb weston skin on twisters.jpg" },
    { name: "Lamb Weston Ziggy Fries", price: "£21.99", image: "lamb weston ziggy fries.jpg" },
    { name: "Lamb Weston Battered Onion Rings", price: "£4.49", image: "lamb-weston-onion-rings-pkt.jpg" },
    { name: "Lamb Weston Skin-on Wedges", price: "£6.24", image: "lamb-weston-onion-rings-pkt.jpg" },
    { name: "Breaded Garlic Mushrooms", price: "£4.49", image: "leduc breaded garlic mushroom.jpg" },
    { name: "McCain Breaded Mozzarella Sticks", price: "£7.99", image: "mccain breaded cheese sticks.png" },
    { name: "McCain Chilli Cheese Nuggets", price: "£7.99", image: "mccain chilli cheese nuggets.jpg" },
    { name: "McCain Fast Food Thin Fries 3/8", price: "£14.99", image: "mccain julienne fries.jpg" },
    { name: "McCain Fast Food Julienne Fries 7/7", price: "£14.99", image: "mccain julienne fries.jpg" },
    { name: "McCain Vegetable Burger", price: "£6.66", image: "mccain vegetable burger.jpg" },
    { name: "Meadow Vale Breaded Fillet", price: "£7.49", image: "meadow vale breaded goujon.png" },
    { name: "Meadow Vale Crispy Battered Fillets", price: "£18.99", image: "placeholder.jpg" },
    { name: "Meadow Vale Battered Chicken Steak", price: "£5.49", image: "meadow vale chicken steaks.jpg" },
    { name: "Meadow Vale Battered Chicken Nuggets", price: "£5.49", image: "meadow vale nuggets.jpg" },
    { name: "Meadow Vale Southern Fried Chicken", price: "£52.99", image: "meadow vale sfc 50 pcs.jpg" },
    { name: "Meadow Vale Southern Fried Fillets", price: "£8.49", image: "meadow vale sfc goujon spicy.jpg" },
    { name: "Meadow Vale Spicy Chicken Fillets", price: "£17.99", image: "meadowvale-hot-spicy-zinger-fillets-1-x-18-x-110g-1608-p.jpg" },
    { name: "Meadow Vale Chicken Fillet Bites", price: "£8.49", image: "placeholder.jpg" },
    { name: "Mr Prawn Cooked Prawns", price: "£4.49", image: "mr prawn.jpg" },
    { name: "Leicester Bakery Sabat Pitta Bread", price: "£13.99", image: "placeholder.jpg" },
    { name: "Riva Garlic Bread Slices", price: "£18.99", image: "riva garlic bread.jpg" },
    { name: "Riverside Chicken Steaks", price: "£5.99", image: "riverside breaded chicken burger.jpg" },
    { name: "Seven Tides Fudge Cake Slices", price: "£14.99", image: "seven tides fudge cake.jpg" },
    { name: "Seven Tides Strawberry Cheesecake Slices", price: "£15.99", image: "seven tides strawberry cheesecake.jpg" },
    { name: "Tortilla Wraps Love Tortilla 12''", price: "£19.99", image: "Tortil-Love-Tortilla-1222-.jpg" },
    { name: "Youngs Cod Fish Fingers", price: "£10.99", image: "youngs fish fingers.jpg" },
    { name: "Suprimo Cheese 70/30", price: "£55.99", image: "suprimo 70 30.jpg" },
    { name: "Elite Cheese 80/20", price: "£57.99", image: "Elite.jpg" },
    { name: "Lutosa Chips Straight Cut Fries 7/16", price: "£15.99", image: "lutosa.jpg" },
    { name: "Lamb Weston Private Reserve Fries 7/16", price: "£14.99", image: "lamb weston private 7 16.jpg" },
    { name: "Discovery Tortilla Wrap", price: "£21.69", image: "Santa Maria Tortilla.jpg" },
    { name: "Garlic and Herb Spread", price: "£12.99", image: "Garlic and herb spread.jpg" },
    { name: "Salimah Diced Chicken Breast", price: "£8.49", image: "placeholder.jpg" },
    { name: "Kings Crunchy Coated Fries 10x10", price: "£13.99", image: "placeholder.jpg" },
    { name: "Lutosa Coated Classic Cut Fries 10x10", price: "£15.49", image: "Lutosa 10 x 10.jpg" }
];

// Pagination Setup
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
        productDiv.innerHTML = `<img src="${product.image}" alt="${product.name}">
                                <p>${product.name} - ${product.price}</p>`;
        productList.appendChild(productDiv);
    });

    document.getElementById("pageNumber").innerText = `Page ${currentPage}`;
}

// Pagination Buttons
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
