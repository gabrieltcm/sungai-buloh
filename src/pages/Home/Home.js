import React, { useRef } from "react";
import styles from "./Home.module.scss";

//Component
import Carousel from "../Carousel/Carousel";

//React Reveal
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";

//React Player
import ReactPlayer from "react-player";

export default function Home() {
  const playerRef = useRef(null);
  const VIDEO_PATH = "https://youtu.be/gMDv0YKDc1c";
  return (
    <>
      <Flip top>
        <div className={styles.containerTitle}>
          <h1 style={{ fontWeight: 400 }}>Welcome To Sungai Buloh</h1>
          <div className={styles.headerLineContainer}>
            <hr className={styles.headerLine} />
          </div>
        </div>
      </Flip>
      <Carousel />
      <div className={styles.container}>
        <p className={styles.smallHeader}>Welcome to our website!</p>

        <p className={styles.bigHeader}>
          Sungai Buloh the green lungs of Selangor
        </p>
        {/* Google Link */}
        <div className={styles.longParagraph}>
          <a href="https://docs.google.com/document/d/1BuYS_AtJqwEIVv8ozMXjOkhtYhcLKDqzKq0IOr1C2uA/edit">
            Our Tourism Destination Plan
          </a>
        </div>

        <div className={styles.longParagraph}>
          <p>
            Sungai Buloh is a city that is located at the Petaling Jaya Region
            within the northern quarter, it is also known for its greenery and
            being a hotspot for gardening enthusiasts
          </p>
          <p>
            Given its name is literally translated to bamboo river it's also
            known for hiking and trails. Sungai Buloh is developing ecotourism
            because it seeks to preserve the environment and tries to minimize
            the effects that traditional tourism has on the environment
          </p>
          <p>
            It also gives visitors a chance to indulge and experience the
            tropical rainforest and be introduced to the wonders of nature. On
            top of having nice trails it has markets for fresh organic fruits
            and vegetables as well as plant nurseries making it a hub for plant
            lovers and collectors
          </p>
        </div>
      </div>
      <div className={styles.container}>
        <p className={styles.bigHeader}>
          The people who are involve to run our ecotourism project
        </p>

        <div className={styles.longParagraph}>
          <p>
            1- Safia as director of project, she is the one who is managing this
            project for developing and implementing the policies and strategies.
          </p>
          <p>
            2- Murtaza and Ruqaya as Marketing and Communication managers. They
            are responsible for developing and implementing communication and
            marketing strategies to promote the tourism destination and services
            for tourists.
          </p>
          <p>
            3- Jasmine as Environmental educator, she is responsible to develop
            and deliver educational programs for locals and tourists and educate
            them about importance of sustainable tourism.
          </p>
          <p>
            4- Nashid as Tour guide, she responsible to give tour of destination
            to visitors.
          </p>
        </div>
      </div>

      {/* Video */}
      <Fade left>
        <ReactPlayer ref={playerRef} url={VIDEO_PATH} controls={true} />
      </Fade>
    </>
  );
}
