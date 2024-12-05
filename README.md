# React Store - Products and Cart Application

This is a simple e-commerce application built with **ReactJS** and **React Router**, showcasing a product listing page, a cart page, and basic cart functionalities. The app uses the **Fake Store API** to fetch product data and displays prices in Indian Rupees (₹).

---

## Features

1. **Product Listing**  
   - Displays a list of products fetched from the Fake Store API.
   - Each product displays an image, title, description, and price.

2. **Responsive Design**  
   - The layout adjusts seamlessly to different screen sizes using **Tailwind CSS**.

3. **Add to Cart**  
   - Users can add items to the cart from the product listing.

4. **Cart Functionality**  
   - Displays items added to the cart along with:
     - Product name and image.
     - Price.
     - Quantity of each item.
     - Total price per item and overall bill (with a 10% discount applied).
   - Allows users to:
     - Increase or decrease the quantity of items.
     - Remove items from the cart.
   - Automatically updates the total price dynamically.

5. **Routing**  
   - Navigation between the Product Page and Cart Page using **React Router**.

---

## Tech Stack

- **ReactJS**: Frontend framework for building the UI.
- **React Router**: For managing navigation between pages.
- **Tailwind CSS**: For responsive and modern styling.
- **JavaScript (ES6+)**: Core logic and functionality.
- **Fake Store API**: Provides product data.

---

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/react-store.git
   cd react-store
