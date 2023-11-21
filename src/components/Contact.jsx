import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  // U-U18xpLuuvRET9rt
  // template_is9r4ki
  // Service ID:service_507yflg
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_507yflg",
        "template_is9r4ki",
        {
          from_name: form.name,
          to_name: "Alaa",
          from_email: form.email,
          to_email: "alaa.alsharif@lau.edu",
          message: form.message,
        },
        "U-U18xpLuuvRET9rt"
      )
      .then(
        () => {
          setLoading(False);
          alert("Thank You. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(False);

          console.log(error);
          alert("Something Went Wrong");
        }
      );
  };
  return (
    <div className="contact-wrapper">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="input-wrapper"
      >
        <p className="subTitle">Get in touch</p>
        <h3 className="title">Contact</h3>
        <form action="" ref={formRef} onSubmit={handleSubmit} className="form">
          <label>
            <span>Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
            />
          </label>
          <label>
            <span>Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your Email?"
            />
          </label>
          <label>
            <span>Your message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
            />
          </label>

          <button className="SubmitBtn" type="submit">
            {loading ? "sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        className="Globe-container"
        variants={slideIn("right", "tween", 0.2, 1)}
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
