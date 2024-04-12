import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Toast from "@/components/Toast";

const montserrat = Montserrat({ subsets: [ "latin" ] });

export const metadata: Metadata = {
  title: "Shoplist",
  description: "A crud show list",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
    <head>
      <title>ShopList</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0 maximum-scale=1.0, user-scalable=no"/>
    </head>
    <body className={`${montserrat.className} h-full bg-gray-100`}>

      <header className="text-white py-4 px-8 flex justify-between items-center">
        <nav className="flex flex-row items-center justify-between p-6 md:px-8 w-full">
          <a href="/" className="-m-1.5 p-1.5">
            <img src="vercel.svg" alt="logo" className="h-8 w-auto"/>
          </a>

          <div className="flex md:hidden">
            menu
          </div>

          <div className="hidden md:flex gap-12 ">
            <a href="/" className="text-sm font-semibold leading-6 text-black">Productos</a>
          </div>
        </nav>
      </header>

      <div className="flex h-[calc(100%_-_112px)]">
        {children}
      </div>

      <Toast />
    </body>
    </html>
);
}
