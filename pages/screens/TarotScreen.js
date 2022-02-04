import Image from "next/image";
//import styles from '../styles/Home.module.css'
import "bootstrap/dist/css/bootstrap.min.css";
import bg from "/pages/images/background/alexis-stahnke-final-gif.gif";
import { ZoomIn, ZoomOut, ArrowCounterclockwise } from "react-bootstrap-icons";
import CardContainer from "../components/CardContainer";
import { useState } from "react";
import DeckSelectorModal from "../components/DeckSelectorModal";
import { useDispatch, useSelector } from "react-redux";
import { removeCard, selectDeck } from "../../reducers/tarotReducer";
import { Button } from "react-bootstrap";

const TarotScreen = () => {
  const listOfCards = useSelector((state) => state.tarot);
  const dispatch = useDispatch();
  const [usedList, setUsedList] = useState([]);
  const [scaleRatio, setScaleRatio] = useState(1);
  const [usedDeck, setUsedDeck] = useState(null);
  if ((typeof window === "undefined") | undefined) {
    return null;
  }
  let scale = window.outerHeight + window.outerWidth;

  const appenderFunction = () => {
    if (listOfCards.length > 0) {
      const random = Math.floor(Math.random() * listOfCards.length);
      setUsedList((arr) => [...arr, listOfCards[random]]);
      console.log(listOfCards[random]);
      dispatch(removeCard(listOfCards[random]));
    }
  };

  const resetDeck = () => {
    if (window.confirm("Reset deck?")) {
      dispatch(selectDeck(usedDeck));
      setUsedList([]);
    }
  };

  const scalingHandler = (type) => {
    switch (type) {
      case "ZOOM_IN":
        setScaleRatio(scaleRatio + 0.25);
        break;
      case "ZOOM_OUT":
        setScaleRatio(scaleRatio - 0.25);
        break;
      default:
        return;
    }
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
      background: "grey",
      transform: `scale(${scale / 2920})`,
    },
    countStyle: {
      background: "white",
      padding: 8,
      borderRadius: "50%",
      textAlign: "center",
      alignSelf: "center",
      width: 40,
      height: 40,
      userSelect: "none",
    },
    buttonStyle: {
      padding: 5,
      margin: 5,
      borderRadius: 10,
    },
  };
  return (
    <div>
      <DeckSelectorModal
        setDeck={(val) => setUsedDeck(val)}
        deckSelect={(val) => dispatch(selectDeck(val))}
      />
      <div
        style={{
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          height: "100%",
          userSelect: "none",
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

        <div
          style={{
            ...styles.contentContainer,
          }}
        >
          {listOfCards.length > 0 && (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                position: "absolute",
                top: 100,
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Button
                  onClick={() => scalingHandler("ZOOM_IN")}
                  variant="outline-light"
                  style={styles.buttonStyle}
                >
                  <ZoomIn />
                </Button>
                <Button
                  onClick={() => scalingHandler("ZOOM_OUT")}
                  variant="outline-light"
                  style={styles.buttonStyle}
                >
                  <ZoomOut />
                </Button>
                <Button
                  onClick={() => resetDeck()}
                  variant="outline-light"
                  style={styles.buttonStyle}
                >
                  <ArrowCounterclockwise />
                </Button>
              </div>
              <div
                onClick={() => appenderFunction()}
                style={styles.cardBackStyle}
              >
                <p style={styles.countStyle}>{listOfCards.length}</p>
              </div>
            </div>
          )}
          {usedList.map((element, index) => {
            return (
              <div key={index}>
                <CardContainer
                  usedDeck={usedDeck}
                  scaleRatio={scaleRatio}
                  card={element}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TarotScreen;
