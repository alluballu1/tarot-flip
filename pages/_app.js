import { Provider } from "react-redux";
import { useStore } from "../store";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import Link from "next/link";
import NavBar from "./components/NavBar";

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  return (
    <Provider store={store}>
      <NavBar />

      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
