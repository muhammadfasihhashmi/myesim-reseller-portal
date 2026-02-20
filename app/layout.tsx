import ReactQueryProvider from "@/providers/ReactQueryProvider";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { SessionProvider } from "next-auth/react";
import { Geist, Sora } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${sora.variable} antialiased text-body font-sora`}
      >
        <Toaster position="top-center" richColors />
        <SessionProvider>
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
