// Home.tsx
import { DakshinaSection } from "../components/kalikulam/DakshinaSection";
import { TantraSection } from "../components/kalikulam/TantraSection";
import { IntroGuru } from "../components/kalikulam/IntroGuru";
import { Hero } from "../components/kalikulam/Hero";
import { FaqSection } from "../components/kalikulam/FaqSection";

function Home() {
  return (
    <div className="w-full">
      <Hero />
      <IntroGuru />
      <TantraSection />
      <DakshinaSection />
      <FaqSection />
    </div>
  );
}

export default Home;