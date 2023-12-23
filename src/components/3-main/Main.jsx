import React from "react";
import "./Main.css";
import { useState } from "react";
import { myProjects } from "./myProject";
import { AnimatePresence, motion } from "framer-motion";
const Main = () => {
  const [currentActive, setcurrentActive] = useState("all");
  const [arr, setArr] = useState(myProjects);
  const handleclick = (buttoncategory) => {
    setcurrentActive(buttoncategory);
    const newArr = myProjects.filter((item) => {
      const zzz = item.category.find((myItem) => {
        return myItem === buttoncategory;
      });
      return zzz === buttoncategory;
    });
    setArr(newArr);
  };
  return (
    <main className="flex">
      <section className="flex left-section">
        <button
          onClick={() => {
            setcurrentActive("all");
            const newArr = myProjects.filter(() => {
              return myProjects;
            });
            setArr(newArr);
          }}
          className={currentActive === "all" ? "active" : null}
        >
          All Projects
        </button>
        <button
          onClick={() => {
            handleclick("css");
          }}
          className={currentActive === "css" ? "active" : null}
        >
          Html & Css
        </button>
        <button
          onClick={() => {
            handleclick("java");
          }}
          className={currentActive === "java" ? "active" : null}
        >
          javascript
        </button>
        <button
          onClick={() => {
            handleclick("node");
          }}
          className={currentActive === "node" ? "active" : null}
        >
          react & MUI
        </button>
        <button
          onClick={() => {
            handleclick("react");
          }}
          className={currentActive === "react" ? "active" : null}
        >
          react & Express
        </button>
      </section>
      <section className=" flex right-section">
        <AnimatePresence>
          {arr.map((item) => {
            return (
              <motion.article
                layout
                initial={{ transform: "scale(0)" }}
                animate={{ transform: "scale(1)" }}
                transition={{ type: "spring", damping: 8, stiffness: 50 }}
                key={item.imgpath}
                className="card "
              >
                <img width={214} src={item.imgpath} alt="" />
                <div style={{ width: "214px" }} className=" box">
                  <h1 className="title">{item.projectTitle}</h1>
                  <p className="sub-title">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ex, expedita.
                  </p>
                  <div style={{ gap: "11px" }} className="flex icons">
                    <div className="flex">
                      <div className="icon-link"></div>
                      <div className="icon-github"></div>
                    </div>
                    <a className="link flex" href="ddd">
                      more
                      <span
                        style={{ alignSelf: "end" }}
                        className="icon-arrow-right "
                      ></span>
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </section>
    </main>
  );
};
export default Main;
