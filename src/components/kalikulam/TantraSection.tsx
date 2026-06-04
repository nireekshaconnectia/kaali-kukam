import { useEffect, useRef, useState } from "react";
import roundShape from "@/assets/RoundShape.png";
import tanthraa from "@/assets/Tanthraa.png";
import manthraaNew from "@/assets/Manthraa_New.png";
import yanthraa from "@/assets/Yanthraa.png";
import titleTantra from "@/assets/Tantra.png";
import titleMantra from "@/assets/Mantra.png";
import titleYantra from "@/assets/Yantra.png";
import titleTantraMantraYantra from "@/assets/Tantra_Mantra_Yantra.png";

const items = [
  {
    title: "तंत्र",
    titleImg: titleTantra,
    topImg: tanthraa,
    emblem: roundShape,
    text: "तंत्र न कोई रहस्य है, न कोई भय की विद्या है। यह इस सृष्टि की समग्र शक्ति को समझने और जीवन में उतारने का मार्ग है। जीवन का हर अनुभव, सुख हो या दुःख, परिवार सो या एकांत, उस साधना है।",
    imageRight: true,   // image on right
  },
  {
    title: "मंत्र",
    titleImg: titleMantra,
    topImg: manthraaNew,
    emblem: roundShape,
    text: "मंत्र वह दिव्य ध्वनि है जो सृष्टि के आरंभ से विद्यमान है। प्रत्येक मंत्र एक विशेष शक्ति का वाहन है। जप इसे सही विधि, सही भाव और सही लगन पर उच्चारित किया जाए तो वह जीवन को बदलने की क्षमता रखता है।",
    imageRight: false,  // image on left
  },
  {
    title: "यंत्र",
    titleImg: titleYantra,
    topImg: yanthraa,
    emblem: roundShape,
    text: "यंत्र एक पवित्र ज्यामितीय संरचना है, जिसमें देवी-देवताओं की शक्ति को आह्वान किया जाता है। यह केवल एक चित्र नहीं, यह एक जीवंत ऊर्जा केंद्र है। साधक के जीवन के इस क्षेत्र में यंत्र एक अदृश्य सुरक्षा कवच का कार्य करता है।",
    imageRight: true,   // image on right
  },
];

export function TantraSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Header fade-in on scroll
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Each row: text slides in from its side, image slides in from opposite side
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    rowRefs.current.forEach((row, i) => {
      if (!row) return;

      const item = items[i];
      const textEl = row.querySelector<HTMLElement>(".anim-text");
      const imgEl = row.querySelector<HTMLElement>(".anim-img");

      if (!textEl || !imgEl) return;

      // Text comes from left if image is right, text comes from right if image is left
      const textFrom = item.imageRight ? "-40px" : "40px";
      const imgFrom  = item.imageRight ? "40px"  : "-40px";

      textEl.style.opacity = "0";
      textEl.style.transform = `translateX(${textFrom})`;
      textEl.style.transition = "opacity 0.7s ease 0ms, transform 0.7s cubic-bezier(0.22,1,0.36,1) 0ms";

      imgEl.style.opacity = "0";
      imgEl.style.transform = `translateX(${imgFrom})`;
      imgEl.style.transition = "opacity 0.7s ease 120ms, transform 0.7s cubic-bezier(0.22,1,0.36,1) 120ms";

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            textEl.style.opacity = "1";
            textEl.style.transform = "translateX(0)";
            imgEl.style.opacity = "1";
            imgEl.style.transform = "translateX(0)";
            observer.disconnect();
          }
        },
        { threshold: 0.25 }
      );
      observer.observe(row);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section className="mx-auto max-w-5xl px-6 py-16">

      {/* Section header */}
      <div ref={headerRef} className="mb-16 flex flex-col items-center text-center">
        <div className="relative inline-block">
          <img
            src={titleTantraMantraYantra}
            alt="तंत्र . मंत्र . यंत्र"
            className="h-16 md:h-24 w-auto object-contain"
          />
          <div className="absolute -bottom-2 left-0 w-full text-center">
            <p className="text-foreground/75 leading-relaxed text-[15px] text-center">
              विधि, ध्वनि और रूप &nbsp;·&nbsp; तीन शक्तियाँ, एक मार्ग
            </p>
          </div>
        </div>
      </div>

      {/* Alternating rows */}
      <div className="space-y-20">
        {items.map((item, i) => (
          <div
            key={item.title}
            ref={(el) => { rowRefs.current[i] = el; }}
            className={`grid items-center gap-8 md:grid-cols-2`}
          >
            {/* Text — order changes based on imageRight */}
            <div
              className={`anim-text ${item.imageRight ? "md:order-1" : "md:order-2"}`}
            >
              <img
                src={item.titleImg}
                alt={item.title}
                className="h-8 md:h-12 w-auto mb-4 object-contain"
              />
              <p className="text-foreground/75 leading-relaxed text-[15px]">
                {item.text}
              </p>
            </div>

            {/* Image — order changes opposite to text */}
            <div
              className={`anim-img flex justify-center ${item.imageRight ? "md:order-2" : "md:order-1"}`}
            >
              <div className="relative inline-block">
                <img
                  src={item.emblem}
                  alt={item.title}
                  loading="lazy"
                  className="w-28 md:w-36 drop-shadow-[0_0_30px_oklch(0.55_0.24_28/0.35)]"
                />
                <img
                  src={item.topImg}
                  alt={`${item.title} top`}
                  loading="lazy"
                  className={`absolute inset-0 ${item.title === "यंत्र" ? "w-24 md:w-28" : "w-28 md:w-32"} m-auto`}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
