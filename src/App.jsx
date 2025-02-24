import HeroSection from "./components/HeroSection";
import HowitWorks from "./components/HowitWorks";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main className="text-sm text-neutral-300 antialiased">
      <Navbar />
      <HeroSection />
      <HowitWorks />
    </main>
  );
}

export default App;
