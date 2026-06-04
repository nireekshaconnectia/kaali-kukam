import guru from "@/assets/guru.png";
import { useScrollReveal } from "../../hooks/useScrollReveal";

export function IntroGuru() {
  const textRef = useScrollReveal<HTMLDivElement>({ delay: 0 });
  const imgRef = useScrollReveal<HTMLDivElement>({ delay: 150 });

  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <div className="grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
        <div ref={textRef}>
          <p className="text-foreground/75 leading-relaxed text-[15px] pb-2">पूज्य आदिगुरु ,</p>
          <h2 className="font-display text-3xl md:text-4xl text-gold mb-6 font-bold">मांगीलाल भील</h2>
          <div className="space-y-4 text-foreground/75 leading-relaxed text-[15px]">
            <p>
              तंत्र शास्त्र के सूत्र "गृहस्थो नास्ति मे तुल्य:" (गृहस्थ के समान कोई नहीं) को चरितार्थ करते हुए, माँ शारदा के परम उपासक पूज्य आदिगुरु मांगीलाल भील एक कुशल गृहस्थ और अडिग साधक का जीवंत उदाहरण हैं।
            </p>
            <p>
              मोरड़ी मावली की पावन भूमि पर रहते हुए, वे प्रकृति के पंचभूतों की  साधना और
जल-जंगल-ज़मीन के संरक्षण को ही अपनी ईश्वरीय आराधना मानते हैं। उन्होंने
अपने आचरण से यह सिद्ध कर दिया है कि सच्ची साधना के लिए वन जाने की आवश्यकता नहीं, बल्कि समर्पित मन की आवश्यकता होती है।
            </p>
            <p>
              खेत की माटी हो या घर की रसोई - गुरुदेव के लिए प्रत्येक कर्म  माँ की ही
सेवा है। उनका जीवन उन सभी गृहस्थों के लिए एक  आलोक-स्तंभ है,
जो सांसारिक दायित्वों के साथ आध्यात्मिक मार्ग पर चलना चाहते हैं।
            </p>
          </div>
        </div>
        <div ref={imgRef} className="flex justify-center">
          <img
            src={guru}
            alt="पूज्य आदिगुरु मांगीलाल भील"
            width={400}
            height={500}
            loading="lazy"
            className="w-64 md:w-full max-w-xs object-contain border-b-2 border-gold/40"
          />
        </div>
      </div>
    </section>
  );
}
