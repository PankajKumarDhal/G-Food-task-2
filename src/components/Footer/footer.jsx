import React from "react";
import styles from "./footer.module.css";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { IoIosBasketball } from "react-icons/io";
import { FaHamburger } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.logo}>
          <p>
          
            <i className={styles.fasolid }><FaHamburger /></i>
            <i className={styles.fasolid }>logoipsum</i>
          </p>
        </div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
          consequuntur amet culpa cum itaque neque.
        </p>
        <ul>
          <li>About</li>
          <li>Careers</li>
          <li>History</li>
          <li>Services</li>
          <li>Projects</li>
          <li>Blog</li>
        </ul>
        <div class={styles.icons}>
        
          <i class=""><FaFacebookSquare size={30}/></i>
          <i class="fa-brands fa-instagram"><IoLogoInstagram size={30}/></i>
          <i class="fa-brands fa-twitter"><FaXTwitter size={30}/></i>
          <i class="fa-brands fa-github"><IoLogoGithub size={30}/></i>
          <i class="fa-solid fa-basketball"><IoIosBasketball size={30}/></i>
        </div>
      </div>
    </>
  );
};

export default Footer;
