import type { Metadata } from "next";
import "keen-slider/keen-slider.min.css";
import "./globals.css";

import MswProvider from "@/mocks/utils/MswProvider";
import QueryProvider from "@/queries/QueryProvider";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

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
      <body className="flex flex-col min-h-screen">
        <MswProvider>
          <QueryProvider>
            <Header />
            {/* Header height만큼 margin top을, Footer height만큼 margin bottom을 줌 */}
            <main className="flex-1 overflow-auto mt-[3rem] mb-[5rem] scrollbar-hide">
              {children}
            </main>
            <Footer />
            <div id="modal-portal"></div>
          </QueryProvider>
        </MswProvider>
      </body>
    </html>
  );
}
