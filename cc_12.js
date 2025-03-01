// Task 1 - Created Revenue Metric Card

// Select the dashboard container
const dashboard = document.getElementById("dashboard");

// Create a new <div> element for the Revenue metric card
const revenueCard = document.createElement("div");

// Set attributes for styling and identification
revenueCard.setAttribute("class", "metric-card");
revenueCard.setAttribute("id", "revenueCard");

// Populate the card with content
revenueCard.innerHTML = "<h2>Revenue</h2><p>$0</p>";

// Append the new metric card to the dashboard
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
        console.log(`Removed: ${productName}`);
    });

    // Append to inventory list
    inventoryList.appendChild(newItem);
}

// Adding event listeners to buttons
document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
        const productName = button.innerText.replace("Add ", "");
        addProductItem(productName);
    });
});

// Task 4 - Demonstrated Event Bubbling in Customer Section

// Select the customer section
const customerSection = document.getElementById("customerSection");

// Function to create a new customer card
function addCustomerCard(customerName) {
    const customerCard = document.createElement("div");

    // Set attributes and content
    customerCard.setAttribute("class", "customer-card");
    customerCard.textContent = customerName;

    // Add event listener for the customer card
    customerCard.addEventListener("click", (event) => {
        console.log("Customer card clicked");
        event.stopPropagation(); // Prevents bubbling to parent
    });

    // Append to customer section
    customerSection.appendChild(customerCard);
}

// Event listener on parent to demonstrate bubbling
customerSection.addEventListener("click", () => {
    console.log("Customer section clicked");
});

// Adding sample customers
addCustomerCard("Frodo");
addCustomerCard("Bilbo");


