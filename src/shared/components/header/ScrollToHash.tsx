// React Hooks;
import { useEffect } from "react";

// React Router Dom;
import { useLocation } from "react-router-dom";

export default function ScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const element = document.querySelector(hash);

    element?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }, [hash]);

  return null;
}
