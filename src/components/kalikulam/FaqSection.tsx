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
      "काली कुलम में 'काली' का अर्थ है स्त्री और 'कुलम' का अर्थ है घराना - अर्थात् स्त्री शक्ति का कुल।",

      "यह एक ऐसी आध्यात्मिक और सामाजिक संस्था है जो माँ काली की असीम ऊर्जा, करुणा और न्याय के सिद्धांतों पर आधारित है। हमारा उद्देश्य केवल धार्मिक अनुष्ठान नहीं - बल्कि मानवता के भीतर छिपी शक्ति को जागृत करना है।",

      "काली कुलम वह स्थान है जहाँ जाति, पंथ या भेदभाव का कोई स्थान नहीं - केवल प्रेम, भक्ति और निःस्वार्थ सेवा।",
    ],
  },
  {
    q: "2. इस युग में काली कुलम की आवश्यकता क्यों है?",
    a: [
      "आज का मनुष्य बाहर से सशक्त और भीतर से रिक्त है। भौतिक सुख है, पर शांति नहीं। सफलता है, पर संतोष नहीं। परिवार है, पर जुड़ाव नहीं। काली कुलम उस रिक्तता को भरने का प्रयास है - सही मार्गदर्शन, सच्ची साधना और एक जीवंत परंपरा के माध्यम से। यहाँ न कोई आडंबर है, न दिखावा - केवल शुद्ध साधना और सच्चा मार्ग।",
    ],
  },
  {
    q: "3. क्या बिना गुरु के साधना संभव है?",
    a: [
      "बिना गुरु के साधना वैसी है जैसे बिना नाविक के नाव - दिशा तो होगी, पर किनारा नहीं मिलेगा। मंत्र पुस्तक में मिल सकता है, यंत्र बाज़ार में मिल सकता है - पर शक्ति केवल गुरु से मिलती है। गुरु वह दीपक है जो अपनी लौ से दूसरे दीपक को जलाता है। बिना इस दीप-दीक्षा के साधना अधूरी रहती है।",
    ],
  },
  {
    q: "4. काली कुलम से जुड़ने के बाद जीवन में क्या बदलाव आएगा?",
    a: [
      "मन को दिशा मिलेगी, जीवन को अर्थ मिलेगा। परिवार में सौहार्द आएगा, भीतर शांति आएगी। भय, नकारात्मकता और जीवन की बाधाएँ धीरे-धीरे दूर होंगी। गृहस्थ जीवन की दुविधाएँ सुलझेंगी और माँ काली की कृपा से जीवन के हर क्षेत्र में स्पष्टता और आत्मविश्वास आएगा।",
    ],
  },
  {
    q: "5. क्या तंत्र साधना केवल विशेष लोगों के लिए है?",
    a: [
      "तंत्र किसी एक वर्ग, जाति या पंथ की विद्या नहीं - यह जीवन की विद्या है। जो साँस लेता है, जो अनुभव करता है, जो जीना चाहता है - तंत्र उसी के लिए है। काली कुलम में गृहस्थ भी साधक है, स्त्री भी साधक है, युवा भी साधक है। यहाँ केवल एक योग्यता है - सच्ची जिज्ञासा।",
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
    hidden: { opacity: prefersReducedMotion ? 1 : 0, y: yVal, scale: prefersReducedMotion ? 1 : 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: dur, ease: "easeOut" as const },
    },
  };

  return (
    <motion.section
      className="mx-auto px-6 md:px-60 pt-16 pb-24 md:pb-48 w-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.15 }}
      variants={containerVariants}
    >
      {/* Header image — simple fade-up, no 3D rotation */}
      <motion.div variants={fadeUp} className="mb-12 flex justify-center">
        <img
          src={vector}
          alt="संकल्प FAQ"
          className="h-auto w-56 md:w-64"
        />
      </motion.div>

      {/* Accordion — let the built-in height transition do the work */}
      <Accordion
        type="single"
        collapsible
        defaultValue="item-0"
        className="space-y-4 w-full md:w-[87%] lg:w-[82%]"
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
              <div className="absolute bottom-0 left-0 right-0 h-px overflow-hidden">
                <div className="h-full w-full bg-linear-to-r from-transparent via-white/15 to-transparent bg-size-[200%_100%] animate-shimmer" />
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
