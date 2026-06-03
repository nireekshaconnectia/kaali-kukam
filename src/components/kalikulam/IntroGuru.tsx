import guru from "@/assets/guru.png";

export function IntroGuru() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <div className="grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="font-display text-muted-foreground text-sm mb-1">पूज्य आदिगुरु ,</p>
          <h2 className="font-display text-3xl md:text-4xl text-gold mb-6">मांगीलाल भील</h2>
          <div className="space-y-4 text-foreground/75 leading-relaxed text-[15px]">
            <p>
              हर साधक के मूल "गुरुत्व्म्" शक्ति में छुपा। गुरुत्व्म के समान कोई तत्व नहीं, जो पारलौकिक
              करते हुए, जो साधक के पथ प्रदर्शक पूज्य आदिगुरु मांगीलाल भील एक गुरुम् गुरुम् यानि अखंड साधना का सीधा प्रस्फुटन है।
            </p>
            <p>
              मेरी काली की साधना भूमि सब रहे रूप है, वे गुरु के मेधावी की साधना भूमि उच्च आकाश समीप के
              साक्षात भी सहस्रार की अपनी दैनिक अनुष्ठान बनाते हैं। उन्होंने इतनी आत्मरत के संग सिद्ध तक
              पैठ गए हैं।
            </p>
            <p>
              केवल भी पाते हैं वे मन की सरिता - गुरुदेव के लिए प्रकाश का संधान है। इसमें जीवन उस तपो
              भूमरत के लिए सब साधना का अनोखा साक्ष्य, जो सांसारिक चरित्र के साथ आध्यात्मिक मार्ग का संधान बनता।
            </p>
          </div>
        </div>
        <div className="flex justify-center">
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
