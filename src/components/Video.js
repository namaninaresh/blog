import { useRef, useState } from "react";
import React from "react";
import profileImg from "../images/2.jpg";
import Icon from "./Icons/Icon";
{
  /*import React from "react"
const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <div className="video">
    <video  autoplay="" loop="" muted="" playsinline="" className="videoPlayer"
      src={videoSrcURL}></video>
    {/* <iframe
      src={videoSrcURL}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      width={"100%"}
      height={"100%"}
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    /> 
  </div>
)
  export default Video */
}

function App(props) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [videoTime, setVideoTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const [hovered, setHovered] = useState(true);

  const videoHandler = (control) => {
    if (control === "play") {
      videoRef.current.play();
      setPlaying(true);
      var vid = document.getElementById("video1");
      setVideoTime(vid.duration);
    } else if (control === "pause") {
      videoRef.current.pause();
      setPlaying(false);
    }
  };

  const fastForward = () => {
    videoRef.current.currentTime += 5;
  };

  const revert = () => {
    videoRef.current.currentTime -= 5;
  };

  const toggleFullScreen = () => {
    if (videoRef.current) {
      videoRef.current.requestFullscreen();
    }
  };

  // window.setInterval(function () {
  //   setCurrentTime(videoRef.current?.currentTime);
  //   setProgress((videoRef.current?.currentTime / videoTime) * 100);
  // }, 1000);

  return (
    <div className="app">
      <video
        id="video1"
        poster={props.poster}
        ref={videoRef}
        className="videoPlayer"
        src={props.videoSrcURL}
        controlsList="nodownload noplaybackrate"
        disablePictureInPicture={true}
      ></video>

      <div className="controlsContainer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#fff"
          stroke-width="2"
          stroke-linecap="round"
          onClick={toggleFullScreen}
          stroke-linejoin="round"
          class="feather feather-maximize"
        >
          <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
        </svg>
        <div
          className={
            playing
              ? hovered
                ? "controls opacity_1"
                : "controls opacity_4"
              : hovered
              ? "controls opacity_1"
              : "controls opacity_4 addBackdrop"
          }
          onClick={() => setHovered(!hovered)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            onClick={revert}
            className="controlsIcons revert"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polygon points="13 19 22 12 13 5 13 19"></polygon>
            <polygon points="2 19 11 12 2 5 2 19"></polygon>
          </svg>
          {playing ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              onClick={() => videoHandler("pause")}
              className="controlsIcons "
              height="45"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fff"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect x="6" y="4" width="4" height="16"></rect>
              <rect x="14" y="4" width="4" height="16"></rect>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              onClick={() => videoHandler("play")}
              className="controlsIcons "
              height="45"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fff"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polygon points="10 8 16 12 10 16 10 8"></polygon>
            </svg>
          )}

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            onClick={fastForward}
            className="controlsIcons "
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polygon points="13 19 22 12 13 5 13 19"></polygon>
            <polygon points="2 19 11 12 2 5 2 19"></polygon>
          </svg>
        </div>
      </div>

      {/* <div className="timecontrols">
        <p className="controlsTime">
          {Math.floor(currentTime / 60) +
            ":" +
            ("0" + Math.floor(currentTime % 60)).slice(-2)}
        </p>
        <div className="time_progressbarContainer">
          <div
            style={{ width: `${progress}%` }}
            className="time_progressBar"
          ></div>
        </div>
        <p className="controlsTime">
          {Math.floor(videoTime / 60) +
            ":" +
            ("0" + Math.floor(videoTime % 60)).slice(-2)}
        </p>
      </div>  */}
    </div>
  );
}

export default App;
