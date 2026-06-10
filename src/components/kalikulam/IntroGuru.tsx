// IntroGuru.tsx
import guru from "@/assets/guru.png";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function AnimatedPara({
  children,
  isMobile,
  hasPageLoaded,
}: {
  children: React.ReactNode;
  isMobile: boolean;
  hasPageLoaded: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });
  const [visible, setVisible] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hasDelayedOnce = useRef(false);

  useEffect(() => {
    if (!isMobile) return;

    if (isInView) {
      if (!hasDelayedOnce.current && !hasPageLoaded) {
        timerRef.current = setTimeout(() => {
          hasDelayedOnce.current = true;
          setVisible(true);
        }, 10000);
      } else {
        hasDelayedOnce.current = true;
        setVisible(true);
      }
    } else {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
      setVisible(false);
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [isInView, isMobile, hasPageLoaded]);

  if (!isMobile) {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: -80 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -80 }}
        transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={visible ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0, x: -40 },
        visible: {
          opacity: 1,
          x: 0,
          transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function IntroGuru() {
  const ref = useRef(null);
  const desktopImageRef = useRef(null); // separate ref for desktop image
  const mobileImageRef = useRef(null);  // separate ref for mobile image
  const [isMobile, setIsMobile] = useState(false);
  const [hasPageLoaded, setHasPageLoaded] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setHasPageLoaded(true), 8000);
    return () => clearTimeout(t);
  }, []);

  const isDesktopImageInView = useInView(desktopImageRef, { once: false, amount: 0.4 });
  const isMobileImageInView = useInView(mobileImageRef, { once: false, amount: 0.2 });

  const imageVariants = {
    hidden: { opacity: 0, x: isMobile ? 40 : 80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: isMobile ? 0.5 : 0.7,
        ease: [0.4, 0, 0.2, 1] as const,
        delay: isMobile ? 0.15 : 0.2,
      },
    },
  };

  return (
    <section className="w-full overflow-x-clip px-6 md:px-61.5 pt-16.5">
      <div ref={ref} className="max-w-7xl mx-auto">
        <div className="relative">

          {/* Desktop: floated image from right */}
          <motion.div
            ref={desktopImageRef}
            className="hidden md:block"
            style={{
              float: "right",
              width: "42%",
              marginRight: isMobile ? "0px" : "-30px",
              shapeOutside: `polygon(
                22% 0%,
                78% 0%,
                100% 5%,
                100% 100%,
                0%  100%,
                0%  60%,
                8%  40%,
                14% 18%,
                18% 8%
              )`,
              shapeMargin: "16px",
            }}
            initial="hidden"
            animate={isDesktopImageInView ? "visible" : "hidden"}
            variants={imageVariants}
          >
            <img
              src={guru}
              alt="पूज्य आदिगुरु मांगीलाल भील"
              width={600}
              height={500}
              loading="lazy"
              decoding="async"
              className="w-full max-w-xl object-contain mt-10"
            />
          </motion.div>

          {/* Label */}
          <AnimatedPara isMobile={isMobile} hasPageLoaded={hasPageLoaded}>
            <p className="text-white text-sm md:text-lg tracking-wide mb-2">
              पूज्य आदिगुरु
            </p>
          </AnimatedPara>

          {/* Heading */}
          <AnimatedPara isMobile={isMobile} hasPageLoaded={hasPageLoaded}>
            <h2
              className="font-body text-2xl md:text-3xl font-bold
              bg-linear-to-r from-[#EBB57C] to-[#94622C]
              bg-clip-text text-transparent mb-4"
            >
              मांगीलाल भील
            </h2>
          </AnimatedPara>

          {/* Para 1 */}
          <AnimatedPara isMobile={isMobile} hasPageLoaded={hasPageLoaded}>
            <p className="text-[#FFFFFF] leading-relaxed tracking-wide text-[18px] mb-6">
              तंत्र शास्त्र के सूत्र "
              <span className="font-bold">गृहस्थो नास्ति मे तुल्य:</span>"
              (गृहस्थ के समान कोई नहीं) को चरितार्थ करते हुए, माँ शारदा के
              परम उपासक पूज्य आदिगुरु मांगीलाल भील एक कुशल गृहस्थ और अडिग
              साधक का जीवंत उदाहरण हैं।
            </p>
          </AnimatedPara>

          {/* Para 2 */}
          <AnimatedPara isMobile={isMobile} hasPageLoaded={hasPageLoaded}>
            <p className="text-[#FFFFFF] leading-relaxed tracking-wide text-[18px] mb-6">
              मोरड़ी मावली की पावन भूमि पर रहते हुए, वे प्रकृति के पंचभूतों
              की साधना और जल-जंगल-ज़मीन के संरक्षण को ही अपनी ईश्वरीय आराधना
              मानते हैं। उन्होंने अपने आचरण से यह सिद्ध कर दिया है कि सच्ची
              साधना के लिए वन जाने की आवश्यकता नहीं, बल्कि समर्पित मन की
              आवश्यकता होती है।
            </p>
          </AnimatedPara>

          {/* Para 3 */}
          <AnimatedPara isMobile={isMobile} hasPageLoaded={hasPageLoaded}>
            <p className="text-[#FFFFFF] leading-relaxed tracking-wide text-[18px]">
              खेत की माटी हो या घर की रसोई - गुरुदेव के लिए प्रत्येक कर्म माँ
              की ही सेवा है। उनका जीवन उन सभी गृहस्थों के लिए एक आलोक-स्तंभ
              है, जो सांसारिक दायित्वों के साथ आध्यात्मिक मार्ग पर चलना
              चाहते हैं।
            </p>
          </AnimatedPara>

          {/* Mobile: image stacks below text */}
          <motion.div
            ref={mobileImageRef}
            className="md:hidden flex justify-center mt-6"
            initial="hidden"
            animate={isMobileImageInView ? "visible" : "hidden"}
            variants={imageVariants}
          >
            <img
              src={guru}
              alt="पूज्य आदिगुरु मांगीलाल भील"
              width={600}
              height={500}
              loading="lazy"
              decoding="async"
              className="w-68 sm:w-56 object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}