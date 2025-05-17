import React from "react";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";

export  function BackgroundGradientAnimationDemo({children}: {children: React.ReactNode}) {
  return (
    <BackgroundGradientAnimation>
      {children}
    </BackgroundGradientAnimation>
  );
}
