import { useState } from "react";
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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <a href="/" className="flex items-center space-x-2">
            <Logo />
            <span className="font-bold text-xl">netex</span>
          </a>
          <nav className="hidden md:flex gap-6">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium">
                Solutions <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="p-2" align="start">
                <DropdownMenuItem>
                  <a href="/solutions/netex-cloud" className="flex flex-col">
                    <span className="font-medium">Netex Cloud</span>
                    <span className="text-xs text-muted-foreground">
                      Learning Ecosystem
                    </span>
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="/solutions/netex-studio" className="flex flex-col">
                    <span className="font-medium">Netex Studio</span>
                    <span className="text-xs text-muted-foreground">
                      Bespoke Content Creation
                    </span>
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a
                    href="/solutions/virtual-college"
                    className="flex flex-col"
                  >
                    <span className="font-medium">Virtual College</span>
                    <span className="text-xs text-muted-foreground">
                      On-Demand Catalogue
                    </span>
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium">
                Resources <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem>
                  <a href="/blog" className="flex flex-col">
                    <span className="font-medium">Blog</span>
                    <span className="text-xs text-muted-foreground">
                      We Love Learning
                    </span>
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="/case-studies">Case Studies</a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium">
                About Us <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem>
                  <a href="/about/company">Company</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="/about/careers">Careers</a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Globe className="h-4 w-4" />
            <span className="sr-only">Language</span>
          </Button>
          <Button className="hidden md:flex">
            <a href="/contact">Contact</a>
          </Button>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 p-6">
                <a href="/solutions" className="text-lg font-medium">
                  Solutions
                </a>
                <a href="/solutions/netex-cloud" className="text-sm pl-4">
                  Netex Cloud
                </a>
                <a href="/solutions/netex-studio" className="text-sm pl-4">
                  Netex Studio
                </a>
                <a href="/solutions/virtual-college" className="text-sm pl-4">
                  Virtual College
                </a>
                <a href="/resources" className="text-lg font-medium mt-2">
                  Resources
                </a>
                <a href="/about" className="text-lg font-medium mt-2">
                  About Us
                </a>
                <a href="/contact" className="text-lg font-medium mt-2">
                  Contact
                </a>
                <a
                  href="/language"
                  className="text-lg font-medium mt-2 flex items-center gap-2"
                >
                  <Globe className="h-4 w-4" /> Language
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
