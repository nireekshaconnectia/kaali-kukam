// TantraSection.tsx
import { motion } from "framer-motion";
import roundShape from "@/assets/RoundShape.png";
import tanthraa from "@/assets/Tanthraa.png";
import manthraaNew from "@/assets/Manthraa_New.png";
import yanthraa from "@/assets/Yanthraa.png";
import titleTantra from "@/assets/Tantra.png";
import titleMantra from "@/assets/Mantra.png";
import titleYantra from "@/assets/Yantra.png";
import titleTantraMantraYantra from "@/assets/Tantra_Mantra_Yantra.png";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { useIsMobile } from "../../hooks/use-mobile";

const items = [
  {
    title: "तंत्र",
    titleImg: titleTantra,
    topImg: tanthraa,
    emblem: roundShape,
    text: "तंत्र न कोई रहस्य है, न कोई भय की विद्या। यह इस सृष्टि की समग्र शक्ति को समझने और जीवन में उतारने का मार्ग है। जीवन का हर अनुभव, सुख हो या दुख, परिवार हो या एकांत, सब साधना है।",
    imageRight: true,
    // width: 334, height: 232, top: 58px, left: 999px (relative to container)
    topImgPosition: { top: "-15%", left: "0%" }, // Centered horizontally, slightly raised
    topImgSize: "w-28 md:w-32", // 334px scale equivalent
  },
  {
    title: "मंत्र",
    titleImg: titleMantra,
    topImg: manthraaNew,
    emblem: roundShape,
    text: "मंत्र वह दिव्य ध्वनि है जो सृष्टि के आरंभ से विद्यमान है। प्रत्येक मंत्र एक विशेष शक्ति का वाहक है। जब इसे सही विधि, सही भाव और सही समय पर उच्चारित किया जाए तो यह जीवन को बदलने की क्षमता रखता है।",
    imageRight: false,
    // width: 338, height: 321, top: 3048.5px (but relative to emblem)
    topImgPosition: { top: "-10%", left: "-3%" }, // Slightly larger, positioned off-center
    topImgSize: "w-32 md:w-36", // 338px scale equivalent
  },
  {
    title: "यंत्र",
    titleImg: titleYantra,
    topImg: yanthraa,
    emblem: roundShape,
    text: "यंत्र एक पवित्र ज्यामितीय संरचना है जिसमें देवी-देवताओं की शक्ति को आह्वान किया जाता है। यह केवल एक चित्र नहीं, यह एक जीवंत ऊर्जा केंद्र है। घर में, व्यापार में और जीवन के हर क्षेत्र में यंत्र एक अदृश्य सुरक्षा कवच का कार्य करता है।",
    imageRight: true,
    // width: 270, height: 270, top: 7.5px, left: 1049px
    topImgPosition: { top: "-22%", left: "20%" }, // Centered, minimal offset
    topImgSize: "w-24 md:w-28", // 270px scale equivalent
  },
];

export function TantraSection() {
  const prefersReducedMotion = useReducedMotion();
  const isMobile = useIsMobile();

  // On mobile, use opacity-only fade (no X slide) to avoid layout recalc jank
  const dur = prefersReducedMotion ? 0 : isMobile ? 0.5 : 0.7;
  const xOffset = prefersReducedMotion || isMobile ? 0 : 60;

  const slideText = (fromLeft: boolean) => ({
    hidden: { opacity: prefersReducedMotion ? 1 : 0, x: fromLeft ? -xOffset : xOffset, scale: prefersReducedMotion ? 1 : 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: dur, ease: [0.22, 1, 0.36, 1] as const, delay: 0.05 },
    },
  });

  const slideImg = (fromLeft: boolean) => ({
    hidden: { opacity: prefersReducedMotion ? 1 : 0, x: fromLeft ? xOffset : -xOffset, scale: prefersReducedMotion ? 1 : 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: dur, ease: [0.22, 1, 0.36, 1] as const, delay: 0.1 },
    },
  });

  const headerVariants = {
    hidden: { opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: prefersReducedMotion ? 0 : 0.6, ease: "easeOut" as const },
    },
  };

  // Slower rotation on mobile to reduce GPU load; disabled for reduced motion
  const rotateDuration = prefersReducedMotion ? 0 : isMobile ? 40 : 25;

  return (
    <section className="mx-auto max-w-5xl px-6 md:px-14 py-16">
      <motion.div
        className="mb-16 flex flex-col items-center text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.4 }}
        variants={headerVariants}
      >
        <img
          src={titleTantraMantraYantra}
          alt="तंत्र . मंत्र . यंत्र"
          className="h-16 md:h-24 w-auto object-contain"
          loading="eager"
        />
        <p className="text-[#FFFFFF] -mt-2 text-sm md:text-base">
          विधि, ध्वनि और रूप - तीन शक्तियाँ, एक मार्ग
        </p>
      </motion.div>

      <div className="space-y-24">
        {items.map((item) => (
          <div
            key={item.title}
            className="grid items-center gap-8 md:grid-cols-2"
          >
            {/* Text — fade + slide (slide disabled on mobile) */}
            <motion.div
              className={`${item.imageRight ? "md:order-1" : "md:order-2"}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={slideText(item.imageRight)}
            >
              <img
                src={item.titleImg}
                alt={item.title}
                className="h-8 md:h-12 w-auto mb-4 object-contain"
                loading="lazy"
              />
              <p className="text-[#FFFFFF] leading-relaxed text-[15px]">
                {item.text}
              </p>
            </motion.div>

            {/* Image — GPU-composited rotation via will-change */}
            <motion.div
              className={`flex justify-center ${item.imageRight ? "md:order-2" : "md:order-1"}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={slideImg(item.imageRight)}
            >
              <div className="relative inline-block" style={{ willChange: "transform" }}>
                <motion.img
                  src={item.emblem}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="w-28 md:w-36 drop-shadow-[0_0_30px_oklch(0.55_0.24_28/0.35)]"
                  style={{ willChange: "transform" }}
                  animate={prefersReducedMotion ? {} : { rotate: 360 }}
                  transition={
                    prefersReducedMotion
                      ? {}
                      : { repeat: Infinity, duration: rotateDuration, ease: "linear" }
                  }
                />
                <img
                  src={item.topImg}
                  alt={`${item.title} emblem`}
                  loading="lazy"
                  decoding="async"
                  className={`absolute inset-0 m-auto ${item.topImgSize}`}
                  style={{
                    position: 'absolute',
                    top: item.topImgPosition.top,
                    left: item.topImgPosition.left,
                    transform: 'translate(0, 0)',
                  }}
                />
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}