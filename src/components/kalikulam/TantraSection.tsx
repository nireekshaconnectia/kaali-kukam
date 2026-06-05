// FIXED: Typewriter component without complex hooks
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
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
    text: "तंत्र न कोई रहस्य है, न कोई भय की विद्या। यह इस सृष्टि की समग्र शक्ति को समझने और जीवन में उतारने का मार्ग है। जीवन का हर अनुभव, सुख हो या दुख, परिवार हो या एकांत, सब साधना है।",
    imageRight: true,
  },
  {
    title: "मंत्र",
    titleImg: titleMantra,
    topImg: manthraaNew,
    emblem: roundShape,
    text: "मंत्र वह दिव्य ध्वनि है जो सृष्टि के आरंभ से विद्यमान है। प्रत्येक मंत्र एक विशेष शक्ति का वाहक है। जब इसे सही विधि, सही भाव और सही समय पर उच्चारित किया जाए तो यह जीवन को बदलने की क्षमता रखता है।",
    imageRight: false,
  },
  {
    title: "यंत्र",
    titleImg: titleYantra,
    topImg: yanthraa,
    emblem: roundShape,
    text: "यंत्र एक पवित्र ज्यामितीय संरचना है जिसमें देवी-देवताओं की शक्ति को आह्वान किया जाता है। यह केवल एक चित्र नहीं, यह एक जीवंत ऊर्जा केंद्र है। घर में, व्यापार में और जीवन के हर क्षेत्र में यंत्र एक अदृश्य सुरक्षा कवच का कार्य करता है।",
    imageRight: true,
  },
];

// FIXED: Simpler typewriter hook without edge cases
function useTypewriter(text: string, speed = 30) {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const ref = useRef(null);
  const isInView = useInView(ref, {  amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;
    
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
        setIsTyping(false);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [isInView, text, speed]);

  return { displayText, isTyping, ref };
}

function TypewriterText({ text, className }: { text: string; className?: string }) {
  const { displayText, isTyping, ref } = useTypewriter(text, 25);

  return (
    <p ref={ref} className={className}>
      {displayText || (displayText === "" && text.slice(0, 1)) || text}
      {isTyping && displayText.length < text.length && (
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="inline-block w-0.5 h-4 bg-amber-500 ml-0.5"
        />
      )}
    </p>
  );
}

const headerVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" as const }
  },
};

const textVariants = {
  hidden: (fromLeft: boolean) => ({ opacity: 0, x: fromLeft ? -60 : 60 }),
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const, delay: 0.1 },
  },
};

const imgVariants = {
  hidden: (fromLeft: boolean) => ({ opacity: 0, x: fromLeft ? 60 : -60, scale: 0.8 }),
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const, delay: 0.12 },
  },
};

export function TantraSection() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">

      <motion.div
        className="mb-16 flex flex-col items-center text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{  amount: 0.3 }}
        variants={headerVariants}
      >
        <motion.div className="relative inline-block">
          <img
            src={titleTantraMantraYantra}
            alt="तंत्र . मंत्र . यंत्र"
            className="h-16 md:h-24 w-auto object-contain"
          />
        </motion.div>
      </motion.div>

      <div className="space-y-24">
        {items.map((item, _idx) => (
          <div
            key={item.title}
            className="grid items-center gap-8 md:grid-cols-2"
          >
            <motion.div
              className={`${item.imageRight ? "md:order-1" : "md:order-2"}`}
              custom={item.imageRight}
              initial="hidden"
              whileInView="visible"
              viewport={{  amount: 0.25 }}
              variants={textVariants}
            >
              <img
                src={item.titleImg}
                alt={item.title}
                className="h-8 md:h-12 w-auto mb-4 object-contain"
              />
              <TypewriterText 
                text={item.text} 
                className="text-foreground/75 leading-relaxed text-[15px]"
              />
            </motion.div>

            <motion.div
              className={`flex justify-center ${item.imageRight ? "md:order-2" : "md:order-1"}`}
              custom={item.imageRight}
              initial="hidden"
              whileInView="visible"
              viewport={{  amount: 0.25 }}
              variants={imgVariants}
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
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}