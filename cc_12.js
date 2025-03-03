// Task 1 - Created Revenue Metric Card

// Select the dashboard container using both methods
const dashboard = document.getElementById("dashboard");

// Function to create reusable metric cards
function createMetricCard(id, title, initValue) { 
    let card = document.createElement("div");
    card.setAttribute("class", "metric-card");
    card.setAttribute("id", id);
    card.innerHTML = `<h3>${title}</h3><p>$${initValue}</p>`;
    dashboard.appendChild(card);
}
// Create multiple metric cards dynamically
createMetricCard("revenueCard", "Revenue", 0);
createMetricCard("profitCard", "Profit", 0);
createMetricCard("expensesCard", "Expenses", 0);


// Task 2 - Updated Metric Cards via Array Conversion

const metricCardList = document.querySelectorAll(".metric-card");
const metricCardArray = Array.from(metricCardList);

metricCardArray.forEach(card => {
    card.innerHTML += "<p><i> - Updated</i></p>"; 
    card.style.backgroundColor = "greenyellow";
});


// Task 3 - Implemented Dynamic Inventory List
const inventoryList = document.getElementById("inventoryList");

function addInventoryItem(product) {
    let newLi = document.createElement("li");
    newLi.setAttribute("class", "product-item");
    newLi.setAttribute("data-product", product);
    newLi.textContent = product;

    newLi.addEventListener("click", () => removeInventoryItem(newLi));
    inventoryList.appendChild(newLi);
}

function removeInventoryItem(item) {
    inventoryList.removeChild(item);
}


const productForm = document.getElementById("productForm");
const error = document.getElementById("error");

productForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let productName = document.getElementById("productName").value.trim();
    
    if (productName === '') {
        error.textContent = "Product name is required";
    } else {
        error.textContent = "";
        addInventoryItem(productName);
    }
});

// Task 4 - Demonstrated Event Bubbling in Customer Section

const customerSection = document.getElementById("customerSection");

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