import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";
const Video = ({
  url,
  channel,
  description,
  song,
  likes,
  messages,
  shares,
}) => {
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
      <img alt="asad" ref={VideoRef} onClick={onVideoPress} src={url} />
      <VideoFooter channel={channel} description={description} song={song} />
      <VideoSidebar likes={likes} messages={messages} shares={shares} />
    </div>
  );
};

export default Video;
