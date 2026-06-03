import emblemTantra from "@/assets/emblem-tantra.png";
import emblemMantra from "@/assets/emblem-mantra.png";
import emblemYantra from "@/assets/emblem-yantra.png";

const items = [
  {
    title: "तंत्र",
    emblem: emblemTantra,
    text: "तंत्र न कोई रहस्य है, न कोई भय की विद्या है। यह इस सृष्टि की समग्र शक्ति को समझने और जीवन में उतारने का मार्ग है। जीवन का हर अनुभव, सुख हो या दुःख, परिवार सो या एकांत, उस साधना है।",
    reverse: false,
  },
  {
    title: "मंत्र",
    emblem: emblemMantra,
    text: "मंत्र वह दिव्य ध्वनि है जो सृष्टि के आरंभ से विद्यमान है। प्रत्येक मंत्र एक विशेष शक्ति का वाहन है। जप इसे सही विधि, सही भाव और सही लगन पर उच्चारित किया जाए तो वह जीवन को बदलने की क्षमता रखता है।",
    reverse: true,
  },
  {
    title: "यंत्र",
    emblem: emblemYantra,
    text: "यंत्र एक पवित्र ज्यामितीय संरचना है, जिसमें देवी-देवताओं की शक्ति को आह्वान किया जाता है। यह केवल एक चित्र नहीं, यह एक जीवंत ऊर्जा केंद्र है। साधक के जीवन के इस क्षेत्र में यंत्र एक अदृश्य सुरक्षा कवच का कार्य करता है।",
    reverse: false,
  },
];

export function TantraSection() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <div className="text-center mb-14">
        <h2 className="font-display text-3xl md:text-5xl text-muted-foreground">
          तंत्र <span className="text-muted-foreground">-</span> मंत्र <span className="text-muted-foreground">-</span> यंत्र
        </h2>
        <p className="mt-3 text-muted-foreground text-sm font-display">
          विधि, ध्वनि और रूप &nbsp;·&nbsp; तीन शक्तियाँ, एक मार्ग
        </p>
      </div>

      <div className="space-y-14">
        {items.map((item) => (
          <div
            key={item.title}
            className={`grid items-center gap-8 md:grid-cols-2 ${item.reverse ? "md:[direction:rtl]" : ""}`}
          >
            <div className="[direction:ltr]">
              <h3 className="font-display text-3xl text-muted-foreground mb-3">{item.title}</h3>
              <p className="text-foreground/75 leading-relaxed text-[15px]">{item.text}</p>
            </div>
            <div className="flex justify-center [direction:ltr]">
              <img
                src={item.emblem}
                alt={item.title}
                width={512}
                height={512}
                loading="lazy"
                className="w-36 md:w-44 drop-shadow-[0_0_30px_oklch(0.55_0.24_28/0.35)]"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
