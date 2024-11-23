import type { Metadata } from "next";
import "./globals.css";
import Head from "next/head"; // Importujemy komponent Head
import Navigation from "@/components/Navigation";
import { Alumni_Sans_Pinstripe } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import { GoogleAnalytics } from "@next/third-parties/google";

const alumni = Alumni_Sans_Pinstripe({
  subsets: ["latin"], // Wybierz odpowiedni subset, jeśli potrzebujesz np. cyrylicy
  weight: ["400"], // Wybierz różne wagi fontów, jeśli są potrzebne
  display: "swap", // Ustawienie display dla lepszej wydajności
});

export const metadata: Metadata = {
  title: "Świątynia Smaku Sushi",
  description:
    "Zapraszamy do najlepszej sushi restauracji w mieście! Świeże składniki, autentyczne smaki Japonii i wykwintne sushi rolls, sashimi oraz nigiri. Odkryj wyjątkowe doznania kulinarne w przytulnej atmosferze. Zarezerwuj stolik już dziś!",
  keywords: [
    "sushi",
    "sushi warszawa",
    "sushi warsaw",
    "sushi rembertów",
    "sushi warszawa rembertów",
    "najlepsze sushi warszawa",
    "sushi rolls warsaw",
    "japanese food warsaw",
    "japanese food warsaw",
    "warsaw rembertów sushi",
    "warsaw sushi",
  ],
  creator: "Adrianosky",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Alumni+Sans+Pinstripe:ital@0;1&display=swap"
          rel="stylesheet"
        />
        <meta
          name="keywords"
          content="sushi, sushi warszawa, sushi warsaw, sushi rembertów, sushi warszawa rembertów, najlepsze sushi warszawa, sushi rolls, japanese food, japanese food warsaw, warsaw rembertów sushi, warsaw sushi"
        />
      </Head>
      <body className={alumni.className}>
        <GoogleTagManager gtmId="GTM-WSZ827M3" />
        <GoogleAnalytics gaId="G-Q78LRG4VBE" />
        <Navigation />
        {children}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WSZ827M3"
            height="0"
            width="0"
            style={{display:"none",visibility:"hidden"}}
          ></iframe>
        </noscript>
      </body>
    </html>
  );
}
