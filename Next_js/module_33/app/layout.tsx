import "./globals.css";
import { Roboto } from "next/font/google";
import Navbar from "@/components/Navbar";

const roboto = Roboto({
  subsets: ["latin"],
});

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className={`${roboto.className} min-h-full flex flex-col`}>
        {/* Now Navbar will appear in all pages */}
        <Navbar />

        <main>{children}</main>
      </body>
    </html>
  );
}
