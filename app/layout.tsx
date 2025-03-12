import type { Metadata } from "next";
import "./globals.css";
import NavigationMenu from "@/components/navigation-menu";
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ //make navigationMenu appear only if user is logged in
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavigationMenu />
        {children}
      </body>
    </html>
  );
}
