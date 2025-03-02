// Task 1 - Created Revenue Metric Card

// Select the dashboard container using both methods
const dashboard = document.getElementById("dashboard");
const dashboardQuery = document.querySelector("#dashboard"); // Extra selector to meet requirements

// Create a new <div> element for the Revenue metric card
const revenueCard = document.createElement("div");

// Set attributes for styling and identification
revenueCard.setAttribute("class", "metric-card");
revenueCard.setAttribute("id", "revenueCard");

// Populate the card with content
revenueCard.innerHTML = "<h2>Revenue</h2><p>$0</p>";
dashboard.appendChild(revenueCard);


// Task 2 - Updated Metric Cards via Array Conversion

// Select all metric cards
const metricCards = document.querySelectorAll(".metric-card");

// Convert NodeList to an array and update each card
Array.from(metricCards).forEach(card => {
    card.style.backgroundColor = "green"; // Change background color
    card.innerHTML += " - Updated"; // Append "- Updated" text
});


// Task 3 - Implemented Dynamic Inventory List

// Select the inventory list
const inventoryList = document.getElementById("inventoryList");

// Function to add a new product item
function addProductItem(productName) {
    const newItem = document.createElement("li");

    // Set attributes
    newItem.setAttribute("class", "product-item");
    newItem.setAttribute("data-product", productName);

    // Set content
    newItem.innerText = productName;

    // Add event listener to remove item when clicked
    newItem.addEventListener("click", () => {
        inventoryList.removeChild(newItem);
        updateRevenue(-100); // Decrease revenue when item is removed
        console.log(`Removed: ${productName}`);
    });

    // Append to inventory list
    inventoryList.appendChild(newItem);
    updateRevenue(100); // Increase revenue when item is added
}

// Attach event listeners to buttons for adding inventory items
document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
        const productName = button.innerText.replace("Add ", ""); 
    });
});

// Function to update revenue
function updateRevenue(amount) {
    const revenueCard = document.getElementById("revenueCard");
    let revenueValue = parseInt(revenueCard.querySelector("p").textContent.replace("$", "")) || 0;
    revenueValue += amount;
    revenueCard.querySelector("p").textContent = `$${revenueValue}`;
}

// Task 4 - Demonstrated Event Bubbling in Customer Section

// Select the customer section
const customerSection = document.getElementById("customerSection");

// Function to create customer cards
function addCustomerCard(customerName) {
    const customerCard = document.createElement("div");
    customerCard.setAttribute("class", "customer-card");
    customerCard.textContent = customerName;

    // Add event listener to customer card
    customerCard.addEventListener("click", (event) => {
        console.log(`Customer card clicked: ${customerName}`);
        event.stopPropagation(); 
    });

    customerSection.appendChild(customerCard);
}

customerSection.addEventListener("click", () => {
    console.log("Customer section clicked");
});

// Adding sample customers
addCustomerCard("Frodo");
addCustomerCard("Bilbo");
addCustomerCard("Gandalf"); 