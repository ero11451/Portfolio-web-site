import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "../hooks/use-outside-click";

export  function YoutubeSectionCards() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <div className="max-w-[85rem] mx-auto px-4 text-white">
      <div className="lg:flex justify-between lg:p-10">
        <div>
          <p className="text-3xl font-bold">From My YouTube Channel 📹</p>
          <p className="my-2 mb-5 text-sm font-thin">View selected videos from my Youtubed Chanel</p>
        </div>
        <div>
        <a href="https://www.youtube.com/@neeboh-io" className="border p-2 px-4 lg:w-fit w-full text-sm rounded-full h-fix border-[#FFFFFF1F]">
          Subscribe</a>

        </div>
      </div>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center  rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-medium text-neutral-700 dark:text-neutral-200 text-base"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-base"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className=" sm:px-6 grid grid-cols-1 md:grid-cols-4 items-start gap-4">
        {cards.map((card) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col   dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col  w-full">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <img
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-60 w-full  rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="flex  flex-col">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-white md:text-left text-base"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-white text-sm font-thin "
                >
                  {card.description}
                </motion.p>
                <motion.div
                  layoutId={`description-${card.description}-${id}`}
                  className="text-white  text-left flex justify-between my-4"
                >
                  <span> {card.hashTag} </span>
                  <span className="text-sm">{card.time}</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </div>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "by osamuyi ero",
    title: "Everything You Need to Know to Get Started with TypeScript",
    src: "https://static-00.iconduck.com/assets.00/typescript-icon-icon-1024x1024-vh3pfez8.png",
    ctaText: "Visit",
    hashTag:" #typescript",
    time: "18:28",
    ctaLink: "https://www.youtube.com/watch?v=Ase-LiDkzBk",
    content: () => {
      return (
        <p>
         in this typescript course you will learn the basics of typescript and how to use it in your projects. You will learn about types, interfaces, classes, generics, and more. .
        </p>
      );
    },
  },
  {
    description: "by osamuyi ero",
    title: "Useful keywords in JavaScript and typescript",
    src: "https://static-00.iconduck.com/assets.00/typescript-icon-icon-1024x1024-vh3pfez8.png",
    ctaText: "Visit",
    hashTag:" #typescript",
    time: "3:55",
    ctaLink: "https://www.youtube.com/watch?v=BbaRnm76xmk",
    content: () => {
      return (
        <p>
          in ths class we will be talking about usefull typescript keywords and how to use them in your projects. , and more. You will also learns.
      </p>
      );
    },
  },
  {
    description: "by osamuyi ero",
    title: "Intro Video to TypeScript",
    src: "https://static-00.iconduck.com/assets.00/typescript-icon-icon-1024x1024-vh3pfez8.png",
    ctaText: "Visit",
    hashTag:" #typescript",
    time: "3:55",
    ctaLink: "https://www.youtube.com/shorts/YjZfvPOixUA",
    content: () => {
      return (
        <p>
          in ths class we will be talking about useful typescript keywords and how to use them in your projects. , and more. You will also learns.
      </p>
      );
    },
  },
  {
    description: "by osamuyi ero",
    title: "Introduction too java",
    src: "https://cdn.worldvectorlogo.com/logos/java.svg",
    ctaText: "Visit",
    hashTag:" #java #tutorial",
    time: "1:20:55",
    ctaLink: "https://www.youtube.com/watch?v=5l1J1lTAaK0&t=89s",
    content: () => {
      return (
        <p>
          in this java course you will learn the basics of java and how to use it in your projects. You will learn about types, interfaces, classes, generics, and more. .
      </p>
      );
    },
  }
];
