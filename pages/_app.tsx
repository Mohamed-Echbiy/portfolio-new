import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className='relative w-full'>
      <Component {...pageProps} />
    </div>
  );
}
