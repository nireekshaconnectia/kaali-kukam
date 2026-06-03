import dakshinaHands from "@/assets/dakshina-hands.jpg";

export function DakshinaSection() {
  return (
    <section className="relative overflow-hidden">
      <img
        src={dakshinaHands}
        alt="दक्षिणा अर्पण"
        width={1280}
        height={896}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-linear-to-b from-background/70 via-maroon/40 to-background/90" />
      <div className="relative mx-auto max-w-3xl px-6 py-20 text-center">
        <p className="font-display text-gold-soft/80 text-sm mb-1">कृतज्ञता का अर्पण</p>
        <h2 className="font-display text-4xl md:text-5xl text-gold-soft mb-8">संकल्प दक्षिणा</h2>
        <button className="rounded-full border border-gold/60 bg-linear-to-b from-accent/70 to-maroon px-8 py-3 font-display text-gold-soft transition-transform hover:scale-105 glow">
          दक्षिणा प्रदान करें
        </button>
        <p className="mx-auto mt-10 max-w-xl text-foreground/80 leading-relaxed text-[15px]">
          दक्षिणा केवल धन नहीं, यह श्रद्धा का वह प्रवाह है जो शिष्य से गुरु तक और गुरु से शक्ति तक
          पहुँचता है। भारतीय संस्कृति में दक्षिणा एक देने का नाम है: यह श्रद्धा की पूर्ति। दक्षिणा बिना
          श्रद्धा अधूरी है।
        </p>
      </div>
    </section>
  );
}
