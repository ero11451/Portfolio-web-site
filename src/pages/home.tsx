import { AnimatedprojectDemo } from "../components/AnimatedProjectDemo";
import { Certifications } from "../components/Certifications";
import { ContactMe } from "../components/ContactMe";
import { Educations } from "../components/Educations";
import { Experience } from "../components/Experience";
import { Header } from "../components/Hearder";
import { NavbarDemo } from "../components/NavbarDemo";
import { Testimonials } from "../components/Testimonials";
import { YoutubeSectionCards } from "../components/YoutubeSectionCards";
// import { BackgroundGradientAnimationDemo } from "../components/BackgroundGradientAnimationDemo";
// import { CardSpotlightDemo } from "../components/CardSpotlightDemo";
// import { MyProject } from "../components/MyProject";
// import { Navbar } from "../components/ui/resizable-navbar";



export const HomePage = () => {
    return (
        <div className="  " id="hs-scrollspy-to-destroy-parent ">
            {/* <BackgroundGradientAnimationDemo> */}
                <NavbarDemo />
                <Header />

            <div className="bg-gradient-to-r from-[#0C0C0D]  to-[#0C0C0D] min-h-screen" id="hs-scrollspy-to-destroy">
                {/* <MyProject /> */}

                {/* <BackgroundGradientAnimationDemo> */}
                <section id="Experience" className="transition-all overflow-hidden duration-500 mt-10">

                    <Experience />
                </section>
                {/* </BackgroundGradientAnimationDemo> */}

                <section id="Projects" className="transition-all duration-500 mt-10">
                    <AnimatedprojectDemo />
                </section>
                {/* <CardSpotlightDemo /> */}

                <section id="YouTube" className="transition-all duration-500">
                    <YoutubeSectionCards />
                </section>
                <section id='Education' className="transition-all duration-500">
                    <Certifications />

                    <Educations />

                </section>
                <section id="contact" className="transition-all duration-500">

                    <Testimonials />
                    <ContactMe />
                </section>

            </div>



            {/* </BackgroundGradientAnimationDemo> */}

        </div>
    );
}