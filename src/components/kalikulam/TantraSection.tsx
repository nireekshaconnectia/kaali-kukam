// TantraSection.tsx
import roundShape from "@/assets/RoundShape.png";
import tanthraa from "@/assets/Tanthraa.png";
import manthraaNew from "@/assets/Manthraa_New.png";
import yanthraa from "@/assets/Yanthraa.png";
import titleTantra from "@/assets/Tantra.png";
import titleMantra from "@/assets/Mantra.png";
import titleYantra from "@/assets/Yantra.png";
import titleTantraMantraYantra from "@/assets/Tantra_Mantra_Yantra.png";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const items = [
  {
    title: "तंत्र",
    titleImg: titleTantra,
    topImg: tanthraa,
    emblem: roundShape,
    text: "तंत्र न कोई रहस्य है, न कोई भय की विद्या। यह इस सृष्टि की समग्र शक्ति को समझने और जीवन में उतारने का मार्ग है। जीवन का हर अनुभव, सुख हो या दुख, परिवार हो या एकांत, सब साधना है।",
    imageRight: true,
    topImgPosition: { top: "5%", left: "0%" },
    topImgSize: "w-38 md:w-42",
  },
  {
    title: "मंत्र",
    titleImg: titleMantra,
    topImg: manthraaNew,
    emblem: roundShape,
    text: "मंत्र वह दिव्य ध्वनि है जो सृष्टि के आरंभ से विद्यमान है। प्रत्येक मंत्र एक विशेष शक्ति का वाहक है। जब इसे सही विधि, सही भाव और सही समय पर उच्चारित किया जाए तो यह जीवन को बदलने की क्षमता रखता है।",
    imageRight: false,
    topImgPosition: { top: "-10%", left: "-3%" },
    topImgSize: "w-38 md:w-42",
  },
  {
    title: "यंत्र",
    titleImg: titleYantra,
    topImg: yanthraa,
    emblem: roundShape,
    text: "यंत्र एक पवित्र ज्यामितीय संरचना है जिसमें देवी-देवताओं की शक्ति को आह्वान किया जाता है। यह केवल एक चित्र नहीं, यह एक जीवंत ऊर्जा केंद्र है। घर में, व्यापार में और जीवन के हर क्षेत्र में यंत्र एक अदृश्य सुरक्षा कवच का कार्य करता है।",
    imageRight: true,
    topImgPosition: { top: "-22%", left: "15%" },
    topImgSize: "w-38 md:w-40",
  },
];

function AnimatedRow({ item, index }: { item: typeof items[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className="grid items-center gap-1 md:grid-cols-2"
      initial={{ opacity: 0, x: -100 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
      transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1], delay: index * 0.15 }}
    >
      {/* Text */}
      <div className={`${item.imageRight ? "md:order-1" : "md:order-2"}`}>
        <img
          src={item.titleImg}
          alt={item.title}
          className="h-8 md:h-12 w-auto mb-4 object-contain"
          loading="lazy"
        />
        <p className="text-[#FFFFFF] leading-relaxed text-[18px]">
          {item.text}
        </p>
      </div>

      {/* Image */}
      <div
        className={`flex justify-center ${item.imageRight ? "md:order-2" : "md:order-1"}`}
        style={item.imageRight ? { marginRight: "-100px" } : {}}
      >
        <div className="relative inline-block">
          <img
            src={item.emblem}
            alt={item.title}
            loading="lazy"
            decoding="async"
            className="w-38 md:w-45 drop-shadow-[0_0_30px_oklch(0.55_0.24_28/0.35)]"
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
      </div>
    </motion.div>
  );
}

export function TantraSection() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: false, amount: 0.5 });

  return (
    <section className="w-full px-10 md:px-61.5 py-40">
      <div className="max-w-9xl mx-auto">
        <motion.div
          ref={headerRef}
          className="mb-16 flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
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

        <div className="space-y-30">
          {items.map((item, index) => (
            <AnimatedRow key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}