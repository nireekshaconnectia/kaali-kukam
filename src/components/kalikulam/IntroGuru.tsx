// IntroGuru.tsx
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import guru from "@/assets/guru.png";
import { useReducedMotion } from "../../hooks/useReducedMotion";

export function IntroGuru() {
  const sectionRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  
  // Trigger when any part of section is visible
  const isInView = useInView(sectionRef, { 
    amount: 0.1,
    once: false,  // Re-trigger every time
     margin: "0px 0px -20px 0px"
  });

  // Left to right animation for text
  const leftItemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" as const}
    },
    exit: { opacity: 0, x: -50, transition: { duration: 0.3 } }
  };

  // Right to left animation for image
  const rightItemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" as const}
    },
    exit: { opacity: 0, x: 50, transition: { duration: 0.3 } }
  };

  // Staggered text lines from bottom
  const textLineVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" as const }
    }),
    exit: { opacity: 0, y: 20, transition: { duration: 0.2 } }
  };

  if (prefersReducedMotion) {
    return (
      <section ref={sectionRef} className="mx-auto max-w-6xl px-4 py-8 md:px-6 md:py-12">
        <div className="grid items-center gap-6 md:gap-8 md:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="text-foreground/75 leading-relaxed text-[14px] md:text-[15px] pb-2">
              पूज्य आदिगुरु ,
            </p>
            <h2 className="font-body text-2xl md:text-3xl lg:text-4xl font-bold inline-block bg-linear-to-r from-[#EBB57C] to-[#94622C] bg-clip-text text-transparent">
              मांगीलाल भील
            </h2>
            <div className="space-y-3 md:space-y-4 text-foreground/75 leading-relaxed text-[13px] md:text-[15px] mt-3 md:mt-4">
              <p>तंत्र शास्त्र के सूत्र "गृहस्थो नास्ति मे तुल्य:" (गृहस्थ के समान कोई नहीं) को चरितार्थ करते हुए, माँ शारदा के परम उपासक पूज्य आदिगुरु मांगीलाल भील एक कुशल गृहस्थ और अडिग साधक का जीवंत उदाहरण हैं।</p>
              <p>मोरड़ी मावली की पावन भूमि पर रहते हुए, वे प्रकृति के पंचभूतों की साधना और जल-जंगल-ज़मीन के संरक्षण को ही अपनी ईश्वरीय आराधना मानते हैं। उन्होंने अपने आचरण से यह सिद्ध कर दिया है कि सच्ची साधना के लिए वन जाने की आवश्यकता नहीं, बल्कि समर्पित मन की आवश्यकता होती है।</p>
              <p>खेत की माटी हो या घर की रसोई - गुरुदेव के लिए प्रत्येक कर्म माँ की ही सेवा है। उनका जीवन उन सभी गृहस्थों के लिए एक आलोक-स्तंभ है, जो सांसारिक दायित्वों के साथ आध्यात्मिक मार्ग पर चलना चाहते हैं।</p>
            </div>
          </div>
          <div className="flex justify-center mt-4 md:mt-0">
            <img src={guru} alt="पूज्य आदिगुरु मांगीलाल भील" width={400} height={500} loading="lazy" className="w-48 sm:w-56 md:w-64 lg:w-full max-w-xs object-contain" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} className="mx-auto max-w-6xl px-4 py-8 md:px-6 md:py-12">
      <div className="grid items-center gap-6 md:gap-8 md:grid-cols-[1.4fr_1fr]">
        
        {/* Text block - animates from LEFT */}
        <motion.div
          variants={leftItemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          exit="exit"
        >
          <motion.p
            custom={0}
            variants={textLineVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-foreground/75 leading-relaxed text-[14px] md:text-[15px] pb-2"
          >
            पूज्य आदिगुरु ,
          </motion.p>

          <motion.h2
            custom={1}
            variants={textLineVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="font-body text-2xl md:text-3xl lg:text-4xl font-bold inline-block
             bg-linear-to-r from-[#EBB57C] to-[#94622C]
             bg-clip-text text-transparent"
          >
            मांगीलाल भील
          </motion.h2>

          <div className="space-y-3 md:space-y-4 text-foreground/75 leading-relaxed text-[13px] md:text-[15px] mt-3 md:mt-4">
            <motion.p
              custom={2}
              variants={textLineVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              तंत्र शास्त्र के सूत्र "गृहस्थो नास्ति मे तुल्य:" (गृहस्थ के समान
              कोई नहीं) को चरितार्थ करते हुए, माँ शारदा के परम उपासक पूज्य
              आदिगुरु मांगीलाल भील एक कुशल गृहस्थ और अडिग साधक का जीवंत उदाहरण
              हैं।
            </motion.p>
            <motion.p
              custom={3}
              variants={textLineVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              मोरड़ी मावली की पावन भूमि पर रहते हुए, वे प्रकृति के पंचभूतों की
              साधना और जल-जंगल-ज़मीन के संरक्षण को ही अपनी ईश्वरीय आराधना मानते
              हैं। उन्होंने अपने आचरण से यह सिद्ध कर दिया है कि सच्ची साधना के
              लिए वन जाने की आवश्यकता नहीं, बल्कि समर्पित मन की आवश्यकता होती
              है।
            </motion.p>
            <motion.p
              custom={4}
              variants={textLineVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              खेत की माटी हो या घर की रसोई - गुरुदेव के लिए प्रत्येक कर्म माँ की
              ही सेवा है। उनका जीवन उन सभी गृहस्थों के लिए एक आलोक-स्तंभ है, जो
              सांसारिक दायित्वों के साथ आध्यात्मिक मार्ग पर चलना चाहते हैं।
            </motion.p>
          </div>
        </motion.div>

        {/* Image - animates from RIGHT */}
        <motion.div
          className="flex justify-center mt-4 md:mt-0"
          variants={rightItemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          exit="exit"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <motion.img
            src={guru}
            alt="पूज्य आदिगुरु मांगीलाल भील"
            width={400}
            height={500}
            loading="lazy"
            className="w-48 sm:w-56 md:w-64 lg:w-full max-w-xs object-contain"
            animate={{
              y: [0, -6, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>

      </div>
    </section>
  );
}