// Home.tsx
import { DakshinaSection } from "../components/kalikulam/DakshinaSection";
import { TantraSection } from "../components/kalikulam/TantraSection";
import { IntroGuru } from "../components/kalikulam/IntroGuru";
import { Hero } from "../components/kalikulam/Hero";
import { FaqSection } from "../components/kalikulam/FaqSection";

// Removed scrollSnapAlign / scrollSnapStop — they cause the "stuck" feeling on mobile.
// Sections now flow naturally; smooth scroll behavior is still applied globally.
function Section({
  children,
  tall = false,
}: {
  children: React.ReactNode;
  tall?: boolean;
}) {
  return (
    <section
      style={{
        minHeight: tall ? "100vh" : "auto",
        paddingTop: "2rem",
        paddingBottom: "2rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: tall ? "flex-start" : "center",
        backgroundColor: "var(--color-background, #0d0a09)",
      }}
    >
      {children}
    </section>
  );
}

function Home() {
  return (
    <>
      <Section>
        <Hero />
      </Section>

      <Section>
        <IntroGuru />
      </Section>

      <Section tall>
        <TantraSection />
      </Section>

      <Section>
        <DakshinaSection />
      </Section>

      <Section tall>
        <FaqSection />
      </Section>
    </>
  );
}

export default Home;
