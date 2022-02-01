import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
//import styles from '../styles/Home.module.css'
import "bootstrap/dist/css/bootstrap.min.css";
import bg from "/pages/images/background/alexis-stahnke-final-gif.gif";
import Draggable from "react-draggable";

const TarotScreen = () => {
  const styles = {
    imageStyle: {
      position: "fixed",
      height: "100vh",
      width: "100vw",
      overflow: "hidden",
      zIndex: -100,
    },
    titleStyle: {
      borderBottomStyle: "solid",

      borderBottomWidth: 1,
      borderBottomColor: "white",
      color: "white",
      marginTop: 100,
      fontSize: "5vw",
      textAlign: "center",
    },
    contentContainer: {
      background: "black",
      zIndex: 1,
      display: "flex-wrap",
      width: "95%",
      minHeight: "90vh",
      opacity: "75%",
      height: "fit-content",
      marginTop: 50,
      borderRadius: 25,
    },
    draggableStyle: {
      transform: "rotate(80deg)",
      background: "pink"
      
    },
  };
  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <div style={styles.imageStyle}>
        <Image
          alt="bg"
          src={bg}
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div style={styles.contentContainer}>
        <Draggable>
          <div style={styles.draggableStyle}>
            <div>
              <p style={{ color: "white" }}>Drag from here</p>
            </div>
            <div>This readme is really dragging on...</div>
          </div>
        </Draggable>
      </div>
    </div>
  );
};

export default TarotScreen;
