import { useEffect, useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { useScrollReveal } from "../../hooks/useScrollReveal";

const faqs = [
  {
    q: "1. काली कुलम क्या है और यह अन्य से अलग क्यों है?",
    a: [
      "काली कुलम में 'काली' का अर्थ है शक्ति और 'कुलम' का अर्थ है घराना - अर्थात् शक्ति का कुल।",
      "यह एक ऐसी आध्यात्मिक और सामाजिक संस्था है जो माँ काली की असीम ऊर्जा, करुणा और न्याय के सिद्धांतों पर आधारित है। हमारा उद्देश्य केवल धार्मिक अनुष्ठान नहीं - बल्कि मानवता के भीतर छिपी शक्ति को जागृत करना है।",
      "काली कुलम वह स्थान है जहाँ जाति, पंथ या भेदभाव का कोई स्थान नहीं - केवल प्रेम, भक्ति और निःस्वार्थ सेवा।",
    ],
  },
  {
    q: "2. इस युग में काली कुलम की आवश्यकता क्यों है?",
    a: [
      "प्रत्येक युग में अधर्म बढ़ने पर शक्ति का आह्वान आवश्यक हो जाता है। काली कुलम इसी चेतना को जागृत करने का माध्यम है।",
    ],
  },
  {
    q: "3. क्या बिना गुरु के साधना संभव है?",
    a: [
      "गुरु के मार्गदर्शन के बिना साधना का मार्ग कठिन है। गुरु ही साधक को सही दिशा और सुरक्षा प्रदान करते हैं।",
    ],
  },
  {
    q: "4. काली कुलम से जुड़ने के बाद जीवन में क्या बदलाव आएगा?",
    a: [
      "आत्मबल, स्पष्टता और भीतरी शांति का अनुभव होता है, साथ ही जीवन में एक नया उद्देश्य जागृत होता है।",
    ],
  },
  {
    q: "5. क्या तंत्र साधना केवल विशेष लोगों के लिए है?",
    a: [
      "नहीं, सच्ची श्रद्धा और समर्पण रखने वाला प्रत्येक साधक इस मार्ग पर चल सकता है।",
    ],
  },
];

export function FaqSection() {
  const headingRef = useScrollReveal<HTMLHeadingElement>({ threshold: 0.3 });
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    itemRefs.current.forEach((el, i) => {
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = "translateY(24px)";
      el.style.transition = `opacity 0.6s ease ${i * 80}ms, transform 0.6s ease ${i * 80}ms`;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
            observer.disconnect();
          }
        },
        { threshold: 0.1 },
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section className="mx-auto max-w-3xl px-6 py-16 w-full">
      <h2
        ref={headingRef}
        className="text-center font-display text-4xl md:text-5xl text-foreground mb-12"
      >
        प्रश्नोत्तर
      </h2>

      <Accordion
        type="single"
        collapsible
        defaultValue="item-0"
        className="space-y-3 w-full"
      >
        {faqs.map((faq, i) => (
          <div
            key={i}
            ref={(el) => {
              itemRefs.current[i] = el;
            }}
            className="w-full min-w-0"
          >
            <AccordionItem
              value={`item-${i}`}
              className="rounded-lg border border-border bg-card/60 px-5 w-full"
            >
              <AccordionTrigger className="font-display text-left text-gold-soft hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="space-y-3 text-foreground/75 leading-relaxed">
                {faq.a.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
              </AccordionContent>
            </AccordionItem>
          </div>
        ))}
      </Accordion>
    </section>
  );
}
