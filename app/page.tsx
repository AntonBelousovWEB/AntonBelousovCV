import CVTemplate from "../cv-template";
import GoogleAnalytics from "./GoogleAnalytics";

const profilePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": "https://anton-belousov-cv.vercel.app/#profile",
  url: "https://anton-belousov-cv.vercel.app/",
  name: "Anton Belousov - Senior JavaScript and Frontend Developer CV",
  about: {
    "@type": "Person",
    "@id": "https://anton-belousov-cv.vercel.app/#person",
  },
  mainEntity: {
    "@type": "Person",
    "@id": "https://anton-belousov-cv.vercel.app/#person",
    name: "Anton Belousov",
    jobTitle: "Senior Frontend Engineer",
    image:
      "https://anton-belousov-cv.vercel.app/img/anton-belousov-senior-frontend-engineer.webp",
    knowsAbout: [
      "JavaScript",
      "React",
      "Next.js",
      "TypeScript",
      "Technical SEO",
      "Core Web Vitals",
      "Frontend Architecture",
    ],
  },
};

export default function Home() {
  return (
    <>
      <GoogleAnalytics trackingId="G-6SDC2SBMCG" />
      <script type="application/ld+json">
        {JSON.stringify(profilePageSchema)}
      </script>
      <main>
        <CVTemplate />
      </main>
    </>
  );
}
