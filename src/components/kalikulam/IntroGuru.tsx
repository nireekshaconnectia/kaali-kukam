// IntroGuru.tsx
import { motion } from "framer-motion";
import guru from "@/assets/guru.png";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { useIsMobile } from "../../hooks/use-mobile";

export function IntroGuru() {
  const prefersReducedMotion = useReducedMotion();
  const isMobile = useIsMobile();

  const xOffset = isMobile ? 24 : 50;
  const dur = prefersReducedMotion ? 0 : 0.55;
  const xVal = prefersReducedMotion ? 0 : xOffset;
  const yVal = prefersReducedMotion ? 0 : 20;

  // Single parent variant drives the stagger — no manual isInView needed
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const slideLeft = {
    hidden: { opacity: prefersReducedMotion ? 1 : 0, x: -xVal },
    visible: { opacity: 1, x: 0, transition: { duration: dur, ease: "easeOut" as const } },
  };

  const slideRight = {
    hidden: { opacity: prefersReducedMotion ? 1 : 0, x: xVal },
    visible: { opacity: 1, x: 0, transition: { duration: dur, ease: "easeOut" as const } },
  };

  const fadeUp = {
    hidden: { opacity: prefersReducedMotion ? 1 : 0, y: yVal },
    visible: { opacity: 1, y: 0, transition: { duration: dur, ease: "easeOut" as const } },
  };

  return (
    <section className="mx-auto max-w-5xl px-4 py-8 md:px-14 md:py-12">
      <motion.div
        className="grid items-center gap-6 md:gap-8 md:grid-cols-[1.4fr_1fr]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.15 }}
        variants={containerVariants}
      >
        {/* Text block */}
        <motion.div variants={slideLeft}>
          <motion.p
            variants={fadeUp}
            className="text-[#FFFFFF] leading-relaxed text-[14px] md:text-[15px] pb-2"
          >
            पूज्य आदिगुरु ,
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="font-body text-2xl md:text-3xl font-bold inline-block
             bg-linear-to-r from-[#EBB57C] to-[#94622C]
             bg-clip-text text-transparent"
          >
            मांगीलाल भील
          </motion.h2>

          <div className="space-y-3 md:space-y-4 text-[#FFFFFF] leading-relaxed text-[13px] md:text-[15px] mt-3 md:mt-4">
            <motion.p variants={fadeUp}>
              तंत्र शास्त्र के सूत्र "<span className="font-bold">गृहस्थो नास्ति मे तुल्य:</span>" (गृहस्थ के समान
              कोई नहीं) को चरितार्थ करते हुए, माँ शारदा के परम उपासक पूज्य
              आदिगुरु मांगीलाल भील एक कुशल गृहस्थ और अडिग साधक का जीवंत उदाहरण
              हैं।
            </motion.p>
            <motion.p variants={fadeUp}>
              मोरड़ी मावली की पावन भूमि पर रहते हुए, वे प्रकृति के पंचभूतों की
              साधना और जल-जंगल-ज़मीन के संरक्षण को ही अपनी ईश्वरीय आराधना मानते
              हैं। उन्होंने अपने आचरण से यह सिद्ध कर दिया है कि सच्ची साधना के
              लिए वन जाने की आवश्यकता नहीं, बल्कि समर्पित मन की आवश्यकता होती है।
            </motion.p>
            <motion.p variants={fadeUp}>
              खेत की माटी हो या घर की रसोई - गुरुदेव के लिए प्रत्येक कर्म माँ की
              ही सेवा है। उनका जीवन उन सभी गृहस्थों के लिए एक आलोक-स्तंभ है, जो
              सांसारिक दायित्वों के साथ आध्यात्मिक मार्ग पर चलना चाहते हैं।
            </motion.p>
          </div>
        </motion.div>

        {/* Image — slides from right, no infinite float */}
        <motion.div
          className="flex justify-center mt-4 md:mt-0 md:pt-[100px]"
          variants={slideRight}
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
      </motion.div>
    </section>
  );
}
