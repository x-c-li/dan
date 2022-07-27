// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ContactForm from "./components/ContactForm";
import Services from "./components/Services";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      Dan's site in test
        <Services/>
      <ContactForm />
    </div>
  );
}

export default App;
