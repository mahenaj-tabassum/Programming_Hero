import { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import Navbar from "@/components/shared/Navbar";
import "./globals.css";
import BooksProvider from "@/Context/BooksContext";
import ToastProvider from "@/components/ToastProvider";

export const metadata: Metadata = {
  title: "Book Vive — Find your Great Read",
  description: "Discover your next favorite book.",
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
});

const RootLayout = ({ children }: LayoutProps<"/">) => {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body>
        <BooksProvider>
          <Navbar />
          <main>{children}</main>
          <ToastProvider />
        </BooksProvider>
      </body>
    </html>
  );
};

export default RootLayout;
