import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/header/Navbar";
import Footer from "@/components/footer/Footer";
import { Toaster } from "@/components/ui/sonner";
import SessionProvider from "@/providers/SessionProvider";

const inter = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Market",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <Navbar />
          <main className="relative flex flex-col min-h-screen p-8">
            {children}
            <Footer />
          </main>
          <Toaster />
        </SessionProvider>
      </body>
    </html>
  );
}
