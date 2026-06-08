// Home.tsx
import { DakshinaSection } from "../components/kalikulam/DakshinaSection";
import { TantraSection } from "../components/kalikulam/TantraSection";
import { IntroGuru } from "../components/kalikulam/IntroGuru";
import { Hero } from "../components/kalikulam/Hero";
import { FaqSection } from "../components/kalikulam/FaqSection";

// Sections now flow naturally with proper spacing for scroll animations
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
        paddingTop: tall ? "2rem" : "2rem",
        paddingBottom: tall ? "2rem" : "2rem",
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
      <Section tall>
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