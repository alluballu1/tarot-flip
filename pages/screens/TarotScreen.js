import Image from "next/image";
//import styles from '../styles/Home.module.css'
import "bootstrap/dist/css/bootstrap.min.css";
import bg from "/pages/images/background/alexis-stahnke-final-gif.gif";

import CardContainer from "../components/CardContainer";
import { useState } from "react";
import DeckSelectorModal from "../components/DeckSelectorModal";
import { useDispatch, useSelector } from "react-redux";
import { selectDeck } from "../../reducers/tarotReducer";

const TarotScreen = () => {
  const listOfCards = useSelector((state) => state.tarot);
  const dispatch = useDispatch();
  const [usedList, setUsedList] = useState([]);

  const appenderFunction = () => {
    console.log(listOfCards);
    const random = Math.floor(Math.random() * Object.keys(listOfCards[0]).length) + 1;
    console.log(listOfCards[0][random])
    /* setUsedList((arr) => [...arr, `clubs0${random}.jpg`]); */
  };
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
      background: "rgba(0,0,0,0.75)",
      zIndex: 1,
      display: "flex",
      width: "95%",
      minHeight: "90vh",
      height: "fit-content",
      marginTop: 100,
      borderRadius: 25,
    },
    cardBackStyle: {
      cursor: "pointer",
      width: 220,
      height: 350,
      borderRadius: 10,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    countStyle: {
      background: "white",
      padding: 8,
      borderRadius: "50%",
      textAlign: "center",
      alignSelf: "center",
      width: 40,
      height: 40,
    }

  };
  return (
    <>
      <DeckSelectorModal deckSelect={(val) => dispatch(selectDeck(val))} />
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
          {listOfCards.length > 0 && (
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div
                onClick={() => appenderFunction()}
                style={styles.cardBackStyle}
              >
                <p
                  style={styles.countStyle}
                >
                  {Object.keys(listOfCards[0]).length + 1}
                </p>
              </div>
              {usedList.map((element, index) => {
                return (
                  <div key={index}>
                    <CardContainer card={element} />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default TarotScreen;
