// Task 1 - Created Revenue Metric Card

// Select the dashboard container
const dashboard = document.getElementById("dashboard");

// Function to create reusable metric cards
function createMetricCard(id, title, initValue) { 
    let card = document.createElement("div");
    card.setAttribute("class", "metric-card");
    card.setAttribute("id", id);
    card.innerHTML = `<h3>${title}</h3><p id="${id}-value">$${initValue.toFixed(2)}</p>`;
    dashboard.appendChild(card);
}

// Create metric cards for Revenue, Profit, and Expenses
createMetricCard("revenueCard", "Revenue", 0);
createMetricCard("profitCard", "Profit", 0);
createMetricCard("expensesCard", "Expenses", 0);

// Initialize metric values
let revenue = 0;
let expenses = 0;

// Function to update metric values
function updateMetrics() {
    const profit = revenue - expenses;
    
    document.getElementById("revenueCard-value").textContent = `$${revenue.toFixed(2)}`;
    document.getElementById("expensesCard-value").textContent = `$${expenses.toFixed(2)}`;
    document.getElementById("profitCard-value").textContent = `$${profit.toFixed(2)}`;
}

// Task 2 - Updated Metric Cards via Array Conversion
function updateMetricCards() {
    const metricCardList = document.querySelectorAll(".metric-card");
    const metricCardArray = Array.from(metricCardList);

    metricCardArray.forEach(card => {
        card.innerHTML += "<p><i> - Updated</i></p>"; 
        card.style.backgroundColor = "greenyellow";
    });
}

// Call update after cards are created
updateMetricCards();

// Task 3 - Implemented Dynamic Inventory List
const inventoryList = document.getElementById("inventoryList");

// Object to store product prices
const productPrices = {};

// Function to add a new product and update **expenses** (cost of acquiring stock)
function addInventoryItem(product, price) {
    if (!productPrices[product]) {
        productPrices[product] = price; // Store the product price
    }

    let newLi = document.createElement("li");
    newLi.setAttribute("class", "product-item");
    newLi.setAttribute("data-product", product);
    newLi.textContent = `${product} - $${productPrices[product].toFixed(2)}`;

    expenses += productPrices[product]; // Adding to expenses when acquiring stock
    updateMetrics();

    // Add event listener to remove item (simulate selling the product)
    newLi.addEventListener("click", () => removeInventoryItem(newLi, product));
    inventoryList.appendChild(newLi);
}

// Function to remove a product and update **revenue** (when selling it)
function removeInventoryItem(item, product) {
    if (inventoryList.contains(item)) {
        inventoryList.removeChild(item);

        if (productPrices[product]) {
            revenue += productPrices[product]; // Add to revenue when sold
        }

        updateMetrics();
    }
}

// Attach event listeners correctly to buttons to prevent multiple triggers
document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", (event) => {
        event.stopPropagation(); // Prevents event bubbling
        const productName = event.target.innerText.replace("Add ", "");
        const productPrice = productPrices[productName] || (Math.floor(Math.random() * 100) + 50); 
        addInventoryItem(productName, productPrice);
    });
});

// Task 4 - Demonstrated Event Bubbling in Customer Section
const customerSection = document.getElementById("customerSection");

// Function to create customer cards
function addCustomerCard(customerName) {
    const customerCard = document.createElement("div");
    customerCard.setAttribute("class", "customer-card");
    customerCard.textContent = customerName;

    // Add event listener to customer card
    customerCard.addEventListener("click", (event) => {
        console.log(`User clicked ${customerName}`);
        event.stopPropagation();
    });

    customerSection.appendChild(customerCard);
}

// Attach event listener to parent container
customerSection.addEventListener("click", () => {
    console.log("User clicked customerSection");
});

// Dynamically add customers
addCustomerCard("Frodo");
addCustomerCard("Bilbo");
addCustomerCard("Gandalf");
