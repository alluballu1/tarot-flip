import { useDragControls, motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";

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
          width: 220,
          height: 320,
          position: "absolute",
          zIndex: 10,
          background: "white",
          padding: 25,
          borderWidth:1,
          borderStyle:"solid",
          cursor:"move"
        }}
        dragMomentum={0}
        drag
        draggable
        animate={{ rotate: rotation }}
      >
        <Image src={`/tarot/${props.card}`} width={200} height={300} />
        <button onClick={() => setRotation(rotation + 90)}>Rotate</button>
      </motion.div>
    </div>
  );
};


export default CardContainer