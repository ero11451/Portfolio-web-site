export function Certifications() {
    return (
        <div className="w-full px-4 py-2 m-4 font-sans text-white antialiased lg:mx-auto md:max-w-6xl md:px-8 lg:px-12 lg:mt-20 lg:flex flex-col gap-10 lg:p-20">
            {/* Header */}
            <div>
                <p className="text-2xl lg:text-4xl font-semibold">Certifications and Achievements</p>
                <p className="mt-3 text-sm font-light text-gray-300">
                    Recognitions and credentials earned through continuous learning and development.
                </p>
            </div>

            {/* Certifications List */}
            <div className="space-y-6">
                {/* Certificate Card */}
                {[
                    {
                        date: "2024",
                        title: "Artificial Intelligence Foundations",
                        issuer: "LinkedIn Learning",
                    },
                    {
                        date: "2024",
                        title: "React.JS Essential Training",
                        issuer: "LinkedIn Learning",
                    },
                    {
                        date: "2024",
                        title: "Introduction to Artificial Intelligence",
                        issuer: "LinkedIn Learning",
                    },
                    {
                        date: "2024",
                        title: "Azure Machine Learning Development: Part 1",
                        issuer: "Microsoft",
                    },
                    {
                        date: "2024",
                        title: "Microsoft Azure Fundamentals",
                        issuer: "Microsoft",
                    },
                ].map((cert, index) => (
                    <div
                        key={index}
                        className=" grid lg:grid-cols-12  p-5 gap-6 rounded-lg text-xs text-white bg-[#5E5E5E]/20 border border-[#5E5E5E]"
                    >
                        <div className="col-span-3 gap-3 flex">
                            <img src="icon/cetificationICon.svg" alt="Certificate icon" className="w-8 h-8" />
                            <div className="flex flex-col gap-1">
                                <p className="text-xs font-light text-gray-300">{cert.date}</p>
                                <p className="text-sm font-medium">{cert.issuer}</p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center col-span-8 flex-1 gap-1">
                            <p className="lg:text-xl font-bold">{cert.title}</p>
                            {/* <p className="text-sm font-light text-gray-300">Issued by {cert.issuer}</p> */}
                        </div>
                        <img src="icon/arrowInABoxIcon.png" alt="View certificate" className="w-5 h-5 self-start md:self-center" />
                    </div>
                ))}
            </div>
        </div>

    )
}