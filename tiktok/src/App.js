import React, { Component, useEffect, useState } from "react";
import "./App.css";
import Video from "./Video";
import { db } from "./firebase";

function App() {
  const [videos, setVideoes] = useState([]);
  useEffect(() => {
    const unsubscribe = db.collection("videos").onSnapshot((snapshot) => {
      setVideoes(snapshot.docs.map((doc) => doc.data()));

      snapshot.docs.map((doc) => console.log(doc.data()));
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="app">
      <div className="app__videos">
        ASad Tik Tok
        {videos.map((video) => (
          <Video
            url={video.url}
            channel={video.channel}
            description={video.description}
            song={video.song}
            likes={video.likes}
            messages={video.messages}
            shares={video.shares}
          />
        ))}
        {/* <Video
          url="http://www.newdesignfile.com/postpic/2009/07/studio-background-psd-free-download_139168.jpg"
          channel="asadullahabkari 786"
          description="Check out the video"
          song="hello how aree you ?"
          likes={509}
          messages={"messages"}
          shares={"309"}
        />
        <Video />
        <Video />
        <Video /> */}
      </div>
    </div>
  );
}

export default App;
