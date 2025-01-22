import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import "@/styles/globals.css";
import { Archivo, Karla, Poppins } from "next/font/google";

const karla = Karla({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-karla",
});
const archivo = Archivo({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-archivo",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export default function App({ Component, pageProps }) {
  return (
    <div className="">
      <Header />
      <div
        className={`${karla.variable} ${archivo.variable} ${poppins.variable}`}
      >
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}
