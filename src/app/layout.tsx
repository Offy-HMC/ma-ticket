import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HUMANICA",
  description: "MA Ticket System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider theme={theme}>
          <AppRouterCacheProvider>
                {children}
          </AppRouterCacheProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
