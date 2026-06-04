import roundShape from "@/assets/RoundShape.png";
import tanthraa from "@/assets/Tanthraa.png";
import manthraaNew from "@/assets/Manthraa_New.png";
import yanthraa from "@/assets/Yanthraa.png";
import titleTantra from "@/assets/Tantra.png";
import titleMantra from "@/assets/Mantra.png";
import titleYantra from "@/assets/Yantra.png";
import titleTantraMantraYantra from "@/assets/Tantra_Mantra_Yantra.png";

const items = [
  {
    title: "तंत्र",
    titleImg: titleTantra,
    topImg: tanthraa,
    emblem: roundShape,
    text: "तंत्र न कोई रहस्य है, न कोई भय की विद्या है। यह इस सृष्टि की समग्र शक्ति को समझने और जीवन में उतारने का मार्ग है। जीवन का हर अनुभव, सुख हो या दुःख, परिवार सो या एकांत, उस साधना है।",
    reverse: false,
  },
  {
    title: "मंत्र",
    titleImg: titleMantra,
    topImg: manthraaNew,
    emblem: roundShape,
    text: "मंत्र वह दिव्य ध्वनि है जो सृष्टि के आरंभ से विद्यमान है। प्रत्येक मंत्र एक विशेष शक्ति का वाहन है। जप इसे सही विधि, सही भाव और सही लगन पर उच्चारित किया जाए तो वह जीवन को बदलने की क्षमता रखता है।",
    reverse: true,
  },
  {
    title: "यंत्र",
    titleImg: titleYantra,
    topImg: yanthraa,
    emblem: roundShape,
    text: "यंत्र एक पवित्र ज्यामितीय संरचना है, जिसमें देवी-देवताओं की शक्ति को आह्वान किया जाता है। यह केवल एक चित्र नहीं, यह एक जीवंत ऊर्जा केंद्र है। साधक के जीवन के इस क्षेत्र में यंत्र एक अदृश्य सुरक्षा कवच का कार्य करता है।",
    reverse: false,
  },
];

export function TantraSection() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <div className="mb-16 flex flex-col items-center text-center">
        <div className="relative inline-block">
          <img src={titleTantraMantraYantra} alt="तंत्र . मंत्र . यंत्र" className="h-16 md:h-24 w-auto object-contain" />
          <div className="absolute -bottom-2 left-0 w-full text-center">
            <p className="text-foreground/75 leading-relaxed text-[15px] text-center">
              विधि, ध्वनि और रूप &nbsp;·&nbsp; तीन शक्तियाँ, एक मार्ग
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-14">
        {items.map((item) => (
          <div
            key={item.title}
            className={`grid items-center gap-8 md:grid-cols-2 ${item.reverse ? "md:[direction:rtl]" : ""}`}
          >
            <div className="[direction:ltr]">
              <img src={item.titleImg} alt={item.title} className="h-8 md:h-12 w-auto mb-4 object-contain" />
              <p className="text-foreground/75 leading-relaxed text-[15px]">{item.text}</p>
            </div>
            <div className="flex justify-center [direction:ltr]">
              <div className="flex flex-col items-center gap-1">
              <div className="relative inline-block -mt-2">
                <img
                  src={item.emblem}
                  alt={item.title}
                  loading="lazy"
                  className="w-28 md:w-36 drop-shadow-[0_0_30px_oklch(0.55_0.24_28/0.35)]"
                />
                <img
                  src={item.topImg}
                  alt={`${item.title} top`}
                  loading="lazy"
                  className={`absolute inset-0 ${item.title === "यंत्र" ? "w-24 md:w-28" : "w-28 md:w-32"} m-auto`}
                />
              </div>
            </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
