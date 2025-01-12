import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/providers";
import { cookies } from "next/headers";
import { initializeAxiosInstance } from "@/hooks/instance";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const token = cookies().get("accessToken")?.value;

  if (token) {
    initializeAxiosInstance(token);
  }

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
