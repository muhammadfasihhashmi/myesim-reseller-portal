import ReactQueryProvider from "@/providers/ReactQueryProvider";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <ReactQueryProvider>{children}</ReactQueryProvider>
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
