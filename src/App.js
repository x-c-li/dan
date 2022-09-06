// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ContactForm from "./components/ContactForm";
import Services from "./components/Services";
import ReviewList from "./components/ReviewList";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="notNav-components">
        <Services />
        <ReviewList />
        <ContactForm />
      </div>
    </div>
  );
}

export default App;
