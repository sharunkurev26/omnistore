\# OmniStore



A React + Vite e-commerce storefront built with reusable components (`Header`, `ProductCard`, and `ProductGrid`), product data in `src/data/products.js`, live search filtering, a cart counter, and INR (`₹`) price formatting.



\## Project Structure



\- `src/data/products.js` — Sample product catalog (`id`, `name`, `category`, `price`, `rating`, `image`)

\- `src/components/Header.jsx` — Store title, search bar, and cart count

\- `src/components/ProductCard.jsx` — Individual product card with INR price and Add to Cart action

\- `src/components/ProductGrid.jsx` — Responsive CSS Grid rendering `ProductCard` items

\- `src/App.jsx` — Main application state for search filtering and cart count



\## Run Locally



```bash

npm install

npm run dev

