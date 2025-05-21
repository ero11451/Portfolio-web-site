export  function Educations() {
  return (
    <div className="mx-auto w-full m-4 px-4 pb-20 py-2 font-sans antialiased md:max-w-6xl md:px-8 lg:px-12 lg:mt-20 text-white flex flex-col gap-10 lg:p-20">
    {/* Header */}
    <div>
      <p className="text-4xl font-semibold">Education</p>
      <p className="font-thin text-sm text-gray-300">
        A blend of academic foundations and industry-relevant training that shapes my problem-solving and technical mindset.
      </p>
    </div>
  
    {/* Degree Card */}
    {[
      {
        date: "Sep 2023 – Dec 2024 (Expected)",
        degree: "MSc Information Technology and Business Intelligence",
        university: "Robert Gordon University, UK",
        details:
          "Focused on the application of data analytics, machine learning, and business intelligence in modern enterprise environments. Coursework included cloud computing, AI systems, and digital transformation strategies.",
      },
      {
        date: "May 2013 – Sep 2017",
        degree: "BSc Political Science Education",
        university: "Ambrose Alli University, Nigeria",
        details:
          "Combined a strong foundation in social science research with teaching methodology. Developed analytical and communication skills with a focus on political systems and civic engagement.",
      },
    ].map((edu, index) => (
      <div
        key={index}
        className="grid lg:grid-cols-12 md:flex-row justify-between gap-8 text-white bg-[#5E5E5E]/20 border border-[#5E5E5E] rounded-lg p-5"
      >
        {/* Date & Degree Summary */}
        <div className="col-span-5">
          <div className="flex flex-col gap-1">
            <p className="font-thin text-sm text-gray-300">{edu.date}</p>
            <p className="font-medium text-sm">{edu.degree}</p>
          </div>
        </div>
  
        {/* Expandable Details */}
        <div className="flex-1 col-span-7">
          <button
            type="button"
            className="hs-collapse-toggle w-full flex items-center justify-between"
            id={`hs-collapse-${index}`}
            aria-expanded="false"
            aria-controls={`hs-collapse-content-${index}`}
            data-hs-collapse={`#hs-collapse-content-${index}`}
          >
            <div className="text-left w-full">
              <p className="font-bold text-lg">{edu.university}</p>
            </div>
            <svg
              className="hs-collapse-open:rotate-180 shrink-0 size-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
          <div
            id={`hs-collapse-content-${index}`}
            className="hs-collapse hidden w-full overflow-hidden transition-[height] duration-300 mt-2"
            aria-labelledby={`hs-collapse-${index}`}
          >
            <p className="font-thin text-sm text-gray-200">{edu.details}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
  
  )
}