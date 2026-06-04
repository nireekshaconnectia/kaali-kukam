import { DakshinaSection } from "../components/kalikulam/DakshinaSection";
import { TantraSection } from "../components/kalikulam/TantraSection";
import { IntroGuru } from "../components/kalikulam/IntroGuru";
import { Hero } from "../components/kalikulam/Hero";
import { FaqSection } from "../components/kalikulam/FaqSection";

function Home() {
  return (
    <>
      <SnapSection>
        <Hero />
      </SnapSection>

      <SnapSection>
        <IntroGuru />
      </SnapSection>

      {/* TantraSection has tall content — snaps at top, min 100vh */}
      <SnapSection tall>
        <TantraSection />
      </SnapSection>

      <SnapSection>
        <DakshinaSection />
      </SnapSection>

      <SnapSection tall>
        <FaqSection />
      </SnapSection>
    </>
  );
}

function SnapSection({
  children,
  tall = false,
}: {
  children: React.ReactNode;
  tall?: boolean;
}) {
  return (
    <section
      style={{
        scrollSnapAlign: "start",
        scrollSnapStop: "always",
        minHeight: "100vh",
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

export default Home;
