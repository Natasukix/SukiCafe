// Sample menu
const menu = [
    { id: 1, name: "Coffee", price: 2.5 },
    { id: 2, name: "Tea", price: 2.0 },
    { id: 3, name: "Pastry", price: 3.0 },
    { id: 4, name: "Sandwich", price: 5.0 }
];

// Function to display the menu
function displayMenu() {
    console.log("Welcome to Suki Cafe! Here is our menu:");
    menu.forEach(item => {
        console.log(`${item.id}: ${item.name} - $${item.price.toFixed(2)}`);
    });
}

// Function to take an order
function takeOrder() {
    let order = [];
    let orderItem;

    do {
        orderItem = parseInt(prompt("Enter the item number to order (or 0 to finish):"));

        if (orderItem > 0 && orderItem <= menu.length) {
            order.push(menu[orderItem - 1]);
            alert(`${menu[orderItem - 1].name} added to your order.`);
        } else if (orderItem !== 0) {
            alert("Invalid item number. Please try again.");
        }
    } while (orderItem !== 0);

    return order;
}

// Function to calculate total price
function calculateTotal(order) {
    return order.reduce((total, item) => total + item.price, 0);
}

// Main cafe function
function startCafe() {
    displayMenu();
    const order = takeOrder();
    const total = calculateTotal(order);

    if (total > 0) {
        alert(`Your total is $${total.toFixed(2)}. Thank you for your order!`);
    } else {
        alert("No items ordered. Thank you for visiting!");
    }
}

// Call startCafe when the game starts
startCafe();
