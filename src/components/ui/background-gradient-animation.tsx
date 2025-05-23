import { useEffect, useRef, useState } from "react";
import { cn } from "../../lib/utils";

export const BackgroundGradientAnimation = ({
  gradientBackgroundStart = "#0C0C0D",
  gradientBackgroundEnd = "#0C0C0D",
  firstColor = "18, 113, 255",
  secondColor = "221, 74, 255",
  thirdColor = "100, 220, 255",
  fourthColor = "200, 50, 50",
  fifthColor = "180, 180, 50",
  pointerColor = "140, 100, 255",
  size = "20%",
  blendingValue = "hard-light",
  children,
  className,
  interactive = true,
  containerClassName,
}: {
  gradientBackgroundStart?: string;
  gradientBackgroundEnd?: string;
  firstColor?: string;
  secondColor?: string;
  thirdColor?: string;
  fourthColor?: string;
  fifthColor?: string;
  pointerColor?: string;
  size?: string;
  blendingValue?: string;
  children?: React.ReactNode;
  className?: string;
  interactive?: boolean;
  containerClassName?: string;
}) => {
  const interactiveRef = useRef<HTMLDivElement>(null);
  const [curPos, setCurPos] = useState({ x: 0, y: 0 });
  const [targetPos, setTargetPos] = useState({ x: 0, y: 0 });

  const animate = () => {
    setCurPos(prev => {
      const dx = (targetPos.x - prev.x) / 20;
      const dy = (targetPos.y - prev.y) / 20;
      const newPos = { x: prev.x + dx, y: prev.y + dy };

      if (interactiveRef.current) {
        interactiveRef.current.style.transform = `translate(${Math.round(
          newPos.x
        )}px, ${Math.round(newPos.y)}px)`;
      }

      requestAnimationFrame(animate);
      return newPos;
    });
  };

  useEffect(() => {
    if (interactive) {
      requestAnimationFrame(animate);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [interactive]);

  useEffect(() => {
    const root = document.body.style;
    root.setProperty("--gradient-background-start", gradientBackgroundStart);
    root.setProperty("--gradient-background-end", gradientBackgroundEnd);
    root.setProperty("--first-color", firstColor);
    root.setProperty("--second-color", secondColor);
    root.setProperty("--third-color", thirdColor);
    root.setProperty("--fourth-color", fourthColor);
    root.setProperty("--fifth-color", fifthColor);
    root.setProperty("--pointer-color", pointerColor);
    root.setProperty("--size", size);
    root.setProperty("--blending-value", blendingValue);
  }, [
    gradientBackgroundStart,
    gradientBackgroundEnd,
    firstColor,
    secondColor,
    thirdColor,
    fourthColor,
    fifthColor,
    pointerColor,
    size,
    blendingValue,
  ]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactiveRef.current) return;
    const rect = interactiveRef.current.getBoundingClientRect();
    setTargetPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
  }, []);

  return (
    <div
      onMouseMove={interactive ? handleMouseMove : undefined}
      className={cn(
        " w-fit relative overflow-hidden top-0 left-0 bg-[linear-gradient(40deg,var(--gradient-background-start),var(--gradient-background-end))]",
        containerClassName
      )}
    >
      {/* SVG filter for background blur */}
      <svg className="hidden">
        <defs>
          <filter id="blurMe">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      <div className={cn("", className)}>{children}</div>

      <div
        className={cn(
          "gradients-container h-full w-full blur-lg",
          isSafari ? "blur-2xl" : "[filter:url(#blurMe)_blur(40px)]"
        )}
      >
        {/* Gradient blobs */}
        {[firstColor, secondColor, thirdColor, fourthColor, fifthColor].map((_, i) => (
          <div
            key={i}
            className={cn(
              `absolute [background:radial-gradient(circle_at_center,_rgba(var(--${["first", "second", "third", "fourth", "fifth"][i]}-color),_0.8)_0,_rgba(var(--${["first", "second", "third", "fourth", "fifth"][i]}-color),_0)_50%)_no-repeat]`,
              `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)]`,
              `top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
              `animate-${["first", "second", "third", "fourth", "fifth"][i]}`,
              `opacity-${i === 3 ? "70" : "100"}`
            )}
          ></div>
        ))}

        {/* Pointer blob */}
        {interactive && (
          <div
            ref={interactiveRef}
            className={cn(
              `absolute [background:radial-gradient(circle_at_center,_rgba(var(--pointer-color),_0.8)_0,_rgba(var(--pointer-color),_0)_50%)_no-repeat]`,
              `[mix-blend-mode:var(--blending-value)] w-full h-full -top-1/2 -left-1/2 opacity-70`
            )}
          ></div>
        )}
      </div>
    </div>
  );
};
 