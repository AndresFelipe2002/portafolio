import { useEffect } from "react";
import { HomePage } from "./pages/home/HomePage";
import { scrollSpy } from "./helpers/scrollSpy";

function App() {
  useEffect(() => {
    scrollSpy();
  }, []);

  return <HomePage />;
}

export default App;
