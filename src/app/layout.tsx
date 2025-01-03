import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ToasterProvider from "./_components/ToasterProvider/ToasterProvider";
import { LoaderProvider } from "./_components/LoaderContext/LoaderProvider";
import Loader from "./_components/Loader/Loader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pragra Employee Management",
  description: "Onboard and Manage Employee Shifts",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <LoaderProvider>
          <ToasterProvider>
            {children}
            <Loader />
          </ToasterProvider>
        </LoaderProvider>
      </body>
    </html>
  );
}
