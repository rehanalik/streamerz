import HeroSection from "./components/HeroSection";
import HowitWorks from "./components/HowitWorks";
import Navbar from "./components/Navbar";
import KeyFeatures from "./components/KeyFeatures";

function App() {
  return (
    <main className="text-sm text-neutral-300 antialiased">
      <Navbar />
      <HeroSection />
      <HowitWorks />
      <KeyFeatures />
    </main>
  );
}

export default App;
