import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Shared/Navbar";
import Footer from "@/components/Shared/Footer";
import MyPlanContextProvider from "@/Contexts/MyPlanContext";
import { ToastContainer } from "react-toastify";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FitLog",
  description:
    "A simple workout app to browse exercises, plan your day, and save your favorites.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${oswald.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <ToastContainer position="top-right" />
        <MyPlanContextProvider>
          <Navbar />
          <main className="md:w-[85%] w-[92%] mx-auto flex-1">{children}</main>
          <Footer />
        </MyPlanContextProvider>
      </body>
    </html>
  );
}
