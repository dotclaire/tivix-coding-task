import "../styles/index.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
