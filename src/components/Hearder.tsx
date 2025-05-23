import { TextGenerateEffect } from "./ui/text-generate-effect";

export function Header() {
    return (
        <>


            <div className="lg:max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-10">

                <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center pt-32 justify-center text-white lg:pl-20 lg:justify-around">
                    <div>
                        <p>Hello there👋  I am Osimuyi- </p>
                        <TextGenerateEffect 
                            textStyle="text-4xl text-white"
                            words={"Software Developer | Content Creator | Tech Educator | AI Enthusiast"} />
                        <p className="mt-3 lg:text-lg font-thin text-sm text-gray-800 dark:text-neutral-400  text-white">
                           Software Developer and Tech Educator passionate about building scalable apps, creating engaging content, and exploring real-world AI applications.</p>
                        <div className="mt-7 grid gap-3 w-full sm:inline-flex">
                            <a  className="py-3 px-4 inline-flex justify-center items-center gap-x-2 border-white text-sm font-medium rounded-full border border-transparent bg-none text-white hover:bg- focus:outline-hidden focus:bg- disabled:opacity-50 disabled:pointer-events-none" href="mail:eroosamuyi11451@gmail.com">
                                Send me a mail
                                <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                            </a>
                            <a className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" href="+44 7473 898269">
                                Give me a call
                                <svg width="12px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="white">
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                    <g id="SVGRepo_iconCarrier"> <path d="M3 7.2C3 6.07989 3 5.51984 3.21799 5.09202C3.40973 4.71569 3.71569 4.40973 4.09202 4.21799C4.51984 4 5.0799 4 6.2 4H17.8C18.9201 4 19.4802 4 19.908 4.21799C20.2843 4.40973 20.5903 4.71569 20.782 5.09202C21 5.51984 21 6.0799 21 7.2V20L17.6757 18.3378C17.4237 18.2118 17.2977 18.1488 17.1656 18.1044C17.0484 18.065 16.9277 18.0365 16.8052 18.0193C16.6672 18 16.5263 18 16.2446 18H6.2C5.07989 18 4.51984 18 4.09202 17.782C3.71569 17.5903 3.40973 17.2843 3.21799 16.908C3 16.4802 3 15.9201 3 14.8V7.2Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /> </g>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* <div className="flex justify-center md:justify-end">
                        <img
                            src="https://images.unsplash.com/photo-1665686377065-08ba896d16fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&h=800&q=80"
                            alt="Illustration" className="w-full h-96 object-contain max-w-sm md:max-w-lg lg:max-w-xl" />
                    </div> */}

                </div>
            </div>
        </>
    )
}