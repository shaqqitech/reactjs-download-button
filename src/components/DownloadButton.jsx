import React, { useState } from "react";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { BsArrowClockwise } from "react-icons/bs";
import tick from "../../tick.json";
import Lottie from "lottie-react";

const DownloadButton = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [showLottie, setShowLottie] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);

    // Simulate a download delay (you can replace this with your actual download logic)
    setTimeout(() => {
      setIsDownloading(false);
      setShowLottie(true); // Show Lottie animation after download
    }, 4000);
  };

  return (
    <div className="w-screen min-h-screen bg-gray-900 flex justify-center items-center">
      <button
        onClick={handleDownload}
        disabled={isDownloading || showLottie} // Disable the button during download and Lottie animation
        className="text-white font-bold focus:outline-none transition-all duration-500 ease-in-out"
      >
        {isDownloading ? (
          <>
            <div className="w-full flex px-3 py-2 justify-between items-center bg-blue-600 rounded-full">
              <p className="animate-spin">
                <BsArrowClockwise size={25} />
              </p>
              Downloading...
            </div>
          </>
        ) : showLottie ? (
          <div className="w-20 bg-transparent">
            <Lottie animationData={tick} />
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center gap-2 bg-green-600 hover:bg-green-700 px-3 py-2 rounded-full">
              <div className="animate-bounce">
                <AiOutlineCloudDownload size={25} />
              </div>
              Download
            </div>
          </>
        )}
      </button>
    </div>
  );
};

export default DownloadButton;
