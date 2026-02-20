import "./i18n";
import PortfolioPage from "./PortfolioPage";
import "./App.css";
import { Suspense } from "react";

function App() {
  return (
    <Suspense fallback={<div>Loading translations...</div>}>
      <PortfolioPage />
    </Suspense>
  );
}

export default App;
