// FIXED: IntroGuru.tsx
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import guru from "@/assets/guru.png";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const},
  },
};

// FIXED: Simplified name animation without character splitting
export function IntroGuru() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {  amount: 0.2 });

  return (
    <section ref={sectionRef} className="mx-auto max-w-6xl px-6 py-12">
      <div className="grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">

        {/* Text block */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.p
            variants={itemVariants}
            className="text-foreground/75 leading-relaxed text-[15px] pb-2"
          >
            पूज्य आदिगुरु ,
          </motion.p>

          <motion.h2
            variants={itemVariants}
            className="font-body text-3xl md:text-4xl font-bold inline-block
             bg-linear-to-r from-[#EBB57C] to-[#94622C]
             bg-clip-text text-transparent"
          >
            मांगीलाल भील
          </motion.h2>

          <motion.div
            variants={containerVariants}
            className="space-y-4 text-foreground/75 leading-relaxed text-[15px] mt-4"
          >
            <motion.p variants={itemVariants}>
              तंत्र शास्त्र के सूत्र "गृहस्थो नास्ति मे तुल्य:" (गृहस्थ के समान
              कोई नहीं) को चरितार्थ करते हुए, माँ शारदा के परम उपासक पूज्य
              आदिगुरु मांगीलाल भील एक कुशल गृहस्थ और अडिग साधक का जीवंत उदाहरण
              हैं।
            </motion.p>
            <motion.p variants={itemVariants}>
              मोरड़ी मावली की पावन भूमि पर रहते हुए, वे प्रकृति के पंचभूतों की
              साधना और जल-जंगल-ज़मीन के संरक्षण को ही अपनी ईश्वरीय आराधना मानते
              हैं। उन्होंने अपने आचरण से यह सिद्ध कर दिया है कि सच्ची साधना के
              लिए वन जाने की आवश्यकता नहीं, बल्कि समर्पित मन की आवश्यकता होती
              है।
            </motion.p>
            <motion.p variants={itemVariants}>
              खेत की माटी हो या घर की रसोई - गुरुदेव के लिए प्रत्येक कर्म माँ की
              ही सेवा है। उनका जीवन उन सभी गृहस्थों के लिए एक आलोक-स्तंभ है, जो
              सांसारिक दायित्वों के साथ आध्यात्मिक मार्ग पर चलना चाहते हैं।
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Image with floating animation */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
          whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
          viewport={{  amount: 0.15 }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
          whileHover={{ scale: 1.02 }}
        >
          <motion.img
            src={guru}
            alt="पूज्य आदिगुरु मांगीलाल भील"
            width={400}
            height={500}
            loading="lazy"
            className="w-64 md:w-full max-w-xs object-contain"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

      </div>
    </section>
  );
}