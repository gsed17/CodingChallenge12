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
