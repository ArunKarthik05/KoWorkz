import { Inter } from "next/font/google";
import "./globals.css";
import "../../styles/variables.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "KoWorkz",
  description: "Your co-working space",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
