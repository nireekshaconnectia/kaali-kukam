import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import vector from "@/assets/1.png";

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

const listVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export function FaqSection() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16 w-full">

      {/* Heading image with bounce and rotation */}
      <motion.img
        src={vector}
        alt="संकल्प FAQ"
        className="mx-auto mb-8 h-auto w-full max-w-sm"
        initial={{ opacity: 0, y: 30, rotateX: -15 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        viewport={{  amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut", type: "spring" }}
      />

      {/* FAQ list with staggered reveal */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{  amount: 0.1 }}
        variants={listVariants}
      >
        <Accordion
          type="single"
          collapsible
          defaultValue="item-0"
          className="space-y-4 w-full"
        >
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="w-full min-w-0"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <AccordionItem
                value={`item-${i}`}
                className="rounded-lg border border-border bg-card/60 px-5 w-full backdrop-blur-sm transition-all duration-300 hover:border-gold-soft/30"
              >
                <AccordionTrigger
                  className="font-display text-left bg-linear-to-r from-[#EBB57C] to-[#94622C] bg-clip-text text-transparent hover:no-underline group"
                >
                  <motion.span
                    className="inline-block"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {faq.q}
                  </motion.span>
                </AccordionTrigger>
                <AccordionContent className="space-y-3 text-foreground leading-relaxed">
                  {faq.a.map((p, j) => (
                    <motion.p
                      key={j}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: j * 0.1, duration: 0.3 }}
                    >
                      {p}
                    </motion.p>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </motion.div>
    </section>
  );
}