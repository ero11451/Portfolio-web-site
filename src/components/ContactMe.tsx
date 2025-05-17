
import { Label } from "@radix-ui/react-label";
import { Input } from "./ui/input";
import { cn } from "../lib/utils";
import { TextArea } from "./ui/TextArea";


export  function ContactMe() {
    let socialLinks = [
        {
            id:'1',
            title: "LinkedIn",
            discription: "Connect with me on LinkedIn",
            link: 'https://www.linkedin.com/in/ero-osamuyi/',
            icon: 'icon/lindkinIcon.svg'
        },
        {
            id:'1',
            title: "GitHub",
            discription: "Connect with me on GitHub",
            link: 'https://github.com/ero11451',
            icon: 'icon/githubIcon.svg'
        },
        {
            id:'1',
            title: "Twitter",
            discription: "Connect with me on Twitter",
            link: '',
            icon: 'icon/twitter.svg'
        },
        // {
        //     id:'1',
        //     title: "Instagram",
        //     discription: "Connect with me on Instagram",
        //     link: 'https://www.linkedin.com/in/your-profile',
        //     icon: 'icon/instagramIcon.svg'
        // }
    ]
    return (
        <div>
            <div className="mx-auto w-full px-4 py-2 font-sans antialiased md:max-w-6xl md:px-8 lg:px-12 lg:mt-20 text-white  gap-10 lg:p-20">
                <div className=" lg:grid lg:grid-cols-2 gap-10">
                    <div>
                        <p className="lg:text-5xl  text-bold mb-4">Got an Idea? share it with me </p>

                        {socialLinks.map((item, index) =>

                            <a href={item.link} key={item.id} className="flex justify-between p-5 my-2 rounded-lg gap-2 items-center text-xs text-white bg-[#5E5E5E] bg-opacity-20  border-[#5E5E5E] ">
                                <div>
                                    <div className="flex items-center gap-3">
                                        <img src={item.icon} className="size-6" alt="" />
                                        <div className="flex flex-col gap-1">
                                            <p className="font-bold">{item.title}</p>
                                            <p className="font-thin">{item.discription}</p>
                                        </div>
                                    </div>
                                </div>
                                <p>
                                    &rarr;
                                </p>

                            </a>

                        )}
                    </div>
                    <FormDemo />
                </div>

            </div>
        </div>)
}



export function FormDemo() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted");
    };
    return (
        <div className="shadow-input mx-auto w-full   p-4 md:rounded-2xl lg:p-8 bg-[#5E5E5E] bg-opacity-20 text-white border-[#5E5E5E]">
            <div>

                <h2 className="text-xl font-bold ">
                    Send me message
                </h2>
            </div>

            <form className="my-8" onSubmit={handleSubmit} >

                <LabelInputContainer>
                    <Label htmlFor="FullName" className="text-sm">Full name</Label>
                    <Input id="FullName" placeholder="John Doe" type="text" />
                </LabelInputContainer>

                <LabelInputContainer className="my-4">
                    <Label htmlFor="email" className="text-sm mt-2">Email Address</Label>
                    <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
                </LabelInputContainer>

                <LabelInputContainer className="mb-8">
                    <Label htmlFor="message" className="text-sm">Send me a message</Label>
                    <TextArea
                        id="message"
                        className="resize-none"
                        placeholder=''
                    />
                </LabelInputContainer>

                <button
                    className="group/btn relative block h-10 w-full rounded-full bg-[#FFFFFF] from-black to-neutral-600 font-medium text-black shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
                    type="submit"
                >
                    Sign up
                    <BottomGradient />
                </button>



            </form>
        </div>
    );
}

const BottomGradient = () => {
    return (
        <>
            <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
            <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
        </>
    );
};

const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex w-full flex-col space-y-2", className)}>
            {children}
        </div>
    );
};
