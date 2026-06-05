// FaqSection.tsx
import { motion, useInView, useAnimation, type Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";
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

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const headerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.9,
    rotateX: -15,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 12,
      duration: 0.8,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.6,
    },
  },
};

export function FaqSection() {
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView && !prefersReducedMotion) {
      controls.start("visible");
    }
  }, [isInView, controls, prefersReducedMotion]);

  return (
    <motion.section
      ref={sectionRef}
      className="mx-auto max-w-3xl px-6 py-16 w-full overflow-hidden relative"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      {/* Animated Heading with Enhanced Effects */}
      <motion.div variants={headerVariants} className="relative mb-12">
        {/* Multiple pulsing background circles */}
        {!prefersReducedMotion && (
          <>
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[#D6A15F]/5 blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#D6A15F]/3 blur-3xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />
          </>
        )}

        <motion.img
          src={vector}
          alt="संकल्प FAQ"
          className="mx-auto h-auto w-full max-w-sm relative z-10"
          animate={
            prefersReducedMotion
              ? {}
              : {
                  scale: [1, 1.05, 1],
                  rotateY: [0, 10, 0, -10, 0],
                }
          }
          transition={{
            scale: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            },
            rotateY: {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            },
            filter: {
              duration: 4,
              repeat: Infinity,
              repeatDelay: 1,
              ease: "easeInOut",
            },
          }}
        />
      </motion.div>

      {/* FAQ Accordion */}
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
            whileHover={
              prefersReducedMotion
                ? {}
                : {
                    scale: 1.02,
                    transition: { type: "spring", stiffness: 400, damping: 20 },
                  }
            }
            onHoverStart={() => setHoveredIndex(i)}
            onHoverEnd={() => setHoveredIndex(null)}
          >
            <AccordionItem
              value={`item-${i}`}
              className="border-b border-[#1f1f1f] py-1 group"
            >
              <AccordionTrigger className="text-left text-[15px] font-medium text-[#D6A15F] hover:no-underline py-4 [&>svg]:text-[#D6A15F] [&>svg]:h-4 [&>svg]:w-4 [&>svg]:transition-transform [&>svg]:duration-300">
                <motion.span
                  className="inline-block"
                  whileHover={prefersReducedMotion ? {} : { x: 12 }}
                  animate={
                    hoveredIndex === i && !prefersReducedMotion
                      ? {
                          x: [0, 8, 0],
                          color: ["#D6A15F", "#E8B97A", "#D6A15F"],
                        }
                      : {}
                  }
                  transition={{
                    x: { duration: 0.5, repeat: Infinity },
                    color: { duration: 0.8, repeat: Infinity },
                  }}
                >
                  {faq.q}
                </motion.span>
              </AccordionTrigger>

              <AccordionContent className="pt-2 pb-4">
                <motion.div
                  className="rounded-2xl bg-linear-to-br from-[#111111] to-[#1a1a1a] px-6 py-5 text-[#D8D8D8] text-[14px] leading-7 space-y-4 border border-[#2a2a2a] relative overflow-hidden"
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  whileHover={
                    prefersReducedMotion
                      ? {}
                      : {
                          scale: 1.02,
                          borderColor: "#D6A15F",
                          transition: { duration: 0.2 },
                        }
                  }
                >
                  {/* Animated gradient background on hover */}
                  {!prefersReducedMotion && (
                    <motion.div
                      className="absolute inset-0 bg-linear-to-r from-transparent via-[#D6A15F]/5 to-transparent -translate-x-full"
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                  )}

                  {faq.a.map((p, j) => (
                    <motion.p
                      key={j}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: j * 0.1,
                        duration: 0.5,
                        ease: "easeOut",
                      }}
                      className="hover:text-white transition-colors duration-300 relative"
                      whileHover={
                        prefersReducedMotion
                          ? {}
                          : {
                              x: 5,
                              transition: { duration: 0.2 },
                            }
                      }
                    >
                      {p}
                    </motion.p>
                  ))}

                  {/* Animated decorative elements in content */}
                  {!prefersReducedMotion && (
                    <>
                      <motion.div
                        className="absolute bottom-2 right-2 w-8 h-8 border border-[#D6A15F]/20 rounded-full"
                        animate={{
                          scale: [1, 1.2, 1],
                          rotate: [0, 180, 360],
                        }}
                        transition={{
                          duration: 10,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                      <motion.div
                        className="absolute top-2 left-2 w-4 h-4 bg-[#D6A15F]/10 rounded-full"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.3, 0.8, 0.3],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    </>
                  )}
                </motion.div>
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>

     
    </motion.section>
  );
}