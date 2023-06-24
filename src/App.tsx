import { BrowserRouter } from "react-router-dom";

import { Navbar } from "./components";
import Router from "./pages/router";

export default function App() {
  return (
    <main className="container">
      <BrowserRouter>
        <Navbar />
        <Router />
      </BrowserRouter>
    </main>
  );
}
