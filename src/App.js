
import "./App.css";
import Footer from "./components/Footer";
import PizzaTypes from "./components/PizzaTypes";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About title="Pizza" />
      <PizzaTypes title="Pizza" />
      <Footer />
    </>
  );
}

export default App;
