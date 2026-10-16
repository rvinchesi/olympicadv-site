import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { SiteFrame } from "@/components/SiteFrame";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Olympic Advisors, Inc.",
    template: "%s · Olympic Advisors",
  },
  description:
    "Richard A. Vinchesi advises founders on growth, corporate finance, and mergers and acquisitions. Olympic Advisors and Stock Securities.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={sourceSans.variable}>
      <body>
        <SiteFrame>{children}</SiteFrame>
      </body>
    </html>
  );
}
