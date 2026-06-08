// IntroGuru.tsx
import { motion } from "framer-motion";
import guru from "@/assets/guru.png";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { useIsMobile } from "../../hooks/use-mobile";

export function IntroGuru() {
  const prefersReducedMotion = useReducedMotion();
  const isMobile = useIsMobile();

  // Exact same duration/offset logic as TantraSection
  const dur = prefersReducedMotion ? 0 : isMobile ? 0.5 : 0.7;
  const xOffset = prefersReducedMotion || isMobile ? 0 : 60;

  // Exact same slideText / slideImg factories as TantraSection
  const slideText = (fromLeft: boolean) => ({
    hidden: {
      opacity: prefersReducedMotion ? 1 : 0,
      x: fromLeft ? -xOffset : xOffset,
      scale: prefersReducedMotion ? 1 : 0.95,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: dur, ease: [0.22, 1, 0.36, 1] as const, delay: 0.05 },
    },
  });

  const slideImg = (fromLeft: boolean) => ({
    hidden: {
      opacity: prefersReducedMotion ? 1 : 0,
      x: fromLeft ? xOffset : -xOffset,
      scale: prefersReducedMotion ? 1 : 0.9,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: dur, ease: [0.22, 1, 0.36, 1] as const, delay: 0.1 },
    },
  });

  // Exact same headerVariants as TantraSection
  const headerVariants = {
    hidden: { opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: prefersReducedMotion ? 0 : 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section className="mx-auto max-w-5xl px-6 md:px-14 py-16">
      {/* Header — exact same structure as TantraSection */}
      <motion.div
        className="mb-16 flex flex-col items-center text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.4 }}
        variants={headerVariants}
      >
        <p className="text-[#EBB57C] text-sm md:text-base tracking-wide">
          पूज्य आदिगुरु
        </p>
      </motion.div>

      {/* Single item grid — same structure as TantraSection items loop */}
      <div className="grid items-center gap-8 md:grid-cols-2">
        {/* Text — slides from left (imageRight: true → text is order-1) */}
        <motion.div
          className="md:order-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={slideText(true)}
        >
          <h2
            className="font-body text-2xl md:text-3xl font-bold
             bg-linear-to-r from-[#EBB57C] to-[#94622C]
             bg-clip-text text-transparent mb-4"
          >
            मांगीलाल भील
          </h2>

          <div className="space-y-4 text-[#FFFFFF] leading-relaxed text-[15px]">
            <p>
              तंत्र शास्त्र के सूत्र "<span className="font-bold">गृहस्थो नास्ति मे तुल्य:</span>" (गृहस्थ के समान
              कोई नहीं) को चरितार्थ करते हुए, माँ शारदा के परम उपासक पूज्य
              आदिगुरु मांगीलाल भील एक कुशल गृहस्थ और अडिग साधक का जीवंत उदाहरण
              हैं।
            </p>
            <p>
              मोरड़ी मावली की पावन भूमि पर रहते हुए, वे प्रकृति के पंचभूतों की
              साधना और जल-जंगल-ज़मीन के संरक्षण को ही अपनी ईश्वरीय आराधना मानते
              हैं। उन्होंने अपने आचरण से यह सिद्ध कर दिया है कि सच्ची साधना के
              लिए वन जाने की आवश्यकता नहीं, बल्कि समर्पित मन की आवश्यकता होती है।
            </p>
            <p>
              खेत की माटी हो या घर की रसोई - गुरुदेव के लिए प्रत्येक कर्म माँ की
              ही सेवा है। उनका जीवन उन सभी गृहस्थों के लिए एक आलोक-स्तंभ है, जो
              सांसारिक दायित्वों के साथ आध्यात्मिक मार्ग पर चलना चाहते हैं।
            </p>
          </div>
        </motion.div>

        {/* Image — slides from right (imageRight: true → image is order-2) */}
        <motion.div
          className="flex justify-center md:order-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={slideImg(true)}
        >
          <div className="relative inline-block" style={{ willChange: "transform" }}>
            <img
              src={guru}
              alt="पूज्य आदिगुरु मांगीलाल भील"
              width={400}
              height={500}
              loading="lazy"
              decoding="async"
              className="w-48 sm:w-56 md:w-64 lg:w-full max-w-xs object-contain"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}