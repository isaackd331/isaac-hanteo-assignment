import type { Metadata } from "next";

import MswProvider from "@/mocks/utils/MswProvider";
import QueryProvider from "@/queries/QueryProvider";

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
      <body>
        <MswProvider>
          <QueryProvider>
            <main>{children}</main>
            <div id="modal-portal"></div>
          </QueryProvider>
        </MswProvider>
      </body>
    </html>
  );
}
