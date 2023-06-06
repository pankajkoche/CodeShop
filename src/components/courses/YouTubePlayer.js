import React from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ videoId }) => {
  const opts = {
    playerVars: {
      // Hiding related videos at the end of the video playback
      rel: 0,
      // Hiding the video title and uploader information
      iv_load_policy: 3,
    },
  };

  return (
    <div className="relative ">
      <div className="">
        <YouTube
          videoId={videoId}
          opts={opts}
          className=" items-center   "
        />
        <div className="absolute top-0 left-0  md:w-[640px] h-1z bg-gray-900"></div>
      </div>
    </div>
  );
};

export default VideoPlayer;
