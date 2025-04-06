import { useState, useEffect, useRef } from "react"; // Added useEffect, useRef
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ChevronDown, Menu, Globe } from "lucide-react";
import Logo from "./Logo";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Ref for the mobile menu trigger button
  const mobileMenuTriggerRef = useRef<HTMLButtonElement>(null);

  // Inside your Header component:
  const [currentLang, setCurrentLang] = useState<"EN" | "ES">("EN"); // Example state for current language

  // Function to handle language change (replace console.log with actual logic)
  const handleLangChange = (lang: "EN" | "ES") => {
    setCurrentLang(lang);
    // TODO: Implement actual language switching logic here
    // (e.g., using i18next, react-intl, or custom context)
    console.log(`Language changed to ${lang}`);
  };

  // Focus management: Return focus to menu button when sheet closes
  useEffect(() => {
    if (!isMobileMenuOpen) {
      // Small delay to allow sheet closing animation
      const timer = setTimeout(() => {
        mobileMenuTriggerRef.current?.focus();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isMobileMenuOpen]);

  return (
    // Added role="banner" for clarity, though <header> implies it
    <header
      role="banner"
      className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          {/* Added aria-label for homepage link clarity */}
          <a
            href="/"
            className="flex items-center space-x-2"
            aria-label="netex homepage"
          >
            <Logo aria-hidden="true" /> {/* Hide decorative logo from AT */}
            <span className="font-bold text-xl">netex</span>
          </a>
          {/* Added aria-label to distinguish main navigation */}
          <nav aria-label="Main navigation" className="hidden md:flex gap-6">
            {/* Solutions Dropdown */}
            <DropdownMenu>
              {/* Button has implicit aria-haspopup="true" from Shadcn */}
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-bold">
                Solutions
                <ChevronDown className="h-4 w-4" aria-hidden="true" />
              </DropdownMenuTrigger>
              {/* Shadcn handles menu roles and keyboard nav */}
              <DropdownMenuContent className="p-2" align="start">
                <DropdownMenuItem asChild>
                  {/* Use asChild for proper link semantics */}
                  <a
                    href="/solutions/netex-cloud"
                    className="items-start flex flex-col"
                  >
                    <span className="font-bold">Netex Cloud</span>
                    <span className="text-xs text-muted-foreground">
                      Learning Ecosystem
                    </span>
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a
                    href="/solutions/netex-studio"
                    className="items-start flex flex-col"
                  >
                    <span className="font-bold">Netex Studio</span>
                    <span className="text-xs text-muted-foreground">
                      Bespoke Content Creation
                    </span>
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a
                    href="/solutions/virtual-college"
                    className="items-start flex flex-col"
                  >
                    <span className="font-bold">Virtual College</span>
                    <span className="text-xs text-muted-foreground">
                      On-Demand Catalogue
                    </span>
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Resources Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-bold">
                Resources
                <ChevronDown className="h-4 w-4" aria-hidden="true" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem asChild>
                  <a href="/blog" className="items-start flex flex-col">
                    <span className="font-bold text-left">Blog</span>
                    <span className="text-xs text-muted-foreground">
                      We Love Learning
                    </span>
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="/case-studies">Case Studies</a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* About Us Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-bold">
                About Us
                <ChevronDown className="h-4 w-4" aria-hidden="true" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem asChild>
                  <a href="/about/company">Company</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="/about/careers">Careers</a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>

        {/* Right side controls */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                {/* Button now acts as the trigger */}
                <Button
                  variant="ghost"
                  className="flex items-center gap-1 px-2" // Added gap and padding
                  // Dynamic aria-label indicating action and current state
                  aria-label={`Change language, current language ${
                    currentLang === "EN" ? "English" : "Español"
                  }`}
                >
                  <Globe className="h-4 w-4" aria-hidden="true" />
                  {/* Display the current language abbreviation */}
                  <span className="text-sm font-medium">{currentLang}</span>
                  {/* Optional: Add ChevronDown like other dropdowns */}
                  {/* <ChevronDown className="h-4 w-4 opacity-50" aria-hidden="true" /> */}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {" "}
                {/* Align menu to the right */}
                <DropdownMenuItem
                  onClick={() => handleLangChange("EN")}
                  // Indicate current selection visually and for AT (optional but good)
                  aria-current={currentLang === "EN" ? "true" : "false"}
                  className={currentLang === "EN" ? "font-semibold" : ""} // Example visual cue
                >
                  English (EN)
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => handleLangChange("ES")}
                  aria-current={currentLang === "ES" ? "true" : "false"}
                  className={currentLang === "ES" ? "font-semibold" : ""} // Example visual cue
                >
                  Español (ES)
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          {/* Contact Button - Wrap link inside button for consistency or use link styled as button */}
          <Button asChild size="lg" className="hidden md:flex font-bold">
            <a href="/contact">Contact</a>
          </Button>
          {/* Mobile Language Toggle Button */}
          <Button
            variant="ghost" // Simple visual style
            size="sm" // Smaller size to fit header
            className="md:hidden px-2" // Only on mobile, adjust padding
            onClick={() => handleLangChange(currentLang === "EN" ? "ES" : "EN")} // Toggle logic
            // Clear aria-label describing action and current state
            aria-label={`Switch language, current language ${
              currentLang === "EN" ? "English" : "Español"
            }`}
          >
            {/* Display current language abbreviation */}
            {currentLang}
          </Button>
          {/* Mobile Menu Trigger */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              {/* Added aria-controls and ref */}
              <Button
                ref={mobileMenuTriggerRef} // Assign ref
                variant="outline"
                size="icon"
                className="md:hidden"
                aria-label="Open navigation menu" // More descriptive label
                aria-controls="mobile-menu-content" // Points to the SheetContent id
                // aria-expanded is handled by Shadcn's SheetTrigger
              >
                <Menu className="h-5 w-5" aria-hidden="true" />{" "}
                {/* Hide decorative icon */}
              </Button>
            </SheetTrigger>
            {/* Mobile Menu Content */}
            <SheetContent
              side="right"
              id="mobile-menu-content" // ID for aria-controls
              aria-labelledby="mobile-menu-title" // Add a title for the sheet
            >
              {/* Added aria-label and a visually hidden title */}
              <nav
                aria-label="Mobile navigation"
                className="flex flex-col gap-4 p-6"
              >
                {/* Added a visually hidden title for screen readers */}
                <h2 id="mobile-menu-title" className="sr-only">
                  Mobile Navigation Menu
                </h2>

                {/* Simplified links - removed extra parent links */}
                <a
                  href="/solutions/netex-cloud"
                  className="text-lg font-medium"
                >
                  Netex Cloud
                </a>
                <a
                  href="/solutions/netex-studio"
                  className="text-lg font-medium"
                >
                  Netex Studio
                </a>
                <a
                  href="/solutions/virtual-college"
                  className="text-lg font-medium"
                >
                  Virtual College
                </a>

                <a href="/blog" className="text-lg font-medium mt-2">
                  Blog
                </a>
                <a href="/case-studies" className="text-lg font-medium">
                  Case Studies
                </a>

                <a href="/about/company" className="text-lg font-medium mt-2">
                  Company
                </a>
                <a href="/about/careers" className="text-lg font-medium">
                  Careers
                </a>

                <a href="/contact" className="text-lg font-bold mt-2">
                  Contact
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
