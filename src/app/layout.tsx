import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ApolloWrapper } from "../../lib/apollo";
import { ReduxProvider } from "@/Store/ReduxProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "M-Users",
  description: "Application that manages users",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ApolloWrapper>
          <ReduxProvider>
            <div>{children}</div>
          </ReduxProvider>
        </ApolloWrapper>
      </body>
    </html>
  );
}
