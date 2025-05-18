import {
    useScroll,
    useTransform,
    motion,
} from "motion/react";
import { Key , useEffect, useRef, useState } from "react";


interface TimelineEntry {
    title: string;
    content: React.ReactNode;
}

export const Timeline = ({ data = [{ title: "", content: <></> }] }: { data: TimelineEntry[] }) => {
    const ref = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            setHeight(rect.height);
        }
    }, [ref]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 10%", "end 50%"],
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    return (
        <div
            className="w-full bg-transparent lg:grid lg:grid-cols-2  font-sans md:px-10"
            ref={containerRef}
        >
            <div className="bg-[#5E5E5E] bg-opacity-60 h-fit p-10  rounded-lg lg:mt-32">
                <h2 className="text-lg md:text-4xl mb-4 text-white max-w-2xl font-bold">
                    Who is Ero Osamuyi
                </h2>
                <p className="text-white dark:text-neutral-300 text-sm md:text-base max-w-sm">
                Technology enthusiast, creative, and AI optimist
                </p>
            </div>
            <div>
                {/* <h1 className="m-10 text-white text-bold text-4xl">Experience</h1> */}

                <div ref={ref} className="relative pb-20  w-full">
                    {data.map((item: TimelineEntry,
                         index: Key | null | undefined) => (
                        <div
                            key={index}
                            className="flex justify-start pt-10 md:pt-40 md:gap-10"
                        >
                            <div className="sticky flex flex-row md:flex-row z-40 items-center top-40 self-start ">
                                <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-none  flex items-center justify-center">
                                    <div className="h-4 w-4 rounded-full bg-slate-400  border border-neutral-300  p-2" />
                                </div>

                                {/* <div className="hidden md:block  text-xl md:pl-20 md:text-5xl bg-red-400 font-bold text-white w-full">
                                {item.title}
                                {item.content}

                            </div> */}

                            </div>

                            <div className="relative pl-20 pr-4 md:pl-4 md:w-full ">
                                <h3 className=" block text-2xl mb-4 text-left font-bold text-white ">
                                    {item?.title}
                                </h3>
                                {item?.content}
                            </div>
                        </div>
                    ))}
                    <div
                        style={{
                            height: height + "px",
                        }}
                        className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
                    >
                        <motion.div
                            style={{
                                height: heightTransform,
                                opacity: opacityTransform,
                            }}
                            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
