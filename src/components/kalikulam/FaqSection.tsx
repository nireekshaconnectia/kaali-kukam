// FaqSection.tsx
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import vector from "@/assets/1.png";
import { useReducedMotion } from "../../hooks/useReducedMotion";

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
  const prefersReducedMotion = useReducedMotion();
  const dur = prefersReducedMotion ? 0 : 0.6;
  const yVal = prefersReducedMotion ? 0 : 30;

  // Container staggers children on enter — whileInView replaces useAnimation
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  };

  const fadeUp = {
    hidden: { opacity: prefersReducedMotion ? 1 : 0, y: yVal },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: dur, ease: "easeOut" as const },
    },
  };

  return (
    <motion.section
      className="mx-auto max-w-3xl px-6 py-16 w-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={containerVariants}
    >
      {/* Header image — simple fade-up, no 3D rotation */}
      <motion.div variants={fadeUp} className="mb-12 flex justify-center">
        <img
          src={vector}
          alt="संकल्प FAQ"
          className="h-auto w-48 md:w-80"
        />
      </motion.div>

      {/* Accordion — let the built-in height transition do the work */}
      <Accordion
        type="single"
        collapsible
        defaultValue="item-0"
        className="space-y-4 w-full"
      >
        {faqs.map((faq, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            className="w-full min-w-0"
          >
            <AccordionItem
              value={`item-${i}`}
              className="border-b border-[#1f1f1f] py-1 relative"
            >
              <div className="absolute bottom-0 left-0 right-0 h-[1px] overflow-hidden">
                <div className="h-full w-full bg-gradient-to-r from-transparent via-white/15 to-transparent bg-[length:200%_100%] animate-shimmer" />
              </div>
              <AccordionTrigger className="text-left text-[16px] md:text-[17px] font-medium hover:no-underline py-4 [&>svg]:text-[#D6A15F] [&>svg]:h-4 [&>svg]:w-4 [&>svg]:transition-transform [&>svg]:duration-300">
                <span className="bg-linear-to-r from-[#EBB57C] to-[#94622C] bg-clip-text text-transparent">
                  {faq.q}
                </span>
              </AccordionTrigger>

              <AccordionContent className="pt-2 pb-4">
                <div className="rounded-2xl bg-linear-to-br from-[#0d0d0d] to-[#151515] px-6 py-5 text-[#FFFFFF] text-[15px] md:text-[16px] leading-8 space-y-4 border border-[#2a2a2a]">
                  {faq.a.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </motion.section>
  );
}
