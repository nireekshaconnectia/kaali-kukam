// IntroGuru.tsx
import guru from "@/assets/guru.png";

export function IntroGuru() {
  return (
    <section className="w-full overflow-x-clip px-6 md:px-61.5 pt-16.5">
      <div className="max-w-7xl mx-auto">
        <div className="relative">
          {/*
           * The image is floated RIGHT with shape-outside so text flows
           * around the guru's silhouette. Adjust the polygon() points to
           * match your actual image's contour — these are tuned for a
           * standing figure with dreadlocks & a mala on the right side.
           *
           * Polygon coordinate system: percentage of the float box (w × h).
           * Left edge of figure ≈ 15–20% in from the float box left.
           */}
          <div
            className="hidden md:block"
            style={{
              float: "right",
              width: "42%",
              marginRight: "-30px",
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
          </div>

          {/* Text flows around the floated image */}
          <p className="text-white text-sm md:text-lg tracking-wide mb-2">
            पूज्य आदिगुरु
          </p>
          <h2
            className="font-body text-2xl md:text-3xl font-bold
              bg-linear-to-r from-[#EBB57C] to-[#94622C]
              bg-clip-text text-transparent mb-4"
          >
            मांगीलाल भील
          </h2>

          <div className="space-y-6 text-[#FFFFFF] leading-relaxed tracking-wide text-[18px]">
            <p>
              तंत्र शास्त्र के सूत्र "
              <span className="font-bold">गृहस्थो नास्ति मे तुल्य:</span>"
              (गृहस्थ के समान कोई नहीं) को चरितार्थ करते हुए, माँ शारदा के
              परम उपासक पूज्य आदिगुरु मांगीलाल भील एक कुशल गृहस्थ और अडिग
              साधक का जीवंत उदाहरण हैं।
            </p>
            <p>
              मोरड़ी मावली की पावन भूमि पर रहते हुए, वे प्रकृति के पंचभूतों
              की साधना और जल-जंगल-ज़मीन के संरक्षण को ही अपनी ईश्वरीय आराधना
              मानते हैं। उन्होंने अपने आचरण से यह सिद्ध कर दिया है कि सच्ची
              साधना के लिए वन जाने की आवश्यकता नहीं, बल्कि समर्पित मन की
              आवश्यकता होती है।
            </p>
            <p >
              खेत की माटी हो या घर की रसोई - गुरुदेव के लिए प्रत्येक कर्म माँ
              की ही सेवा है। उनका जीवन उन सभी गृहस्थों के लिए एक आलोक-स्तंभ
              है, जो सांसारिक दायित्वों के साथ आध्यात्मिक मार्ग पर चलना
              चाहते हैं।
            </p>
          </div>

          {/* On mobile: image stacks below text normally */}
          <div className="md:hidden flex justify-center mt-6">
            <img
              src={guru}
              alt="पूज्य आदिगुरु मांगीलाल भील"
              width={600}
              height={500}
              loading="lazy"
              decoding="async"
              className="w-68 sm:w-56 object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
}