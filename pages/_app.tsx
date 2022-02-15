import "../styles/globals.css";
import type { AppProps } from "next/app";
import "../styles/font.css";
import { Provider } from "react-redux";
import { store } from "../provider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // 백엔드연결하면서 axios redux사용 -> store
    <Provider store={store}>
      <Component {...pageProps} />;
    </Provider>
  );
}

export default MyApp;
