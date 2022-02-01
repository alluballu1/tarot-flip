import { useDragControls, motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import {ArrowRepeat} from "react-bootstrap-icons"
const CardContainer = (props) => {
  const [rotation, setRotation] = useState(0)
  return (
    <div
      style={{
        dislpay: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <motion.div
        style={{
          width: 160,
          height: 250,
          position: "absolute",
          zIndex: 10,
          background: "white",
          padding: 5,
          borderWidth:1,
          borderStyle:"solid",
          cursor:"move"
        }}
        dragMomentum={0}
        drag
        draggable
        animate={{ rotate: rotation }}
      >
          <div style={{display:"flex", flexDirection:"row", justifyContent:"space-evenly"}}>
          <p>{props.card}</p> <ArrowRepeat size={42} style={{background:"white",cursor:"pointer", position:"absolute", right:-15, top:-20, color:"black", borderRadius:"50%", borderStyle:"solid", borderWidth:1}} onClick={() => setRotation(rotation + 90)}/>
          </div>
          
        <Image src={`/tarot/${props.card}`} width={150} height={200} />
        
      </motion.div>
    </div>
  );
};


export default CardContainer