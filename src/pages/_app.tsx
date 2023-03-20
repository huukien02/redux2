import Navbar from "@/component/Navbar/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootUser from "../store/reducer/users";

const store = createStore(rootUser);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        {/* <Navbar /> */}
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
