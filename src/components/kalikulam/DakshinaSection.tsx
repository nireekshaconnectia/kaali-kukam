// DakshinaSection.tsx
import dakshinaHands from "@/assets/dakshina-hands.png";
import vector from "@/assets/image.png";
import { useEffect, useRef, useState } from "react";

const GradientText = ({ text, className }: { text: string; className?: string }) => (
  <span
    className={`inline-block bg-linear-to-r from-[#EBB57C] via-[#F4A460] to-[#94622C] bg-clip-text text-transparent ${className}`}
    style={{
      backgroundSize: "200% auto",
      animation: "gradientShift 8s linear infinite",
    }}
  >
    {text}
  </span>
);

export function DakshinaSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(-1);
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Clear any pending timeouts
            timeoutsRef.current.forEach(timeout => clearTimeout(timeout));
            timeoutsRef.current = [];
            
            // Animate elements one by one
            const elements = [0, 1, 2, 3];
            elements.forEach((index, i) => {
              const timeout = setTimeout(() => {
                setActiveIndex(index);
              }, i * 300);
              timeoutsRef.current.push(timeout);
            });
          } else {
            // Reset animation when section is out of view
            setActiveIndex(-1);
            // Clear pending timeouts
            timeoutsRef.current.forEach(timeout => clearTimeout(timeout));
            timeoutsRef.current = [];
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
      timeoutsRef.current.forEach(timeout => clearTimeout(timeout));
    };
  }, []);

  const getAnimationClass = (index: number) => {
    if (activeIndex >= index) {
      return "animate-fade-slide-up opacity-100";
    }
    return "opacity-0 translate-y-8";
  };

  return (
    <>
      <style>{`
        @keyframes gradientShift {
          0%   { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        
        @keyframes fadeSlideUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
            filter: blur(4px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }
        
        @keyframes subtleGlow {
          0% {
            box-shadow: 0 0 0 0 rgba(235, 181, 124, 0.4);
          }
          70% {
            box-shadow: 0 0 0 15px rgba(235, 181, 124, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(235, 181, 124, 0);
          }
        }
        
        .animate-fade-slide-up {
          animation: fadeSlideUp 0.8s cubic-bezier(0.2, 0.9, 0.4, 1.1) forwards;
        }
        
        .button-glow {
          animation: subtleGlow 2s ease-in-out infinite;
        }
        
        .line-reveal {
          position: relative;
          overflow: hidden;
        }
        
        .line-reveal::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(235, 181, 124, 0.1), transparent);
          transform: translateX(-100%);
          animation: shimmer 1.5s ease-out forwards;
        }
        
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        @keyframes gentlePulse {
          0%, 100% {
            opacity: 0.45;
          }
          50% {
            opacity: 0.55;
          }
        }
        
        .bg-pulse {
          animation: gentlePulse 8s ease-in-out infinite;
        }
      `}</style>

      <section ref={sectionRef} className="relative overflow-hidden min-h-screen flex items-center">
        <img
          src={dakshinaHands}
          alt="दक्षिणा अर्पण"
          width={1280}
          height={896}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover bg-pulse"
        />
        
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-background/20 to-background/40" />

        <div className="relative mx-auto max-w-5xl px-6 md:px-14 py-20 text-center z-10">
          <div className={`transition-all duration-700 ${getAnimationClass(0)}`}>
            <p className="font-body text-muted-foreground text-lg md:text-xl mb-2 tracking-wide">
              कृतज्ञता का <GradientText text="अर्पण" />
            </p>
          </div>

          <div className={`transition-all duration-700 delay-100 ${getAnimationClass(1)}`}>
            <div className="line-reveal inline-block">
              <img
                src={vector}
                alt="दक्षिणा"
                className="mx-auto mb-8 h-31.5 md:h-36 opacity-90"
              />
            </div>
          </div>

          <div className={`transition-all duration-700 delay-200 ${getAnimationClass(2)}`}>
            <button className="group relative rounded-full border border-gold/60 bg-linear-to-r from-[#EBB57C] via-[#F4A460] to-[#94622C] px-10 md:px-14 py-3 md:py-4 font-body text-foreground text-2xl md:text-3xl mb-12 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-gold/20 button-glow">
              <span className="relative z-10 flex items-center gap-2">
                दक्षिणा प्रदान करें
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
              <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </button>
          </div>

          <div className={`transition-all duration-700 delay-300 ${getAnimationClass(3)}`}>
            <p className="mx-auto max-w-4xl text-foreground/90 leading-relaxed md:leading-loose tracking-wide text-base md:text-xl px-6 md:px-16 font-light">
              दक्षिणा केवल धन नहीं, यह श्रद्धा का वह प्रवाह है जो शिष्य से गुरु तक और गुरु से शक्ति तक पहुँचता है। भारतीय संस्कृति में दक्षिणा एक देवी का नाम है: यज्ञ की पत्नी। जहाँ दक्षिणा है, वहाँ यज्ञ पूर्ण है। जहाँ दक्षिणा नहीं, वहाँ साधना अधूरी है।
            </p>
          </div>
        </div>
      </section>
    </>
  );
}