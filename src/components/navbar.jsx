import "../css/index.css";
import { motion } from "framer-motion";
import { letter, logo } from "../variants/index";
import { Link } from "react-scroll";

export default function NavBar() {
  const gameName = "LOVE CALCULATOR";
  return (
    <>
      <div className="header-container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <motion.a
            className="navbar-brand"
            href="#"
            variants={logo}
            initial="hidden"
            animate="visible"
          >
            {gameName.split("").map((char, index) => {
              return (
                <motion.span key={char + "-" + index} variants={letter}>
                  {char}
                </motion.span>
              );
            })}
          </motion.a>
          <div>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item colorLink">
                <Link
                  className="nav-link"
                  activeClass="active"
                  to="Home"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={300}
                >
                  Home <span className="sr-only"></span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="Contact"
                  spy={true}
                  smooth={true}
                  offset={-90}
                  duration={300}
                >
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="About"
                  spy={true}
                  smooth={true}
                  offset={-250}
                  duration={300}
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}
