
import { useState } from "react";
import { Navbar, NavBody, NavbarLogo, NavbarButton, MobileNav, MobileNavHeader, MobileNavToggle, MobileNavMenu } from "./ui/resizable-navbar";

export  function NavbarDemo() {
    const navItems = [
        {
            name: "Experience",
            link: "#Experience",
        },
        {
            name: "Projects",
            link: "#Projects",
        },
        {
            name: "My Education",
            link: "#Education",
        },
        // {
        //     name: "My Skills",
        //     link: "#pricingfff",
        // },
        {
            name: "YouTube",
            link: "#YouTube",
        },
        {
            name: "Contact Me",
            link: "#contact",
        },
        // {
        //     name: "Certifications",
        //     link: "#contacdt",
        // },
    ];

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="fixed top-0 z-50 w-screen bg-[#0C0C0D] bg-opacity-80 backdrop-blur-sm shadow-lg" data-hs-scrollspy="#hs-scrollspy-to-destroy" data-hs-scrollspy-scrollable-parent="#hs-scrollspy-to-destroy-parent" >
        <Navbar>
          {/* Desktop Navigation */}
          <NavBody>
            <NavbarLogo />
            <div className="flex items-center gap-4">
              {navItems.map((item) => (
                    
                <NavbarButton variant="secondary"   href={item.link}key={item.link}>
                 
                 {item.name} 
                </NavbarButton>
              ))}
            </div>
          </NavBody>
      
          {/* Mobile Navigation */}
          <MobileNav>
            <MobileNavHeader>
              <NavbarLogo />
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </MobileNavHeader>
      
            <MobileNavMenu
              className="bg-white "
              isOpen={isMobileMenuOpen}
              onClose={() => setIsMobileMenuOpen(false)}
            >
              {navItems.map((item, idx) => (
                <a
                  key={`mobile-link-${idx}`}
                  href={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="relative "
                >
                  <span className="block">{item.name}</span>
                </a>
              ))}
            </MobileNavMenu>
          </MobileNav>
        </Navbar>
      </div>
      
    );
}

