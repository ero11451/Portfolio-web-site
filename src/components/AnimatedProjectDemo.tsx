import { Animatedproject } from "./ui/animated-project";

export  function AnimatedprojectDemo() {
  const project = [
    {
      quote: "A mobile app developed for TSL Nigeria to manage transportation logistics and enhance operational efficiency.",
      name: "TSL Nigeria App",
      designation: "Full Stack Developer",
      src: "/image/orca.png",
    },

    {
      quote: "A mobile app developed for TSL Nigeria to manage transportation logistics and enhance operational efficiency.",
      name: "TSL Nigeria App",
      designation: "Full Stack Developer",
      src: "/image/neeboh-homepage.png",
    },
    {
      quote: "A mobile app developed for TSL Nigeria to manage transportation logistics and enhance operational efficiency.",
      name: "TSL Nigeria App",
      designation: "Full Stack Developer",
      src: "/image/noted-screenshot.png",
    },
    {
      quote: "A mobile app developed for TSL Nigeria to manage transportation logistics and enhance operational efficiency.",
      name: "TSL Nigeria App",
      designation: "Full Stack Developer",
      src: "/image/xceed-bg.png",
    },
    {
      quote: "A platform connecting skilled individuals with job opportunities, with user-friendly interfaces and robust backend integration.",
      name: "MySkillConnect",
      designation: "Mobile Developer (Flutter)",
      src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      quote: "An app designed for Miracle Assembly to deliver sermons, livestreams, and community events to members.",
      name: "Miracle Assembly App",
      designation: "Mobile Developer",
      src: "https://images.unsplash.com/photo-1573164574237-6083f9a8100b?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      quote: "The official mobile app for Voice of Freedom Ministries International, offering content delivery and engagement tools.",
      name: "Voice of Freedom",
      designation: "Lead Mobile Developer",
      src: "https://images.unsplash.com/photo-1579403124614-197f69d8187b?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      quote: "Football Base is a passion project for football enthusiasts, providing news, match tracking, and team info in one app.",
      name: "Football Base",
      designation: "Frontend & UI Developer",
      src: "https://images.unsplash.com/photo-1604537529428-15bcbeecfe4d?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
  ];

  return (
    <div>
      <div className="mx-auto w-full px-4 py-2 font-sans antialiased md:max-w-6xl">
        <h1 className="text-4xl font-bold text-white">My Projects</h1>
        <p className="mt-4 text-lg text-gray-300">Explore my recent projects</p>
      </div>

      <Animatedproject project={project} />
    </div>
  );
}
