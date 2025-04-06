import type React from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface WelcomeBannerProps {
  userName: string;
  userInitial: string;
}

const WelcomeBanner: React.FC<WelcomeBannerProps> = ({
  userName = "Alex",
  userInitial = "A",
}) => {
  return (
    <div className="absolute top-0 left-0 right-0 z-30 sm:h-auto pt-1 px-2 sm:pt-10 sm:px-6 lg:px-8">
      <div className="container mx-auto h-full">
        <div
          className="flex items-center gap-1 h-full bg-black/20
                     backdrop-blur-sm [@media(max-width:640px)]:p-2 md:p-2 rounded-lg"
        >
          <Avatar
            className="h-6 w-6 sm:h-14 sm:w-14 border-2 
                       border-[var(--primary)]"
          >
            <AvatarFallback className="bg-gray-900 text-white text-xs sm:text-xl font-medium">
              {userInitial}.
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col justify-center">
            <h2 className="text-xs sm:text-xl font-medium text-white">
              Welcome back, {userName}
            </h2>
            <a
              href="/"
              className="text-[10px] sm:text-sm text-[var(--primary)]
                         hover:text-[var(--primary)]"
            >
              Add occupation and interests
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeBanner;
