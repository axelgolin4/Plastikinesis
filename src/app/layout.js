import { Inter, Lexend } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import "./globals.css";

// Sustitutos web de las fuentes del manual: Lexend por Quantify (titulares) e Inter por Helvetica Now (texto).
const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Plastikinesis | Ingeniería y fabricación de componentes técnicos a medida",
    template: "%s | Plastikinesis",
  },
  description:
    "Ingeniería inversa, repuestos, fixtures Poka-Yoke, piezas de poliuretano colado, maquinado CNC y moldes en Guatemala. De una pieza a miles de unidades.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${lexend.variable} ${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
