// FaqSection.tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import vector from "@/assets/1.png";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const faqs = [
  {
    q: "1. काली कुलम क्या है और यह अन्य से अलग क्यों है?",
    a: [
      "काली कुलम में 'काली' का अर्थ है स्त्री और 'कुलम' का अर्थ है घराना - अर्थात् स्त्री शक्ति का कुल।",
      "यह एक ऐसी आध्यात्मिक और सामाजिक संस्था है जो माँ काली की असीम ऊर्जा, करुणा और न्याय के सिद्धांतों पर आधारित है। हमारा उद्देश्य केवल धार्मिक अनुष्ठान नहीं - बल्कि मानवता के भीतर छिपी शक्ति को जागृत करना है।",
      "काली कुलम वह स्थान है जहाँ जाति, पंथ या भेदभाव का कोई स्थान नहीं - केवल प्रेम, भक्ति और निःस्वार्थ सेवा।",
      "यहाँ हर व्यक्ति का स्वागत है, चाहे उसकी पृष्ठभूमि कुछ भी हो। हम सिखाते हैं कि सच्ची शक्ति आत्म-जागरण से आती है, बाहरी उपलब्धियों से नहीं।",
    ],
  },
  {
    q: "2. इस युग में काली कुलम की आवश्यकता क्यों है?",
    a: [
      "आज का मनुष्य बाहर से सशक्त और भीतर से रिक्त है। भौतिक सुख है, पर शांति नहीं। सफलता है, पर संतोष नहीं। परिवार है, पर जुड़ाव नहीं। काली कुलम उस रिक्तता को भरने का प्रयास है - सही मार्गदर्शन, सच्ची साधना और एक जीवंत परंपरा के माध्यम से। यहाँ न कोई आडंबर है, न दिखावा - केवल शुद्ध साधना और सच्चा मार्ग।",
      "जब समाज अराजकता और भ्रम से ग्रस्त है, तब एक स्थिर केंद्र की आवश्यकता होती है। काली कुलम वह केंद्र है - जहाँ सत्य, प्रेम और साहस के मूल्य पुनः स्थापित होते हैं।",
    ],
  },
  {
    q: "3. क्या बिना गुरु के साधना संभव है?",
    a: [
      "बिना गुरु के साधना वैसी है जैसे बिना नाविक के नाव - दिशा तो होगी, पर किनारा नहीं मिलेगा। मंत्र पुस्तक में मिल सकता है, यंत्र बाज़ार में मिल सकता है - पर शक्ति केवल गुरु से मिलती है। गुरु वह दीपक है जो अपनी लौ से दूसरे दीपक को जलाता है। बिना इस दीप-दीक्षा के साधना अधूरी रहती है।",
      "गुरु केवल मार्गदर्शक नहीं, बल्कि वह चेतना हैं जो साधक को उसकी सीमाओं से परे ले जाती है। जब शिष्य तैयार होता है, गुरु प्रकट होता है - यही सनातन सत्य है।",
    ],
  },
  {
    q: "4. काली कुलम से जुड़ने के बाद जीवन में क्या बदलाव आएगा?",
    a: [
      "मन को दिशा मिलेगी, जीवन को अर्थ मिलेगा। परिवार में सौहार्द आएगा, भीतर शांति आएगी। भय, नकारात्मकता और जीवन की बाधाएँ धीरे-धीरे दूर होंगी। गृहस्थ जीवन की दुविधाएँ सुलझेंगी और माँ काली की कृपा से जीवन के हर क्षेत्र में स्पष्टता और आत्मविश्वास आएगा।",
      "नींद गहरी होगी, विचार स्पष्ट होंगे, और निर्णयों में एक नई स्थिरता आएगी। रिश्तों में मिठास बढ़ेगी और आत्म-विश्वास का संचार होगा। यह परिवर्तन धीरे-धीरे पर स्थायी होता है - एक बार जागा हुआ बीज फिर सुप्त नहीं होता।",
    ],
  },
  {
    q: "5. क्या तंत्र साधना केवल विशेष लोगों के लिए है?",
    a: [
      "तंत्र किसी एक वर्ग, जाति या पंथ की विद्या नहीं - यह जीवन की विद्या है। जो साँस लेता है, जो अनुभव करता है, जो जीना चाहता है - तंत्र उसी के लिए है। काली कुलम में गृहस्थ भी साधक है, स्त्री भी साधक है, युवा भी साधक है। यहाँ केवल एक योग्यता है - सच्ची जिज्ञासा।",
      "तंत्र का अर्थ है विस्तार - अपनी सीमित धारणाओं से मुक्त होकर असीम चेतना से जुड़ना। यह कोई रहस्यमय या डरावनी विद्या नहीं, बल्कि जीवन को उसकी संपूर्णता में जीने का विज्ञान है। हर साधारण व्यक्ति इसे अपना सकता है, बस आवश्यक है सही मार्गदर्शन और समर्पण।",
    ],
  },
];

