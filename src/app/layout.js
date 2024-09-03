import "./globals.css";
import "../../styles/variables.scss";
import Head from "next/head";

export const metadata = {
  title: "KoWorkz",
  description: "Your co-working space",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link
          rel="preload"
          href="/Proza_Libre/ProzaLibre-Regular.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
      </Head>
      <body>{children}</body>
    </html>
  );
}
