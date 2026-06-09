// DakshinaSection.tsx
import dakshinaHands from "@/assets/dakshina-hands.png";
import vector from "@/assets/image.png";

const GradientText = ({ text, className }: { text: string; className?: string }) => (
  <span
    className={`inline-block bg-linear-to-r from-[#EBB57C] via-[#F4A460] to-[#94622C] bg-clip-text text-transparent ${className}`}
    style={{
      backgroundSize: "200% auto",
      animation: "gradientShift 8s linear infinite",
    }}
  >
    {text}
  </span>
);

export function DakshinaSection() {
  return (
    <>
      <style>{`
        @keyframes gradientShift {
          0%   { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
      `}</style>

      <section className="relative overflow-hidden">
        {/* Background image */}
        <img
          src={dakshinaHands}
          alt="दक्षिणा अर्पण"
          width={1280}
          height={896}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />

        {/* Content */}
        <div className="relative mx-auto max-w-5xl px-6 md:px-14 py-16 text-center">
          <p className="font-body text-muted-foreground text-xl mb-1">
            कृतज्ञता का <GradientText text="अर्पण" />
          </p>

          <img
            src={vector}
            alt="दक्षिणा"
            className="mx-auto mb-6 h-31.5"
          />

          {/* Button */}
          <button className="rounded-full border border-gold/60 bg-linear-to-tr from-[#EBB57C] to-[#94622C] px-10 py-3 font-body text-muted-foreground glow text-3xl mb-10 relative overflow-hidden group">
            दक्षिणा प्रदान करें
          </button>

          <p className="mx-auto mt-10 max-w-8xl text-foreground leading-relaxed text-[20px]">
            दक्षिणा केवल धन नहीं, यह श्रद्धा का वह प्रवाह है जो शिष्य से गुरु तक
            और गुरु से शक्ति तक पहुँचता है। भारतीय संस्कृति में दक्षिणा एक देवी
            का नाम है: यज्ञ की पत्नी। जहाँ दक्षिणा है, वहाँ यज्ञ पूर्ण है। जहाँ
            दक्षिणा नहीं, वहाँ साधना अधूरी है।
          </p>
        </div>
      </section>
    </>
  );
}