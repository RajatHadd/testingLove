import "../css/about.css";
import { motion } from "framer-motion";
import { letter, sentence } from "../variants/index";

export default function About() {
  const line1 =
    "The games takes two names. Then, the two names are matched with each ";
  const line2 = "other which is then used to calculate the love percentage.";
  const line3 =
    "This game is developed as a result of the Collaboration between Bello Olaseni and Rajat Saini.";

  return (
    <>
      <div className="about" id="About">
        <div className="about-heading">
          <span>About</span>
        </div>
        <motion.div
          variants={sentence}
          initial="hidden"
          whileInView="visible"
          className="about-details"
        >
          {line1.split("").map((char, index) => {
            return (
              <motion.span key={char + "-" + index} variants={letter}>
                {char}
              </motion.span>
            );
          })}
          {line2.split("").map((char, index) => {
            return (
              <motion.span key={char + "-" + index} variants={letter}>
                {char}
              </motion.span>
            );
          })}
          <br />
          {line3.split("").map((char, index) => {
            return (
              <motion.span key={char + "-" + index} variants={letter}>
                {char}
              </motion.span>
            );
          })}
        </motion.div>
      </div>
    </>
  );
}
