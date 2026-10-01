import type { Metadata } from "next";
import { Source_Sans_3, Source_Serif_4 } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Main } from "@/components/layout/Main";
import { SplashScreen } from "@/components/layout/SplashScreen";
import { site } from "@/data/site";
import "./globals.css";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${site.shortName} — ${site.tagline}`,
    template: `%s · ${site.shortName}`,
  },
  description: site.heroSupport,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sk"
      className={`${sourceSans.variable} ${sourceSerif.variable} h-full antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{if(sessionStorage.getItem("bytys-splash-seen")!=="1"){document.documentElement.setAttribute("data-splash","1");}}catch(e){document.documentElement.setAttribute("data-splash","1");}})();`,
          }}
        />
      </head>
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <SplashScreen />
        <Header />
        <Main>{children}</Main>
        <Footer />
      </body>
    </html>
  );
}
