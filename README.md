# ShopVerse 👖👕

ShopVerse is a modern e-commerce web application for browsing and purchasing fashion products.

The project is built with React and TypeScript, with a focus on reusable components, clean state management, and a smooth shopping experience.

## Features

- Browse products
- View detailed product information
- Select product colors and sizes
- Add products to the cart
- Manage cart item quantities
- Support multiple product variants
- Remove individual cart items
- Clear the entire cart
- Persistent cart state after page refresh
- Dynamic cart subtotal and total
- Newsletter email subscription
- Responsive design
- Loading skeletons for asynchronous data
- Breadcrumb navigation

## Tech Stack

- React
- TypeScript
- Tailwind CSS
- Zustand
- TanStack React Query
- Supabase
- Axios
- Framer Motion
- React Router
- Vite

## Project Structure

```text
src/
├── assets/
├── features/
├── layout/
├── pages/
├── stores/
├── servives/
├── shared/
├── lib/
├── App.tsx
└── main.tsx
```

## State Management

- Zustand is used to manage client-side state such as:
- Cart items
  Product selections
  UI state
- The cart state is persisted so cart items remain available after refreshing the page.

## Data Fetching

- TanStack React Query is used for:
- Fetching product data
- Managing loading and error states
- Caching server data
- Synchronizing data with Supabase
