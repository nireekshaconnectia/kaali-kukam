// Home.tsx
import { DakshinaSection } from "../components/kalikulam/DakshinaSection";
import { TantraSection } from "../components/kalikulam/TantraSection";
import { IntroGuru } from "../components/kalikulam/IntroGuru";
import { Hero } from "../components/kalikulam/Hero";
import { FaqSection } from "../components/kalikulam/FaqSection";

// Removed scrollSnapAlign / scrollSnapStop — they cause the "stuck" feeling on mobile.
// Sections now flow naturally; smooth scroll behavior is still applied globally.


function Home() {
  return (
    <>
     
        <Hero />
     

     
        <IntroGuru />
     

        <TantraSection />
     

     
        <DakshinaSection />
     

        <FaqSection />
     
    </>
  );
}

export default Home;
