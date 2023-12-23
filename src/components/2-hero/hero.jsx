import React from "react";
import "./hero.css";
import Lottie from "lottie-react";
import devAnimation from "../../../public/Animation/dev.json";
import { useRef } from "react";
import { motion } from "framer-motion";
const hero = () => {
  const lottieRef = useRef();

  return (
    <section className="hero flex">
      <div className="left-section ">
        <div className="parent-avatar flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 6, type: "spring", stiffness: 100 }}
            className="avatar"
            src="../../../public/logo512-modified.png"
            alt=""
          />
          <div className="icon-verified"></div>
        </div>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="title"
        >
          My Name is Karam Hwary and i m Front end devolper.
        </motion.h1>
        <p className="sub-title">
          I get asked a lot about the things I use to build software, stay
          productive, or buy to fool myself into thinking I’m being productive
          when I’m really just procrastinating. Here’s a big list of all of my
          favorite stuff.
        </p>
        <div className="all-icons flex">
          <div className="icon-twitter"></div>
          <div className="icon-instagram"></div>
          <div className="icon-github"></div>
          <div className="icon-linkedin"></div>
        </div>
      </div>
      <div className="right-section animation ">
        <Lottie
          className="dev"
          lottieRef={lottieRef}
          onLoadedImages={() => {
            // https://lottiereact.com/
            lottieRef.current.setSpeed(0.5);
          }}
          style={{}}
          animationData={devAnimation}
        />
      </div>
    </section>
  );
};
export default hero;
