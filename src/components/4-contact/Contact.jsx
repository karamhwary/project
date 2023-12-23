import React from "react";
import "./Contact.css";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import doneAnimation from "../../../public/Animation/done.json";
import emailAnimation from "../../../public/Animation/contact.json";
const Contact = () => {
  const [state, handleSubmit] = useForm("xbjvnzkd");

  return (
    <section className="contact-us">
      <div className="title">
        <h1>
          <span className="icon-envelope"></span> Contact Us
        </h1>
      </div>
      <p className="sub-title">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
        aspernatur fugiat alias nihil? Harum, neque.
      </p>
      <div style={{ justifyContent: "space-between" }} className="flex">
        <form onSubmit={handleSubmit} className="">
          <div className="flex">
            <label htmlFor="email">Email Address</label>
            <input
              autoComplete="off"
              required
              type="email"
              name="email"
              id="email"
            />
          </div>
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <div className="flex" style={{ marginTop: "24px" }}>
            <label htmlFor="message">Your message</label>
            <textarea required name="message" id="message"></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button type="submit" disabled={state.submitting} className="submit">
            {state.submitting ? "submitting..." : "submit"}
          </button>
          {state.succeeded && (
            <h1
              className="flex"
              style={{ fontSize: "16px", marginTop: "1.7rem" }}
            >
              <Lottie
                loop={false}
                style={{ height: 44 }}
                animationData={doneAnimation}
              />
              Thanks for using my website
            </h1>
          )}
        </form>

        <div className=" animation felx">
          <Lottie
            className="contact-animation"
            style={{
              height: 300,
            }}
            animationData={emailAnimation}
          />
        </div>
      </div>
    </section>
  );
};
export default Contact;
