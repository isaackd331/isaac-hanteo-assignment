import type { Metadata } from "next";

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
    <html lang="ko">
      <body>
        <main>{children}</main>
        <div id="modal-portal"></div>
      </body>
    </html>
  );
}
