// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ContactForm from "./components/ContactForm";
import Services from "./components/Services";
import Reviews from "./components/Reviews";
import ReviewList from "./components/ReviewList";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Services />
      <ReviewList />
      <ContactForm />
    </div>
  );
}

export default App;
