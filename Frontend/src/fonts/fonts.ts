import { Lato, Rubik, Poppins, Montserrat } from "next/font/google";

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  style: "normal",
  subsets: ["latin"],
  variable: "--font-lato",
});

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const monte = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

export const fonts = {
  lato,
  rubik,
  poppins,
  monte,
};
