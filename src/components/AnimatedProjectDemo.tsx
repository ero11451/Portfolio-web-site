import { Animatedproject, IProject } from "./ui/animated-project";

export  function AnimatedprojectDemo() {
  const project: IProject[] = [
     {
      quote: "Euphoria is a platform that allows users to manage their personal insurance policies, with features for tracking claims, payments, and more.",
      name: "AXA insurance",
      designation: "Full Stack Developer",
      technology:['Typescript', '.NET', 'Angular', 'Node.js', 'Tailwind CSS', 'Bootstrap', 'mySQL','Redis' ],
      src: "https://raw.githubusercontent.com/ero11451/efosa-euphoria/refs/heads/main/src/assets/images/axa_loading_1.gif",
      github: 'https://github.com/ero11451/efosa-euphoria'
    },
    {
      quote: "10zyme is a platform that allows users to manage their health and wellness, with features for tracking fitness goals, nutrition, and more.",
      name: "10zyme",
      designation: "Mobile Application Developer",
      technology:['Typescript', 'React native', 'React', 'Node.js', 'Tailwind CSS', 'Firebase' ],
      src: "image/10zyme-2024-Logo-Blue-Whale-Without-Copyright.png",
      github: 'https://github.com/ero11451/efosa-euphoria'
    },
    {
      quote: "Orca is a platform that allows businesses collect payments across multiple channels, including USSD, cards, and bank transfers.",
      name: "Orca",
      designation: "Full Stack Developer",
      technology:['Typescript', '.NET', 'Angular', 'Node.js', 'Tailwind CSS', 'Bootstrap', 'mySQL','Redis' ],
      src: "/image/orca.png",
    },

    {
      quote: "Neeboh is a platform that allows users to create and manage their own personal websites, with customizable templates and easy-to-use tools.",
      name: "Neeboh",
      technology : ["React", "Node.js", "C#", "mySQL", "Tailwind CSS", "ASP.NET"],
      designation: "Full Stack Developer",
      src: "/image/neeboh-homepage.png",
    },
    
    {
      quote: "Noted is a platform that allows businesses manage their facilities and assets, with features for tracking maintenance, inventory, and more.",
      name: "Noted",
      technology : ["React", "Node.js", "C#", "mySQL", "Tailwind CSS", "ASP.NET"],
      designation: "Full Stack Developer",
      src: "/image/noted-screenshot.png",
    },
    {
      quote: "Xceed 365 is a HR comprehensive platform designed to streamline business operations and enhance productivity.",
      name: "Xceed 365",
      technology : ["Angular", "Node.js", "C#", "mySQL", "Tailwind CSS", "ASP.NET"],
      designation: "Full Stack Developer",
      src: "/image/xceed-bg.png",
    },
    {
      quote: "A platform connecting skilled individuals with job opportunities, with user-friendly interfaces and robust backend integration.",
      name: "MySkillConnect",
      designation: "Mobile Developer (Flutter)",
      src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
      technology: ["Flutter", "Firebase", "Dart"],
    },
    {
      quote: "An app designed for Miracle Assembly to deliver sermons, livestreams, and community events to members.",
      name: "Miracle Assembly App",
      designation: "Mobile Developer",
      technology:[],
      src: "https://ix-marketing.imgix.net/2024-06_blog_the-power-of-images_image-4_drive-engagement.jpg?ixembed=1717710892533&auto=format,compress",
    },
    {
      quote: "The official mobile app for Voice of Freedom Ministries International, offering content delivery and engagement tools.",
      name: "Voice of Freedom",
      designation: "Lead Mobile Developer",
      technology:[],
      src: "https://images.unsplash.com/photo-1579403124614-197f69d8187b?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      quote: "Football Base is a passion project for football enthusiasts, providing news, match tracking, and team info in one app.",
      name: "Football Base",
      designation: "Frontend & UI Developer",
      technology:[],
      src: "https://images.unsplash.com/photo-1604537529428-15bcbeecfe4d?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
  ];

  return (
    <div>
      <div className="lg:mx-auto w-fit px-4 py-2 font-sans antialiased md:max-w-6xl">
        <h1 className="text-4xl font-bold text-white">My Projects</h1>
        <p className="mt-4 text-lg text-gray-300">Explore my recent projects</p>
      </div>

      <Animatedproject project={project} />
    </div>
  );
}
