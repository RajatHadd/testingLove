import "../css/index.css";
import "../css/home.css";
import giphy from "../videos/giphy.gif";
import { submitEvent } from "../script/script.js";
import { motion } from "framer-motion";
import { firstCont, secondCont, heartGify, textField } from "../variants";
import { useState } from "react";
import { Link } from "react-scroll";
import CountUp from "react-countup";
import BackgroundVideo from "./BackgroundVideo";
import videoHome from "../videos/love.mp4";

export default function Game() {
  //@desc putting restriction on the text field
  const [state, setState] = useState(false);
  const [percentageOfLove, setPerentageOfLove] = useState(0);

  function restrictionTf(e) {
    var y = e.which || e.keyCode;
    if ((y > 96 && y < 123) || (y > 64 && y < 91)) {
      setState(false);
    } else {
      e.preventDefault();
      setState(true);
    }
  }

  function tfName() {
    let firstName = document.getElementById("nameOne");
    let resultName1 = document.getElementById("resultName1");
    let secondName = document.getElementById("nameTwo");
    let resultName2 = document.getElementById("resultName2");

    if (firstName.value === "" && secondName.value === "") {
      resultName1.innerHTML = "First name is empty!";
      resultName2.innerHTML = "Second name is empty";
    } else if (firstName.value !== "" && secondName.value === "") {
      resultName1.innerHTML = "";
      resultName2.innerHTML = "Second name is empty";
    } else if (firstName.value === "" && secondName.value !== "") {
      resultName1.innerHTML = "First name is empty";
      resultName2.innerHTML = "";
    } else if (firstName.value !== "" && secondName.value !== "") {
      resultName1.innerHTML = "";
      resultName2.innerHTML = "";
      return [firstName.value, secondName.value];
    }
  }

  function test() {
    let names = tfName();
    if (names) {
      if (names[0] !== "" && names[1] !== "") {
        submitEvent(names[0], names[1]);
        setPerentageOfLove(submitEvent(names[0], names[1]));
      }
    }
  }
  //variants for the framer motion

  return (
    <>
      <div className="app-container" id="Home">
        <BackgroundVideo source={videoHome} />
        <motion.div
          variants={firstCont}
          initial="hidden"
          whileInView="show"
          className="game-container"
        >
          <div>
            <label htmlFor="nameOne">Name 1</label>
            <br />
            <motion.input
              variants={textField}
              initial={state ? "" : "firstState"}
              whileHover="activeState"
              animate={state ? "bounceState" : ""}
              type="text"
              id="nameOne"
              name="nameOne"
              placeholder="Enter name.."
              onKeyPress={restrictionTf}
            />
            <div id="resultName1"></div>
          </div>
          <div>
            <label htmlFor="nameTwo">Name 2</label>
            <br />
            <motion.input
              variants={textField}
              initial={state ? "" : "firstState"}
              whileHover="activeState"
              animate={state ? "bounceState" : ""}
              type="text"
              id="nameTwo"
              placeholder="Enter name.."
              onKeyPress={restrictionTf}
            />
            <div id="resultName2"></div>
          </div>

          <Link
            activeClass="active"
            to="result-container"
            spy={true}
            smooth={true}
            offset={-70}
            duration={300}
          >
            <button id="submitButton" onClick={test} className="button">
              Calculate Love percentage
            </button>
          </Link>

          <br />
        </motion.div>

        <motion.div
          variants={heartGify}
          initial="hidden"
          whileInView="show"
          className="heart-container"
        >
          <img id="heart-gify" src={giphy} alt="Beating Heart" />
        </motion.div>

        <motion.div
          variants={secondCont}
          initial="hidden"
          whileInView="show"
          className="result-container"
          id="Result-container"
        >
          <div className="parent-container">
            <div id="child-container"></div>
          </div>

          <div id="result-percentage">
            <motion.div
              initial={{ x: 0, scale: 0 }}
              whileInView={{
                scale: [1, 1.3, 1.4, 1.3, 1]
              }}
              transition={{ type: "bounce", duration: 3 }}
            >
              <CountUp
                whileInView
                start={0}
                end={percentageOfLove}
                duration={3}
              />
              %
            </motion.div>
          </div>

          <div id="love-message">Try you love!</div>
        </motion.div>
      </div>
    </>
  );
}
