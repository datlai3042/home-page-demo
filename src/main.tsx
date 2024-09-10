import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import RouterWrapper from "./router.tsx";
import SidebarProvider from "./context/SidebarContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <SidebarProvider>
        <RouterWrapper />
      </SidebarProvider>
    </BrowserRouter>
  </StrictMode>
);
