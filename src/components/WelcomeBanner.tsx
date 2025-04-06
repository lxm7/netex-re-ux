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
    <div className="absolute top-0 left-0 right-0 z-30 pt-10 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="flex items-center gap-4 bg-black/20 backdrop-blur-sm p-4 rounded-lg">
          <Avatar className="h-14 w-14 border-2 border-[var(--primary)]">
            <AvatarFallback className="bg-gray-900 text-white text-xl font-medium">
              {userInitial}.
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <h2 className="text-xl font-medium text-white">
              Welcome back, {userName}
            </h2>
            <a
              href="/"
              className="text-[var(--primary)] hover:text-[var(--primary)] text-sm"
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
