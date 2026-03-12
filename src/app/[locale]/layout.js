import {
  Noto_Sans,
  Roboto_Mono,
  Atkinson_Hyperlegible,
} from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "../globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const atkinson = Atkinson_Hyperlegible({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const notoSans = Noto_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Indicateur Impact",
  description: "Indicateur Impact",
};

export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${atkinson.variable} ${notoSans.variable} ${robotoMono.variable} antialiased flex flex-col min-h-screen max-w-360 mx-auto`}
      >
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="flex-1 "> {children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
