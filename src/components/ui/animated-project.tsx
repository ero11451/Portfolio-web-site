
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";

import { useEffect, useState } from "react";

export type IProject = {
    quote: string;
    name: string;
    designation: string;
    src: string;
    technology: string[];
    github?: string;
};
export const Animatedproject = ({
    project,
    autoplay = false,
}: {
    project: IProject[];
    autoplay?: boolean;
}) => {
    const [active, setActive] = useState(0);

    const handleNext = () => {
        setActive((prev) => (prev + 1) % project.length);
    };

    const handlePrev = () => {
        setActive((prev) => (prev - 1 + project.length) % project.length);
    };

    const isActive = (index: number) => {
        return index === active;
    };

    useEffect(() => {
        if (autoplay) {
            const interval = setInterval(handleNext, 5000);
            return () => clearInterval(interval);
        }
    }, [autoplay]);

    const randomRotateY = () => {
        return 0 //Math.floor(Math.random() * 21) - 10;
    };
    return (
        <div>

            <div className="lg:mx-auto w-full px-4 py-20 font-sans antialiased md:max-w-6xl md:px-8 lg:px-12">
                <div className="relative grid grid-cols-1 gap-5 md:grid-cols-5 ">
                    <div className="col-span-2">
                        <div className="relative h-80 w-full ">
                            <AnimatePresence>
                                {project.map((testimonial, index) => (
                                    <motion.div
                                        key={testimonial.src}
                                        initial={{
                                            opacity: 0,
                                            scale: 0.9,
                                            z: -100,
                                            rotate: randomRotateY(),
                                        }}
                                        animate={{
                                            opacity: isActive(index) ? 1 : 0.7,
                                            scale: isActive(index) ? 1 : 0.95,
                                            z: isActive(index) ? 0 : -100,
                                            rotate: isActive(index) ? 0 : randomRotateY(),
                                            zIndex: isActive(index)
                                                ? 40
                                                : project.length + 2 - index,
                                            y: isActive(index) ? [0, -80, 0] : 0,
                                        }}
                                        exit={{
                                            opacity: 0,
                                            scale: 0.9,
                                            z: 100,
                                            rotate: randomRotateY(),
                                        }}
                                        transition={{
                                            duration: 0.4,
                                            ease: "easeInOut",
                                        }}
                                        className="absolute inset-0 origin-bottom"
                                    >
                                        <img
                                            src={testimonial.src}
                                            alt={testimonial.name}
                                            // width={800}
                                            height={1000}
                                            draggable={false}
                                            className="h-full w-[400px] bg-black rounded-3xl object-cover object-center"
                                        />
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    </div>
                    <div className="py-5 col-span-3">

                        <div className="flex flex-1 flex-col justify-between  py-4 border w-full h-fit rounded-lg p-3 bg-[#5E5E5E] transition-all duration-300 ease-in-out bg-opacity-50  border-[#5E5E5E] bg-gradient-to-r from-[#8396cd52] via-[#c9cdd652] to-[#0a298552] bg-[length:200%_200%] animate-gradient-x">
                            <motion.div
                                key={active}
                                initial={{
                                    y: 20,
                                    opacity: 0,
                                }}
                                animate={{
                                    y: 0,
                                    opacity: 1,
                                }}
                                exit={{
                                    y: -20,
                                    opacity: 0,
                                }}
                                transition={{
                                    duration: 0.2,
                                    ease: "easeInOut",
                                }}
                            >
                                
                                <div>
                                    <div className="flex flex-wrap gap-2">
                                        {project[active].technology.map((skill, index) => (
                                            <Badge
                                                key={index}
                                                className="inline-flex items-center rounded-full border border-[#282829] bg-gradient-to-r from-[#3B3B3B52]  to-[#1A1A1A00] px-2 py-1 text-sm font-medium text-white"
                                            
                                               label = {skill}
                                            />
                                        ))}
                                    </div>
                                </div>
                                <h3 className="text-2xl font-[600] text-white dark:text-white my-3">
                                    {project[active].name}
                                </h3>
                                {/* <p className="text-[400] text-sm text-white  dark:text-neutral-500">
                            {project[active].designation}
                        </p> */}
                                <motion.p className=" text-lg text-white dark:text-neutral-300 ">
                                    {project[active].quote.split(" ").map((word, index) => (
                                        <motion.span
                                            key={index}
                                            initial={{
                                                filter: "blur(10px)",
                                                opacity: 0,
                                                y: 5,
                                            }}
                                            animate={{
                                                filter: "blur(0px)",
                                                opacity: 1,
                                                y: 0,
                                            }}
                                            transition={{
                                                duration: 0.2,
                                                ease: "easeInOut",
                                                delay: 0.02 * index,
                                            }}
                                            className="inline-block text-sm"
                                        >
                                            {word}&nbsp;
                                        </motion.span>
                                    ))}
                                </motion.p>
                            </motion.div>

                            <div className="inline-flex flex-wrap gap-2 mt-5">
                                <a href={project[active].github} className="inline-flex flex-nowrap items-center border border-[#868693] rounded-full p-1.5 pe-3 bg-gradient-to-r from-[#3B3B3B52]  to-[#1A1A1A00]">
                                    <img className="me-1.5 inline-block size-6 rounded-full" src="/icon/githubIcon.svg" alt="Avatar" />
                                    <div className="whitespace-nowrap text-sm font-medium text-white">
                                        git hub
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="flex gap-4 pt-12 md:pt-10">
                            <button
                                onClick={handlePrev}
                                className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
                            >
                                <IconArrowLeft className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-400" />
                            </button>
                            <button
                                onClick={handleNext}
                                className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
                            >
                                <IconArrowRight className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:-rotate-12 dark:text-neutral-400" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

const Badge = ({
    label,
    className,
}: {
    label: string;
    className?: string;
}) => {
    return (
        <div
            className={`inline-flex items-center rounded-full border border-[#868693] bg-gradient-to-r from-[#3B3B3B52]  to-[#1A1A1A00] px-3 py-1 text-sm font-medium text-[#e4e4e9] ${className}`}
        >
            {label}
        </div>
    );
};