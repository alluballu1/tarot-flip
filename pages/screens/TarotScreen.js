import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

const TarotScreen = () => {
  const styles = {
    containerStyle: { height: "100vh", backgroundColor: "black" },
    textStyle: {
      color: "black",
      fontSize: 50,
    },
  };
  return (
    <div className="container-fluid">
      <Link href={"/"}>
        <p className="text-muted" style={styles.textStyle}>This is a text sample hello </p>
      </Link>
      <p class="h1">h1. Bootstrap heading</p>
      <p class="h2">h2. Bootstrap heading</p>
      <p class="h3">h3. Bootstrap heading</p>
      <p class="h4">h4. Bootstrap heading</p>
      <p class="h5">h5. Bootstrap heading</p>
      <p class="h6">h6. Bootstrap heading</p>
    </div>
  );
};

export default TarotScreen;
