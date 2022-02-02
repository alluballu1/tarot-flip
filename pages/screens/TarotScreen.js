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

  const listOfCards = useSelector(state => state.tarot)
  const dispatch = useDispatch()
  const [testList, setTestList] = useState([/* 
    "clubs01.jpg",
    "clubs02.jpg",
    "clubs03.jpg",
    "clubs04.jpg",
    "clubs05.jpg", */
  ]);

  const appenderFunction = () => {
    console.log(listOfCards)
    const random = Math.floor(Math.random() * 9) + 1;
    setTestList((arr) => [...arr, `clubs0${random}.jpg`]);
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
  };
  return (
    <><DeckSelectorModal deckSelect={(val) => dispatch(selectDeck(val))} />
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
        {listOfCards.length > 0 && <div style={{...styles.contentContainer, flexDirection:"row"}}>
          <div style={{ width: 220, height: 350, background: "White", borderRadius: 10, display:"flex", justifyContent:"center", alignItems:"center" }}>
            <p>NUMBER OF CARDS</p>
          </div>
          {testList.map((element, index) => {
            return (
              <div key={index}>
                <CardContainer card={element} />
              </div>
            );
          })}
        </div>}
      </div>
    </>
  );
};

export default TarotScreen;
