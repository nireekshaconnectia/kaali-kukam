interface LogoProps {
  className?: string;
  showText?: boolean;
}

export function Logo({ className, showText = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className ?? ""}`}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        <path
          d="M50 12 L88 80 L12 80 Z"
          stroke="var(--gold)"
          strokeWidth="3"
          fill="none"
          transform="rotate(180 50 50)"
        />
        <path d="M40 38 L40 62 L62 50 Z" fill="var(--gold)" />
      </svg>
      {showText && (
        <span className="font-display text-xl leading-none text-gold-soft tracking-wide">
          काली<br />कुलम
        </span>
      )}
    </div>
  );
}
