import kaliFace from "@/assets/kali-face.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center select-none">
        <span className="watermark-text text-[18vw] md:text-[10vw] leading-none">कृष्ण काली</span>
        <span className="watermark-text text-[14vw] md:text-[8vw] leading-none">स्वाहा</span>
      </div>
      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 pt-10 pb-16">
        <img
          src={kaliFace}
          alt="माँ काली का दिव्य स्वरूप"
          width={512}
          height={512}
          className="w-56 md:w-72 rounded-b-[3rem] object-cover [mask-image:linear-gradient(to_bottom,black_80%,transparent)]"
        />
      </div>
    </section>
  );
}
