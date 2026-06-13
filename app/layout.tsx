import type { Metadata } from "next";
import "@/app/ui/globals.css";
import { notoSans } from "@/app/ui/fonts";
import Header from "@/app/ui/components/Header";

export const metadata: Metadata = {
  title: "Dan Goldman for Congress",
  description: "Why Dan Goldman should (or shouldn't) be elected",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notoSans.className} antialiased`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
