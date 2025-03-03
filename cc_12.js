// Task 1 - Created Revenue Metric Card

// Select the dashboard container
const dashboard = document.getElementById("dashboard");

// Function to create reusable metric cards
function createMetricCard(id, title, initValue) { 
    let card = document.createElement("div");
    card.setAttribute("class", "metric-card");
    card.setAttribute("id", id);
    card.innerHTML = `<h3>${title}</h3><p id="${id}-value">$${initValue}</p>`;
    dashboard.appendChild(card);
}

// Create multiple metric cards dynamically
createMetricCard("revenueCard", "Revenue", 0);
createMetricCard("profitCard", "Profit", 0);
createMetricCard("expensesCard", "Expenses", 0);

// Task 2 - Updated Metric Cards via Array Conversion
function updateMetricCards() {
    const metricCardList = document.querySelectorAll(".metric-card");
    const metricCardArray = Array.from(metricCardList);

    metricCardArray.forEach(card => {
        card.innerHTML += "<p><i> - Updated</i></p>"; 
        card.style.backgroundColor = "greenyellow";
    });
}

// Call update AFTER cards are created
updateMetricCards();

// Task 3 - Implemented Dynamic Inventory List
const inventoryList = document.getElementById("inventoryList");

// Function to add a new product
function addInventoryItem(product) {
    let newLi = document.createElement("li");
    newLi.setAttribute("class", "product-item");
    newLi.setAttribute("data-product", product);
    newLi.textContent = product;

    newLi.addEventListener("click", () => removeInventoryItem(newLi));
    inventoryList.appendChild(newLi);
}

// Function to remove an inventory item
function removeInventoryItem(item) {
    if (inventoryList.contains(item)) {
        inventoryList.removeChild(item);
    }
}

// Fixing the Add Product Buttons
document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
        const productName = button.innerText.replace("Add ", "");
        addInventoryItem(productName);
    });
});

// Task 4 - Demonstrated Event Bubbling in Customer Section
const customerSection = document.getElementById("customerSection");

// Function to create customer cards
function addCustomerCard(customerName) {
    const customerCard = document.createElement("div");
    customerCard.setAttribute("class", "customer-card");
    customerCard.textContent = customerName;

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
