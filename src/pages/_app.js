import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import '@/styles/globals.css';
import { Archivo, Karla, Poppins } from "next/font/google";

const karla = Karla({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export default function App({ Component, pageProps }) {
  return (
    <div className="">
      <Header />
      <div
        className={`${karla.className} ${archivo.className} ${poppins.className}`}
      >
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}
