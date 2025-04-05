import type React from "react";

const VideoAttribution: React.FC = () => {
  return (
    <div className="text-xs text-gray-400 text-center py-2 relative z-20">
      <p>
        Video provided by{" "}
        <a
          href="https://www.pond5.com/stock-footage/item/139749559-back-view-business-woman-talking-about-sale-report-video-con"
          className="underline hover:text-gray-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          ChayTee
        </a>
        , from{" "}
        <a
          href="https://www.pond5.com/"
          className="underline hover:text-gray-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pond5
        </a>
      </p>
    </div>
  );
};

export default VideoAttribution;
