// IntroGuru.tsx
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";
import guru from "@/assets/guru.png";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { useIsMobile } from "../../hooks/use-mobile";

export function IntroGuru() {
  const prefersReducedMotion = useReducedMotion();
  const isMobile = useIsMobile();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      // Reset to hidden first, then animate to visible
      controls.set("hidden");
      controls.start("visible");
    } else {
      controls.set("hidden");
    }
  }, [isInView, controls]);

  const dur = prefersReducedMotion ? 0 : isMobile ? 0.5 : 0.7;
  const xOffset = prefersReducedMotion || isMobile ? 0 : 50;
  const yOffset = prefersReducedMotion || isMobile ? 0 : 20;

  // Text animations - slides from left
  const slideLeft = {
    hidden: { opacity: 0, x: -xOffset },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: dur, ease: [0.22, 1, 0.36, 1] as const, delay: 0.05 },
    },
  };

  // Fade up animation for paragraphs
  const fadeUp = {
    hidden: { opacity: 0, y: yOffset },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: dur, ease: [0.22, 1, 0.36, 1] as const, delay: 0.05 },
    },
  };

  // Image animation - slides from right
  const imageAnimation = {
    hidden: { opacity: 0, x: xOffset, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: dur, ease: [0.22, 1, 0.36, 1] as const, delay: 0.1 },
    },
  };

  return (
    <section ref={sectionRef} className="mx-auto max-w-5xl px-4 py-8 md:px-14 md:py-12">
      <div className="grid items-center gap-6 md:gap-8 md:grid-cols-[1.4fr_1fr]">
        {/* Text block - animates when in view */}
        <div>
          <motion.p
            animate={controls}
            variants={slideLeft}
            className="text-[#FFFFFF] leading-relaxed text-[14px] md:text-[15px] pb-2"
          >
            पूज्य आदिगुरु ,
          </motion.p>

          <motion.h2
            animate={controls}
            variants={fadeUp}
            className="font-body text-2xl md:text-3xl font-bold inline-block
             bg-linear-to-r from-[#EBB57C] to-[#94622C]
             bg-clip-text text-transparent"
          >
            मांगीलाल भील
          </motion.h2>

          <div className="space-y-3 md:space-y-4 text-[#FFFFFF] leading-relaxed text-[13px] md:text-[15px] mt-3 md:mt-4">
            <motion.p
              animate={controls}
              variants={fadeUp}
            >
              तंत्र शास्त्र के सूत्र "<span className="font-bold">गृहस्थो नास्ति मे तुल्य:</span>" (गृहस्थ के समान
              कोई नहीं) को चरितार्थ करते हुए, माँ शारदा के परम उपासक पूज्य
              आदिगुरु मांगीलाल भील एक कुशल गृहस्थ और अडिग साधक का जीवंत उदाहरण
              हैं।
            </motion.p>
            <motion.p
              animate={controls}
              variants={fadeUp}
            >
              मोरड़ी मावली की पावन भूमि पर रहते हुए, वे प्रकृति के पंचभूतों की
              साधना और जल-जंगल-ज़मीन के संरक्षण को ही अपनी ईश्वरीय आराधना मानते
              हैं। उन्होंने अपने आचरण से यह सिद्ध कर दिया है कि सच्ची साधना के
              लिए वन जाने की आवश्यकता नहीं, बल्कि समर्पित मन की आवश्यकता होती है।
            </motion.p>
            <motion.p
              animate={controls}
              variants={fadeUp}
            >
              खेत की माटी हो या घर की रसोई - गुरुदेव के लिए प्रत्येक कर्म माँ की
              ही सेवा है। उनका जीवन उन सभी गृहस्थों के लिए एक आलोक-स्तंभ है, जो
              सांसारिक दायित्वों के साथ आध्यात्मिक मार्ग पर चलना चाहते हैं।
            </motion.p>
          </div>
        </div>

        {/* Image - independent animation with delay */}
        <motion.div
          className="flex justify-center mt-4 md:mt-0 md:pt-25"
          animate={controls}
          variants={imageAnimation}
          whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
        >
          <img
            src={guru}
            alt="पूज्य आदिगुरु मांगीलाल भील"
            width={400}
            height={500}
            loading="lazy"
            className="w-48 sm:w-56 md:w-64 lg:w-full max-w-xs object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}