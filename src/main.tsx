import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { AppProvider } from "./context/AppContext.tsx";
import { GoogleOAuthProvider } from "@react-oauth/google";

export const server = "http://localhost:5000";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppProvider>
    <GoogleOAuthProvider clientId="934086535136-0dv1jhdk7b7jole2u8msaj1h406a0oo1.apps.googleusercontent.com">
        <App />
      </GoogleOAuthProvider>
    </AppProvider>
  </StrictMode>,
);
