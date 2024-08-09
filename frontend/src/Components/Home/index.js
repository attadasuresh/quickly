import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { FaHome } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa6";
import { FaDatabase } from "react-icons/fa6";
import { FaBook } from "react-icons/fa";
import { FaToolbox } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { FaShare, FaChartBar, FaPiggyBank, FaPoll } from "react-icons/fa";
import "./index.css";
const Home = () => {
  return (
    <>
      <div className="containerhome">
        <div className="home-content">
          <h1 className="home-main-heading">
            <span className="home-span">QUICKLY</span>SERVICES
          </h1>
          <p className="home-main-para">
            In today's fast-paced world, maintaining productivity can be tough.
            That's where Quikli steps in—a revolutionary AI-powered notetaking
            tool crafted to elevate your efficiency. With Quikli, capturing
            ideas and organizing tasks becomes effortless, helping you stay on
            top of your game. Whether you're working on projects, brainstorming,
            or managing daily tasks, Quikli ensures you're always ahead. Embrace
            smarter, faster notetaking with Quikli and unlock your full
            potential.
          </p>
          <input
            type="text"
            placeholder="Enter Your Email"
            className="home-input"
            required
          />
          <button className="home-button">Submit</button>
        </div>
        <div>
          <img
            className="main-image"
            src="https://www.nevinainfotech.com/wp-content/uploads/2023/11/Ill@4x-8.png"
            alt="homemainimage"
          />
        </div>
      </div>
      <h1 className="home-head2">
        UNLOCK YOUR PRODUCTIVITY WITH{" "}
        <span className="home-span-heading">QUICKLY</span> !
      </h1>
      <div className="home-main-card-containter">
        <div className="continuous-horizontal-scroll-container">
          <div className="content">
            <div className="content-item">
              <div className="home-card-container">
                <div className="home-icons">
                  <FaHome className="icon" />
                  <h1 className="home-head-recruting">AI-Powered Assistance</h1>
                </div>
                <p className="home-para-recruting">
                  AI-powered assistance provides intelligent support, enhancing
                  efficiency and decision-making across various tasks
                </p>
              </div>
            </div>
            <div className="content-item">
              <div className="home-card-container">
                <div className="home-icons">
                  <FaUserTie className="icon" />
                  <h1 className="home-head-recruting">Smart Search</h1>
                </div>
                <p className="home-para-recruting">
                  An intelligent, AI-driven tool that quickly finds the
                  information you need with precision and ease.
                </p>
              </div>
            </div>
            <div className="content-item">
              <div className="home-card-container">
                <div className="home-icons">
                  <FaDatabase className="icon" />
                  <h1 className="home-head-recruting">Audio Transcription</h1>
                </div>
                <p className="home-para-recruting">
                  Transform your spoken ideas into written text effortlessly.
                  Record and transcribe conversations or notes on-the-go. The
                  teaser gives you a taste, but the full feature will be even
                  more robust.
                </p>
              </div>
            </div>
            <div className="content-item">
              <div className="home-card-container">
                <div className="home-icons">
                  <FaBook className="icon" />
                  <h1 className="home-head-recruting">Easy Image Insertion</h1>
                </div>

                <p className="home-para-recruting">
                  Add images directly to your notes without leaving the app.
                  Perfect for adding visuals to your projects or notes with a
                  single click.
                </p>
              </div>
            </div>
            <div className="content-item">
              <div className="home-card-container">
                <div className="home-icons">
                  <FaToolbox className="icon" />
                  <h1 className="home-head-recruting">To-Dos</h1>
                </div>
                <p className="home-para-recruting">
                  Keep track of your tasks seamlessly. Our intuitive to-do
                  feature ensures you stay on top of your goals and deadlines.
                </p>
              </div>
            </div>
            <div className="content-item">
              <div className="home-card-container">
                <div className="home-icons">
                  <FaUsers className="icon" />
                  <h1 className="home-head-recruting">Pricing</h1>
                </div>
                <p className="home-para-recruting">
                  Start with our freemium plan, which offers essential features
                  for free, and explore advanced options with our paid plans.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="app-main-container">
        <div className="home-section2-conatiner">
          <h1 className="home-section2-heading">
            Why The <span className="home-section2-span">Quickly?</span>
          </h1>
          <p className="home-section2-description">
            In today’s fast-paced world, staying productive can be a challenge
          </p>
        </div>

        <div className="home-section3-conatiner">
          <div className="home-section3-sub-conatiner">
            <img
              className="home-section3-sub-image"
              src="https://media.licdn.com/dms/image/C4E12AQED8k508HxsKg/article-cover_image-shrink_600_2000/0/1596110191636?e=2147483647&v=beta&t=RYZAnCIl5CZbTqbksS-OV83rECxbEc6kjp6Fx7n5Y90"
              alt="info2"
            />
            <div>
              <h1 className="home-section3-sub-head">
                AI-Powered Assistance and Smart Search
              </h1>
              <p className="home-section3-sub-descreption">
                Streamline your tasks with our AI that helps generate and
                summarize content quickly. While our teaser offers a sneak peek
                with limited features, the full version will be your
                productivity powerhouse. and Find what you need in a flash. Our
                smart search redirects you to Google, Bing, and other sources.
                Currently, it’s all about efficient searching, as we prioritize
                your privacy and don’t store personal data.
              </p>
            </div>
          </div>
          <div className="home-section3-sub-conatiner">
            <img
              className="home-section3-sub-image"
              src="https://media.istockphoto.com/id/1646708089/photo/business-chatting-a-smart-ai-using-an-artificial-intelligence-chatbot-developed-with-ai-robot.webp?b=1&s=170667a&w=0&k=20&c=TTZxedl1iTCobwg6g_IvsPmg5rBUvYet7AdLlv_t6HE="
              alt="info1"
            />
            <div>
              <h1 className="home-section3-sub-head">
                Audio Transcription and Easy Image Insertion
              </h1>
              <p className="home-section3-sub-descreption">
                Transform your spoken ideas into written text effortlessly.
                Record and transcribe conversations or notes on-the-go. The
                teaser gives you a taste, but the full feature will be even more
                robust. and Add images directly to your notes without leaving
                the app. Perfect for adding visuals to your projects or notes
                with a single click.
              </p>
            </div>
          </div>
          <div className="home-section3-sub-conatiner">
            <img
              className="home-section3-sub-image"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzphcYY-soCMARVAXHbsycJ5FwRrd9XebpyA&s"
              alt="info3"
            />
            <div>
              <h1 className="home-section3-sub-head">To-Dos and Pricing</h1>
              <p className="home-section3-sub-descreption">
                Keep track of your tasks seamlessly. Our intuitive to-do feature
                ensures you stay on top of your goals and deadlines. and Start
                with our freemium plan, which offers essential features for
                free, and explore advanced options with our paid plans.
              </p>
            </div>
          </div>
        </div>

        <div className="home-section2-conatiner">
          <h1 className="home-section2-heading">Our Projects</h1>
          <p className="home-section2-description">
            Our company is involved in various projects. Here is a brief
            description
          </p>
        </div>
      </div>

      <div className="info-streams-about-us-top-container1">
        <h1 className="info-streams-about-us-head">Services</h1>
      </div>
      <div className="info-streams-about-us-top2-container">
        <div className="info-streams-about-us-top3-container">
          <p className="info-streams-about-us-top3-item">Home /</p>
          <p
            className="info-streams-about-us-top3-item"
            style={{ color: "#f0aa29" }}
          >
            Services
          </p>
        </div>
        <div className="info-streams-about-us-top3-container">
          <FaShare className="head-icon" />
          <p className="info-streams-about-us-top3-item">Share</p>
        </div>
      </div>

      <div className="service-main-container">
        <div className="service-card-container">
          <FaChartBar className="yellow-icon icon-img1" />
          <h1 className="service-heading">AI-Powered Assistance</h1>
          AI-powered assistance provides intelligent support, enhancing
          efficiency and decision-making across various tasks
          <p></p>
        </div>
        <div className="service-card-container">
          <FaChartBar className="yellow-icon icon-img1" />

          <h1 className="service-heading">Smart Search</h1>
          <p>
            {" "}
            An intelligent, AI-driven tool that quickly finds the information
            you need with precision and ease. .
          </p>
        </div>
        <div className="service-card-container">
          <FaChartBar className="yellow-icon icon-img1" />

          <h1 className="service-heading">Audio Transcription</h1>
          <p>
            {" "}
            Transform your spoken ideas into written text effortlessly. Record
            and transcribe conversations or notes on-the-go. The teaser gives
            you a taste, but the full feature will be even more robust.
          </p>
        </div>
      </div>
      <div className="service-main-container">
        <div className="service-card-container">
          <FaChartBar className="yellow-icon icon-img1" />
          <h1 className="service-heading">Easy Image Insertion</h1>
          <p>
            {" "}
            Add images directly to your notes without leaving the app. Perfect
            for adding visuals to your projects or notes with a single click.
          </p>
        </div>
        <div className="service-card-container">
          <FaPiggyBank className="yellow-icon icon-img1" />
          <h1 className="service-heading">To-Dos</h1>
          <p>
            {" "}
            Keep track of your tasks seamlessly. Our intuitive to-do feature
            ensures you stay on top of your goals and deadlines.
          </p>
        </div>
        <div className="service-card-container">
          <FaPoll className="yellow-icon icon-img1" />
          <h1 className="service-heading">Pricing</h1>
          <p>
            {" "}
            Start with our freemium plan, which offers essential features for
            free, and explore advanced options with our paid plans.
          </p>
        </div>
      </div>
      <div className="servise-second-main-container">
        <div className="service-second-container">
          <div>
            <h1 className="service-second-heading">
              Request A <span className="servise-span">Call Back</span>
            </h1>
            <p className="service-second-paragraph">
              Convenient service offered by businesses, allowing customers to
              schedule a phone conversation at their preferred time,
              facilitating personalized assistance and support.
            </p>
          </div>
          <div>
            <div className="service-inputs">
              <div>
                <input type="text" placeholder="Your Name" className="inputs" />
                <input
                  type="text"
                  placeholder="Phone Number "
                  className="inputs"
                />
              </div>
              <div>
                <input type="text" placeholder="Email" className="inputs" />
                <input type="text" placeholder="Address" className="inputs" />
              </div>
            </div>
          </div>
          <button className="service-button">Submit</button>
        </div>
        <img
          src="https://as1.ftcdn.net/v2/jpg/02/59/51/26/1000_F_259512699_5IhRTznAsimjoOahKD5e2QdzidrHbo8X.jpg"
          className="image-servise"
          alt="Service"
        />
      </div>

      <div>
        <div className="info-streams-about-footer">
          <div className="info-streams-about-footer1">
            <div className="info-streams-about-footer-sec-1">
              <img
                src="images/app-logo1.png"
                className="info-streams-about-footer-image"
                alt="App Logo"
              />
              <p className="info-streams-about-footer-sec-1-desc">
                We specialize in connecting talented IT professionals with top
                companies across the United States. Our team of experienced
                recruiters is dedicated to finding the perfect fit for both
                candidates and employers.
              </p>
              <button className="subscribe-button">Subscribe</button>
            </div>
            <div className="info-streams-about-footer-sec-2">
              <h1 className="info-streams-about-footer-sec-1-head">Services</h1>
              <ul className="info-streams-about-footer-sec-1-list">
                <li className="info-streams-about-footer-sec-1-list-item">
                  Company History
                </li>
                <li className="info-streams-about-footer-sec-1-list-item">
                  About Us
                </li>
                <li className="info-streams-about-footer-sec-1-list-item">
                  Contact Us
                </li>
                <li className="info-streams-about-footer-sec-1-list-item">
                  Services
                </li>
                <li className="info-streams-about-footer-sec-1-list-item">
                  Privacy Policy
                </li>
              </ul>
            </div>
            <div className="info-streams-about-footer-sec-2">
              <h1 className="info-streams-about-footer-sec-1-head">
                Quick Link
              </h1>
              <ul className="info-streams-about-footer-sec-1-list">
                <li className="info-streams-about-footer-sec-1-list-item">
                  Company History
                </li>
                <li className="info-streams-about-footer-sec-1-list-item">
                  About Us
                </li>
                <li className="info-streams-about-footer-sec-1-list-item">
                  Contact Us
                </li>
                <li className="info-streams-about-footer-sec-1-list-item">
                  Services
                </li>
                <li className="info-streams-about-footer-sec-1-list-item">
                  Privacy Policy
                </li>
              </ul>
            </div>
            <div className="info-streams-about-footer-sec-1">
              <h1 className="info-streams-about-footer-sec-1-head">
                News Letter
              </h1>
              <p className="info-streams-about-footer-sec-1-desc">
                Lorem ipsum dolor sit amet, consect etur adipisicing.
              </p>
              <div className="info-streams-input-container">
                <input className="info-streams-input" />
                <button className="subscribe-button1">
                  <i className="fas fa-envelope"></i>
                </button>
              </div>
              <div className="info-streams-header1-sec12">
                <div className="icon-container">
                  <i className="fab fa-facebook head-icon1"></i>
                </div>
                <div className="icon-container">
                  <i className="fab fa-twitter head-icon1"></i>
                </div>
                <div className="icon-container">
                  <i className="fab fa-instagram head-icon1"></i>
                </div>
                <div className="icon-container">
                  <i className="fab fa-linkedin head-icon1"></i>
                </div>
              </div>
            </div>
          </div>
          <p className="copy-right">
            <span className="copy-right-span">Quckly</span> Copyright © 2024 All
            Right Reserved
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
