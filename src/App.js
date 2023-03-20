import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Game from "./components/game";
import NavBar from "./components/navbar";
import "./styles.css";

export default function App() {
  return (
    <div className="body-container">
      <NavBar />
      <Game />
      <Contact />
      <About />
      <Footer />
    </div>
  );
}
