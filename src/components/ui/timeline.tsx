import {
    useScroll,
    useTransform,
    motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";

{/* <svg width="64px" height="64px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><defs><linearGradient id="a" x1="-133.268" y1="-202.91" x2="-133.198" y2="-202.84" gradientTransform="translate(25243.061 38519.17) scale(189.38 189.81)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#387eb8"></stop><stop offset="1" stop-color="#366994"></stop></linearGradient><linearGradient id="b" x1="-133.575" y1="-203.203" x2="-133.495" y2="-203.133" gradientTransform="translate(25309.061 38583.42) scale(189.38 189.81)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ffe052"></stop><stop offset="1" stop-color="#ffc331"></stop></linearGradient></defs><title>file_type_python</title><path d="M15.885,2.1c-7.1,0-6.651,3.07-6.651,3.07V8.36h6.752v1H6.545S2,8.8,2,16.005s4.013,6.912,4.013,6.912H8.33V19.556s-.13-4.013,3.9-4.013h6.762s3.772.06,3.772-3.652V5.8s.572-3.712-6.842-3.712h0ZM12.153,4.237a1.214,1.214,0,1,1-1.183,1.244v-.02a1.214,1.214,0,0,1,1.214-1.214h0Z" style="fill:url(#a)"></path><path d="M16.085,29.91c7.1,0,6.651-3.08,6.651-3.08V23.65H15.985v-1h9.47S30,23.158,30,15.995s-4.013-6.912-4.013-6.912H23.64V12.4s.13,4.013-3.9,4.013H12.975S9.2,16.356,9.2,20.068V26.2s-.572,3.712,6.842,3.712h.04Zm3.732-2.147A1.214,1.214,0,1,1,21,26.519v.03a1.214,1.214,0,0,1-1.214,1.214h.03Z" style="fill:url(#b)"></path></g></svg> */}

interface TimelineEntry {
    title: string;
    content: React.ReactNode;
}

export const Timeline = ({ data }) => {
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
                    {data.map((item, index) => (
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
                                    {item.title}
                                </h3>
                                {item.content}
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
