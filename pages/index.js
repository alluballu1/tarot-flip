
import Image from "next/image";
//import styles from '../styles/Home.module.css'
import "bootstrap/dist/css/bootstrap.min.css";
import bg from "/pages/images/background/alexis-stahnke-final-gif.gif";


export default function Home() {


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
      width: "75%",
      minHeight: "90vh",
      opacity: "75%",
      height: "fit-content",
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
        userSelect:"none"
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

      <div className="container-s" style={styles.contentContainer}>
        <div style={styles.titleStyle}>ＩＮＴＲＯＤＵＣＴＩＯＮ</div>
        <div
          style={{
            display: "flex",
            flexWrap:"wrap",
            flexDirection: "row",
            opacity: "100%",
            zIndex: 1,
            color: "white",
            justifyContent: "space-around",
          }}
        >
          <p style={{ padding: 10, maxWidth: 650, minWidth:250, textAlign:"justify" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            rhoncus turpis urna, fermentum interdum nisl finibus sed. Aliquam
            elementum diam eros, sit amet sagittis eros laoreet sit amet.
            Maecenas scelerisque mattis nunc. Mauris vestibulum gravida mi sit
            amet tincidunt. Suspendisse potenti. Sed dui ligula, fringilla vitae
            iaculis ac, bibendum in tortor. Ut finibus tortor id velit tristique
            congue pharetra ac augue. Phasellus ut facilisis ante. Praesent
            vitae nulla consequat nunc blandit facilisis. Vivamus in dignissim
            dui. Quisque sodales porttitor enim dapibus ultrices. Praesent
            posuere eros eu enim sollicitudin ullamcorper.
          </p>

          <p style={{ padding: 10, maxWidth: 650, minWidth:250, textAlign:"justify"  }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            rhoncus turpis urna, fermentum interdum nisl finibus sed. Aliquam
            elementum diam eros, sit amet sagittis eros laoreet sit amet.
            Maecenas scelerisque mattis nunc. Mauris vestibulum gravida mi sit
            amet tincidunt. Suspendisse potenti. Sed dui ligula, fringilla vitae
            iaculis ac, bibendum in tortor. Ut finibus tortor id velit tristique
            congue pharetra ac augue. Phasellus ut facilisis ante. Praesent
            vitae nulla consequat nunc blandit facilisis. Vivamus in dignissim
            dui. Quisque sodales porttitor enim dapibus ultrices. Praesent
            posuere eros eu enim sollicitudin ullamcorper. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Nulla rhoncus turpis urna,
            fermentum interdum nisl finibus sed. Aliquam elementum diam eros,
            sit amet sagittis eros laoreet sit amet. Maecenas scelerisque mattis
            nunc. Mauris vestibulum gravida mi sit amet tincidunt.
          </p>
        </div>
      </div>
    </div>
  );
}
