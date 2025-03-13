import type { Metadata } from "next";
import "./globals.css";
import NavigationMenu from "@/components/navigation-menu";
import { AuthProvider } from "./auth/provider";
import { SidebarMenuProvider } from "@/components/sidebar-menu";


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
        <AuthProvider>


          <NavigationMenu />
          <div className="flex w-full">
            <SidebarMenuProvider >
              {children}
            </SidebarMenuProvider>
          </div>

        </AuthProvider>
      </body>
    </html>
  );
}
