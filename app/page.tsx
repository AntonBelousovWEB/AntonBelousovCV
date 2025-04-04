import CVTemplate from "../cv-template";
import GoogleAnalytics from "./GoogleAnalytics";

export default function Home() {
  return (
    <>
      <GoogleAnalytics trackingId="G-6SDC2SBMCG" />
      <main>
        <CVTemplate />
      </main>
    </>
  );
}