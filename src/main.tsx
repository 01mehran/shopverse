// React;
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Components;
import App from "./App.tsx";

//Global Css;
import "./index.css";

// Libraries;
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <StrictMode>
      <App />
    </StrictMode>
  </QueryClientProvider>,
);
