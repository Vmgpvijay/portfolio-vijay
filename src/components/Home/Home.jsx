import React from "react";
import "./Home.css";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

const Home = () => {
  return (
    <section className="home d-flex align-items-center justify-content-center text-center">
      <div className="container d-flex flex-column align-items-center gap-3 py-5">
        <motion.h1
          className="display-4 fw-bold text-glow"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I’m <span className="name">Vijay V</span>
        </motion.h1>

        <motion.h3
          className="fw-semibold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Frontend Developer | React | JavaScript
        </motion.h3>

        <motion.p
          className="lead text-center w-75 mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          I craft clean, responsive, and user-focused web experiences using{" "}
          <strong>React</strong>, <strong>JavaScript</strong>, and{" "}
          <strong>Bootstrap</strong> with modern design practices.
        </motion.p>

        <motion.div
          className="d-flex gap-3 mt-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <button className="btn btn-custom">My Resume</button>
          <button className="btn btn-outline-custom">My Works</button>
        </motion.div>

        <motion.div
          className="d-flex justify-content-center gap-3 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
        >
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn icon-btn icon-linkedin"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn icon-btn icon-github"
          >
            <FaGithub />
          </a>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="btn icon-btn icon-whatsapp"
          >
            <FaWhatsapp />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