// Individual FAQ Item Component with scroll detection
function FaqItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: false, // Changed to false so animation triggers every time
    amount: 0.3,
    margin: "-50px"
  });

  return (
    <motion.div 
      ref={ref}
      className="w-full min-w-0"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <AccordionItem
        value={`item-${index}`}
        className="border-b border-[#1f1f1f] py-1 relative group"
      >
        <div className="absolute bottom-0 left-0 right-0 h-px overflow-hidden">
          <motion.div 
            className="h-full w-full bg-linear-to-r from-transparent via-white/15 to-transparent bg-size-[200%_100%]"
            animate={{
              backgroundPosition: ["0% 0%", "200% 0%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>
        <AccordionTrigger className="text-left text-[16px] md:text-[18px] font-bold hover:no-underline py-4 [&>svg]:text-[#D6A15F] [&>svg]:h-4 [&>svg]:w-4 [&>svg]:transition-transform [&>svg]:duration-300">
          <motion.span 
            className="bg-linear-to-r from-[#EBB57C] to-[#94622C] bg-clip-text text-transparent"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            {faq.q}
          </motion.span>
        </AccordionTrigger>

        <AccordionContent className="pt-2 pb-4">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl bg-linear-to-br from-[#0d0d0d] to-[#151515] px-6 py-5 text-[#FFFFFF] text-[15px] md:text-[18px] leading-8 border border-[#2a2a2a]"
          >
            {/* Scrollable content - with visible scrollbar */}
            <div className="max-h-75 overflow-y-auto scroll-visible space-y-4 pr-2">
              {faq.a.map((p, j) => (
                <motion.p 
                  key={j}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: j * 0.1 }}
                >
                  {p}
                </motion.p>
              ))}
            </div>
          </motion.div>
        </AccordionContent>
      </AccordionItem>
    </motion.div>
  );
}

export function FaqSection() {
  const sectionRef = useRef(null);

  
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { 
    once: false, 
    amount: 0.5 
  });

  return (
    <motion.section 
      ref={sectionRef}
      className="mx-auto px-6 md:px-61.5 pt-16 pb-24 md:pb-48 w-full"
    >
      {/* Animated Header image - triggers on scroll up/down */}
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: -30 }}
        animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-12 flex justify-center"
      >
        <motion.img
          src={vector}
          alt="संकल्प FAQ"
          className="h-auto w-56 md:w-64"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* Accordion */}
      <Accordion
        type="single"
        collapsible
        defaultValue="item-0"
        className="space-y-4 w-full md:w-[90%]"
      >
        {faqs.map((faq, i) => (
          <FaqItem key={i} faq={faq} index={i} />
        ))}
      </Accordion>

      {/* Visible Scrollbar Styles */}
      <style>{`
        /* Make scrollbar visible and thicker */
        .scroll-visible::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        
        .scroll-visible::-webkit-scrollbar-track {
          background: #0a0a0a;
          border-radius: 10px;
          border: 1px solid #2a2a2a;
        }
        
        .scroll-visible::-webkit-scrollbar-thumb {
          background: #000000;
          border-radius: 10px;
          border: 1px solid #3a3a3a;
        }
        
        .scroll-visible::-webkit-scrollbar-thumb:hover {
          background: #1a1a1a;
          cursor: pointer;
        }
        
        .scroll-visible::-webkit-scrollbar-corner {
          background: #0a0a0a;
        }
        
        /* For Firefox */
        .scroll-visible {
          scrollbar-width: auto;
          scrollbar-color: #000000 #0a0a0a;
        }
      `}</style>
    </motion.section>
  );
}