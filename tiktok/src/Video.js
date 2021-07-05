import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";
const Video = () => {
  const VideoRef = useRef(null);
  const [play, setPlay] = useState(false);
  const onVideoPress = () => {
    if (play) {
      //videoRef.current.pause();
      alert("play");
      setPlay(false);
    } else {
      //videoRef.current.play();
      alert("pause");
      setPlay(true);
    }
  };

  return (
    <div className="video">
      asad
      <img
        alt="asad"
        ref={VideoRef}
        onClick={onVideoPress}
        src="http://www.newdesignfile.com/postpic/2009/07/studio-background-psd-free-download_139168.jpg"
      />
      <VideoFooter
        channel="asadullahabkari 786"
        description="Check out the video"
        song="hello how aree you ?"
      />
      <VideoSidebar likes={509} messages={"messages"} shares={"309"} />
    </div>
  );
};

export default Video;
