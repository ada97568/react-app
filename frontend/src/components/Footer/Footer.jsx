import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
            magnam ipsam! Quam accusamus assumenda perspiciatis incidunt enim
            voluptas dolor non perferendis dolore nesciunt quaerat ad, ex omnis
            officia repudiandae beatae quod quis eius voluptates aspernatur
            ullam? Vel similique quidem atque sit, ducimus, ipsum explicabo
            reprehenderit, possimus dignissimos corporis nostrum animi.
          </p>
          <div className="footer-socials-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Private Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+33 809 10 10</li>
            <li>contact@info.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 @ Tomato.com - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
