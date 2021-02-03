import { AppProps } from "next/dist/next-server/lib/router/router";

import "../assets/styles/index.css";

const CanvasPaintingPoc = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default CanvasPaintingPoc;
