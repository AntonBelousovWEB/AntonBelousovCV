import CVTemplate from "../cv-template";
import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer: any[];
  }
}

export default function Home() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-6SDC2SBMCG";
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    gtag("js", new Date());
    gtag("config", "G-6SDC2SBMCG");
  }, []);

  return (
    <>
      <main>
        <CVTemplate />
      </main>
    </>
  );
}