import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import { Image } from "react-bootstrap";
import bg from "../images/background/alexis-stahnke-final-gif.gif";

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
      display:"flex-wrap",
      width: "75%",
      minHeight: "90vh",
      opacity: "75%",
      height:"fit-content",
      marginTop: 50,
      borderRadius: 25,
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
          src={"../images/background/alexis-stahnke-final-gif.gif"}
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>

      <div className="container-s" style={styles.contentContainer}>
       
      </div>
    </div>
  );
};

export default TarotScreen;
