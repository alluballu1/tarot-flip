import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
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
      fontSize: 50,
      textAlign: "center",
    },
    contentContainer: {
      background: "black",
      zIndex: 1,
      width: "75%",
      height: "90vh",
      opacity: "75%",
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
          src={bg}
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>

      <div className="container-s" style={styles.contentContainer}>
        <div style={styles.titleStyle}>ＩＮＴＲＯＤＵＣＴＩＯＮ</div>
        <div style={{ display: "flex", flexDirection: "row", opacity:"100%", zIndex:1, color:"white", justifyContent:"space-around" }}>
        <div style={{padding:10}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rhoncus
          turpis urna, fermentum interdum nisl finibus sed. Aliquam elementum
          diam eros, sit amet sagittis eros laoreet sit amet. Maecenas
          scelerisque mattis nunc. Mauris vestibulum gravida mi sit amet
          tincidunt. Suspendisse potenti. Sed dui ligula, fringilla vitae
          iaculis ac, bibendum in tortor. Ut finibus tortor id velit tristique
          congue pharetra ac augue. Phasellus ut facilisis ante. Praesent vitae
          nulla consequat nunc blandit facilisis. Vivamus in dignissim dui.
          Quisque sodales porttitor enim dapibus ultrices. Praesent posuere eros
          eu enim sollicitudin ullamcorper.
        </div>
        <div style={{padding:10}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rhoncus
          turpis urna, fermentum interdum nisl finibus sed. Aliquam elementum
          diam eros, sit amet sagittis eros laoreet sit amet. Maecenas
          scelerisque mattis nunc. Mauris vestibulum gravida mi sit amet
          tincidunt. Suspendisse potenti. Sed dui ligula, fringilla vitae
          iaculis ac, bibendum in tortor. Ut finibus tortor id velit tristique
          congue pharetra ac augue. Phasellus ut facilisis ante. Praesent vitae
          nulla consequat nunc blandit facilisis. Vivamus in dignissim dui.
          Quisque sodales porttitor enim dapibus ultrices. Praesent posuere eros
          eu enim sollicitudin ullamcorper.           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rhoncus
          turpis urna, fermentum interdum nisl finibus sed. Aliquam elementum
          diam eros, sit amet sagittis eros laoreet sit amet. Maecenas
          scelerisque mattis nunc. Mauris vestibulum gravida mi sit amet
          tincidunt. 

        </div>
      </div>
      </div>
      
    </div>
  );
}
