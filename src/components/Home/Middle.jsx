import React from "react";
import styles from "./Middle.module.css";

// import './App.css'

function Middle() {
  return (
    <>
      <div className={styles.section1}>
        <div className={styles.content}>
          <h1>
            Let us find your <br />
            <span>Forever food </span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>
          <div className={styles.buttons}>
            <button className={styles.btn}>Search Now</button>
            <button className={styles.btnn}>Know More</button>
          </div>
        </div>
      </div>

      <div className={styles.section2}>
        <div className={styles.left}>
          <img
            src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt=""
          />
        </div>
        <div className={styles.right}>
          <h1>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore,
            debitis.
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
            molestiae! Quidem est esse numquam odio deleniti, beatae, magni
            dolores provident quaerat totam eos, aperiam architecto eius quis
            quibusdam fugiat dicta.
          </p>
          <button
            className={styles.btn}
            
          >
            Get in Touch
          </button>
        </div>
      </div>
      


    </>
  );
}

export default Middle;
