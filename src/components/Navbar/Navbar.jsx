import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <div className={styles.img}>
          <a href="/" >
            <img src="https://flowbite.com/docs/images/logo.svg" />
            
          </a>
          <span className={styles.logo}>GeekFoods</span>

          </div>
          
          
          <div className={styles.pages}>
            <div><a href="./Home">Home</a></div>
            <div><a href="./Quote">Quote</a></div>
            <div><a href="">Resturant</a></div>
            <div><a href="">Foods</a></div>
            <div><a href="">Contact</a></div>
          </div>

          <div className={styles.click}>
            <button type="button" className="">
              Get started
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
