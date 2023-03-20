import { motion } from "framer-motion";
import "../css/contact.css";
import { sendEmail } from "../script/handleEmail.js";
import { firstCont, secondCont, textField } from "../variants";
import video from "../videos/video1.mp4";
import BackgroundVideo from "./BackgroundVideo";

export default function Contact() {
  return (
    <>
      <div className="contact-form" id="Contact">
        <BackgroundVideo className="bgvdo-contact" source={video} />
        <motion.div
          variants={firstCont}
          initial="hidden"
          whileInView="show"
          className="c-left"
        >
          <div className="awesome">
            <span>Get in touch</span>
            <br />
            <span>Contact me!</span>
          </div>
        </motion.div>

        <motion.div
          className="c-right"
          variants={secondCont}
          initial="hidden"
          whileInView="show"
        >
          <div className="form form1">
            <motion.input
              variants={textField}
              initial="firstState"
              whileHover="activeState"
              type="text"
              id="name"
              className="user"
              placeholder="Name"
            />
            <motion.input
              variants={textField}
              initial="firstState"
              whileHover="activeState"
              type="text"
              id="email"
              className="user"
              placeholder="E-mail"
            />
            <motion.textarea
              variants={textField}
              initial="firstState"
              whileHover="activeState"
              id="message"
              className="user"
              placeholder="Message"
              cols="9"
              rows="2"
            ></motion.textarea>
            <button value="Send" className="button" onClick={sendEmail}>
              Send
            </button>
            <div id="result-email"></div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
