import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import { ArrowRepeat } from "react-bootstrap-icons";
const CardContainer = (props) => {
  const [rotation, setRotation] = useState(0);
  if (!props.card) {
    return null;
  }
  if (typeof window === "undefined" | undefined) {
    return null
  }
  
  const scale = window.innerHeight+window.innerWidth
  return (

    <div
      style={{
        dislpay: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: "100%",
        transform:`scale(${scale/3000})`
      }}
      
      id="tarot-motion-container"
    >
      <motion.div
        style={{
          position: "absolute",
          width: 220,
          height:350,
          zIndex: 10,
          background: "white",
          borderWidth: 1,
          borderStyle: "solid",
          cursor: "move",
          borderRadius: 10,
          padding: 10,
        }}
        dragMomentum={0}
        drag
        draggable
        animate={{ rotate: rotation }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            fontSize: 15,
          }}
        >
          {props.card.name}
          <ArrowRepeat
            size={42}
            style={{
              background: "white",
              cursor: "pointer",
              position: "absolute",
              right: -15,
              top: -20,
              color: "black",
              borderRadius: "50%",
              borderStyle: "solid",
              borderWidth: 1,
            }}
            onClick={() => setRotation(rotation + 90)}
          />
        </div>
        <Image
          alt={props.card}
          src={
            `/tarotThoth/${props.card.cardName}` /* `/tarot/${props.card}` */
          }
          width={200}
          height={300}
        />
      </motion.div>
    </div>
  );
};

export default CardContainer;
