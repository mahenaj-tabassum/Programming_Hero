import { Bricolage_Grotesque, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
});
const sans = DM_Sans({ subsets: ["latin"], variable: "--font-dm" });

export const metadata = {
  title: "Gatekeeper",
  description: "A production-ready authentication starter for Next.js.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="min-h-screen">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
