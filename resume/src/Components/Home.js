import React, { useRef } from "react";
import "./Home.css";
import {IoLogoGithub } from "react-icons/io";
import { Link } from "react-router-dom";
import Header from "./Header";
import creative from "../assets/creative.png";
import minimalist from "../assets/minimalist.png";
import professional from "../assets/professional.png";

function Home() {
  const scollToRef = useRef();
  const scrollFunc = () => {
    scollToRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Header handleclick={scrollFunc} />

      <div className="heading">RESUMINATOR</div>
      <div className="home-main">
        <div className="home-head">
        CREATE YOUR OWN RESUME IN JUST FEW SECONDS
        </div>
        <div>
        SCROLL DOWN TO GET STARTED
        </div>
        <div className="img-home">
          <img src={creative} alt="" />
          <img src={minimalist} alt="" />
          <img src={professional} alt="" />
        </div>
        <div className="steps">
          <div>Follow the steps</div>
          <div>
            <div className="step-head">Step 1:</div>
            <div className="step-subhead">Input all your details</div>
            <div className="step-subhead">Select the template you want</div>
            <div className="step-head">:Step 2</div>
            <div className="step-head">Step 3:</div>
            <div className="step-subhead">Your resume is ready to download</div>
            <div className="step-subhead">Click on download</div>
            <div className="step-head">:Step 4</div>
          </div>
        </div>
        <div className="started">
          <div className="home-subheading">Are you ready?</div>
          <Link to={"/resumebuild"} className="link">
            <button className="started-btn">Get started</button>
          </Link>
        </div>
      </div>
      <div className="contact" ref={scollToRef}>
        <div>Get in Touch</div>
        <div>
          <a
            href="https://github.com/sushanthtej"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            <IoLogoGithub className="social-icon" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Home;