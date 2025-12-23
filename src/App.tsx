import "./App.css";
import { Button } from "@/components/button";

function App() {
  const setTheme = (t: "light" | "dark") => {
    document.documentElement.setAttribute("data-theme", t);
  };

  return (
    <div className="min-h-screen bg-bg text-text p-6">
      <Button onClick={() => setTheme("light")}>Light</Button>
      <Button variant="outline" onClick={() => setTheme("dark")}>
        Dark
      </Button>
      <Button variant="text">Text</Button>
      <Button icon size="lg">
        +
      </Button>
    </div>
  );
}

export default App;
