import React from "react";
import styles from "./card.module.css";

function Card(props) {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.section}>
          <blockquote>
            <p className={styles.para}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              facilis magni ab alias nesciunt commodi porro ex autem, modi
              sapiente sint odio, esse provident exercitationem, excepturi
              asperiores quo doloremque magnam.
            </p>
          </blockquote>
          <div className={styles.other}>
            <img
              className={styles.round}
              src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
              alt=""
            />
            <div className={styles.name}>
              <p>Gladis lennon</p>
              <p>Head of SEO</p>
            </div>
          </div>
        </div>
        <div className={styles.section}>
          <blockquote>
            <p className={styles.para}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              facilis magni ab alias nesciunt commodi porro ex autem, modi
              sapiente sint odio, esse provident exercitationem, excepturi
              asperiores quo doloremque magnam.
            </p>
          </blockquote>
          <div className={styles.other}>
            <img
              className={styles.round}
              src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
              alt=""
            />
            <div className={styles.name}>
              <p className={styles.namee}>Gladis lennon</p>
              <p>Head of SEO</p>
            </div>
          </div>
        </div>
        <div className={styles.section}>
          <blockquote>
            <p className={styles.para}>
              Lorem ipsum dolor esse provident exercitationem, excepturi
              asperiores quo doloremque magnam.
            </p>
          </blockquote>
          <div className={styles.other}>
            <img
              className={styles.round}
              src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
              alt=""
            />
            <div className={styles.name}>
              <p className={styles.namee}>Gladis lennon</p>
              <p>Head of SEO</p>
            </div>
          </div>
        </div>
        <div className={styles.section}>
          <blockquote>
            <p className={styles.para}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestias, magnam, in mollitia et soluta possimus, quas corporis
              nisi repellat nulla iure. Dolorem in vel doloremque. Quibusdam
              praesentium explicabo fugiat asperiores, laudantium cumque ut
              aliquam fuga harum tempora illo minima cum similique dolore maxime
              ducimus ea quasi nostrum eaque ullam omnis?
            </p>
          </blockquote>
          <div className={styles.other}>
            <img
              className={styles.round}
              src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
              alt=""
            />
            <div className={styles.name}>
              <p className={styles.namee}>Gladis lennon</p>
              <p>Head of SEO</p>
            </div>
          </div>
        </div>
        <div className={styles.section}>
          <blockquote>
            <p className={styles.para}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              facilis magni ab alias nesciunt commodi porro ex autem, modi
              sapiente sint odio, esse provident exercitationem, excepturi
              asperiores quo doloremque magnam.
            </p>
          </blockquote>
          <div className={styles.other}>
            <img
              className={styles.round}
              src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
              alt=""
            />
            <div className={styles.name}>
              <p className={styles.namee}>Gladis lennon</p>
              <p>Head of SEO</p>
            </div>
          </div>
        </div>
        <div className={styles.section}>
          <blockquote>
            <p className={styles.para}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              facilis magni ab alias nesciunt commodi porro ex autem, modi
              sapiente sint odio.
            </p>
          </blockquote>
          <div className={styles.other}>
            <img
              className={styles.round}
              src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
              alt=""
            />
            <div className={styles.name}>
              <p className={styles.namee}>Gladis lennon</p>
              <p>Head of SEO</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
