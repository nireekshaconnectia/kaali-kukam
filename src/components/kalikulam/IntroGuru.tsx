// IntroGuru.tsx
import { motion } from "framer-motion";
import guru from "@/assets/guru.png";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { useIsMobile } from "../../hooks/use-mobile";

export function IntroGuru() {
  const prefersReducedMotion = useReducedMotion();
  const isMobile = useIsMobile();

  const dur = prefersReducedMotion ? 0 : isMobile ? 0.5 : 0.7;
  const xOffset = prefersReducedMotion || isMobile ? 0 : 50;
  const yOffset = prefersReducedMotion || isMobile ? 0 : 20;

  // Slide from left for text (like TantraSection text when imageRight is false)
  const slideLeft = {
    hidden: { opacity: 0, x: -xOffset, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: dur, ease: [0.22, 1, 0.36, 1] as const, delay: 0.05 },
    },
  };

  // Fade up for paragraphs
  const fadeUp = {
    hidden: { opacity: 0, y: yOffset, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: dur, ease: [0.22, 1, 0.36, 1] as const, delay: 0.05 },
    },
  };

  // Slide from right for image (like TantraSection image when imageRight is true)
  const slideRight = {
    hidden: { opacity: 0, x: xOffset, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: dur, ease: [0.22, 1, 0.36, 1] as const, delay: 0.1 },
    },
  };

  // Header animation (like TantraSection header)
  const headerVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: prefersReducedMotion ? 0 : 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section className="mx-auto max-w-5xl px-4 py-8 md:px-14 md:py-12">
      {/* Header with animation like TantraSection */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={headerVariants}
        className="mb-8 md:mb-12"
      >
        <p className="text-[#EBB57C] text-sm md:text-base tracking-wide">
          पूज्य आदिगुरु
        </p>
      </motion.div>

      <div className="grid items-center gap-6 md:gap-8 md:grid-cols-[1.4fr_1fr]">
        {/* Text block - slides from left like TantraSection text */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={slideLeft}
        >
          <motion.h2
            variants={fadeUp}
            className="font-body text-2xl md:text-3xl font-bold inline-block
             bg-linear-to-r from-[#EBB57C] to-[#94622C]
             bg-clip-text text-transparent mb-3 md:mb-4"
          >
            मांगीलाल भील
          </motion.h2>

          <div className="space-y-3 md:space-y-4 text-[#FFFFFF] leading-relaxed text-[13px] md:text-[15px]">
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

        {/* Image - slides from right like TantraSection image */}
        <motion.div
          className="flex justify-center mt-4 md:mt-0 md:pt-25"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={slideRight}
          whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
        >
          <div className="relative inline-block">
            <motion.img
              src={guru}
              alt="पूज्य आदिगुरु मांगीलाल भील"
              width={400}
              height={500}
              loading="lazy"
              className="w-48 sm:w-56 md:w-64 lg:w-full max-w-xs object-contain "
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}