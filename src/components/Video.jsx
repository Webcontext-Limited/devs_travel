import React from "react"
import ReactPlayer from "react-player/youtube"

const Video = ({
  link = "",
  width = "100%",
  height = "100%",
  controls = true,
  light = true,
  playIcon,
  playing,
}) => (
  <div className="player-wrapper aspect-w-16 aspect-h-9">
    <ReactPlayer
      config={{
        youtube: { playerVars: { cc_load_policy: 1, cc_lang_pref: "en" } },
      }}
      className="react-player  "
      width={width}
      height={height}
      controls={controls}
      muted={true}
      url={link}
      playing={playing}
    />
  </div>
)
export default Video
