# ShopVerse 👖👕

ShopVerse is a e-commerce web application for browsing and purchasing fashion products.
The project is built with React and TypeScript, with a focus on reusable components, clean state management, and a smooth shopping experience.

## Preview

![home preview](/public/project-screenshots/home-preview.png)
![home product details](/public/project-screenshots/details-preview.png)
![home cart preview](/public/project-screenshots/cart-preview.png)

#### [View ShopVerse Live Demo](https://shopverse-bice-six.vercel.app/)

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

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/01mehran/shopverse.git
cd shopverse
```

### 2. Install depenencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

> The application will be available at the local development URL provided by Vite.

## Author

**Mehran**

Frontend Developer focused on building user-friendly web applications.

- GitHub: [01mehran](https://github.com/01mehran)
- LinkedIn: [mehrandev7](https://www.linkedin.com/in/mehrandev7)
