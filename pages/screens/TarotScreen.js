import Link from "next/link";

const TarotScreen = () => {
  const styles = {
    containerStyle: { height: "100vh", backgroundColor: "black" },
    textStyle: {
      color: "white",
      fontSize: 50,
    },
  };
  return (
    <div style={styles.containerStyle}>
      <Link href={"/"}>
        <p style={styles.textStyle}>This is a text sample hello </p>
      </Link>
    </div>
  );
};

export default TarotScreen;
