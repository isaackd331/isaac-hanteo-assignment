import type { Metadata } from "next";
import "keen-slider/keen-slider.min.css";
import "./globals.css";

import MswProvider from "@/mocks/utils/MswProvider";
import QueryProvider from "@/queries/QueryProvider";
import Header from "@/components/header/Header";

export const metadata: Metadata = {
  title: "isaac-hanteo-assignment",
  description: "hanteo global recruit assignment for Isaac",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className="relative min-h-[100vh]">
        <MswProvider>
          <QueryProvider>
            <Header />
            <main>{children}</main>
            <div id="modal-portal"></div>
          </QueryProvider>
        </MswProvider>
      </body>
    </html>
  );
}
