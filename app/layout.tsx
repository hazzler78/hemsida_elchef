import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClientLayout } from './components/ClientLayout'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Elchef - Din egen elchef",
  description: "Spar pengar på din elräkning, bli din egen elchef!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sv">
      <body className={inter.className} suppressHydrationWarning>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
