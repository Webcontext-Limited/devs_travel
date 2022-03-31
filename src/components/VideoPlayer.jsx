import React from "react"
import Video from "./Video"
//import { GatsbyImage, getImage } from "gatsby-plugin-image"

const VideoPlayer = ({ link, videoImg, styles, playing }) => {
  return (
    <div
      className={`${styles} 
        mx-auto  lg:max-w-lg  `}
    >
      <Video playIcon={<PlayerButton />} link={link} playing={playing} />
    </div>
  )
}

export default VideoPlayer

const PlayerButton = () => {
  return (
    <div
      className="absolute inset-0 w-full h-full flex items-center justify-center"
      aria-hidden="true"
    >
      <div className="font-bold h-16 w-16 md:h-20 md:w-20 text-red-500 rounded-full bg-sky-100 flex items-center justify-center font-mono opacity-80">
        <svg
          className="h-20 w-20 text-red-700 test333"
          fill="currentColor"
          viewBox="0 0 84 84"
        >
          <path d="M55.5039 40.3359L37.1094 28.0729C35.7803 27.1869 34 28.1396 34 29.737V54.263C34 55.8604 35.7803 56.8131 37.1094 55.9271L55.5038 43.6641C56.6913 42.8725 56.6913 41.1275 55.5039 40.3359Z" />
        </svg>
      </div>
    </div>
  )
}
// The video play button needs to be smaller on smaller screens
