import "./App.css";
import { Button } from "@/components/button";

function App() {
  const setTheme = (t: "light" | "dark") => {
    document.documentElement.setAttribute("data-theme", t);
  };

  return (
    <div className="min-h-screen bg-bg text-text p-6">
      <Button onClick={() => setTheme("light")}>Light</Button>
      <Button variant="secondary" onClick={() => setTheme("dark")}>
        Dark
      </Button>
      <Button variant="ghost">Ghost</Button>
      <Button size="icon">+</Button>
    </div>
  );
}

export default App;
