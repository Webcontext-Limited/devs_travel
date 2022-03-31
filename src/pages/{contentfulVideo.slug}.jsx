import React, { useState } from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
//import VideoPlayer from "../components/VideoPlayer"
import loadable from "@loadable/component"
const VideoPlayer = loadable(() => import("../components/VideoPlayer"))

const VideoPage = ({ data }) => {
  const { title, url, cover } = data.video
  const [vid, setVid] = useState(false)
  return (
    <>
      <div
        className={`${vid ? `hidden` : `visible`}  mx-auto  lg:max-w-lg mt-24`}
      >
        <div className={`aspect-w-16 aspect-h-9`}>
          <button onClick={() => setVid(true)}>
            <GatsbyImage image={getImage(cover)} alt={title} />
          </button>
        </div>
      </div>
      <VideoPlayer
        styles={`${!vid ? `hidden` : `visible`} mt-24`}
        link={url}
        playing={vid && true}
      />
      <p>{title}</p>
    </>
  )
}

export default VideoPage

export const videoQuery = graphql`
  query ($id: String!) {
    video: contentfulVideo(id: { eq: $id }) {
      id
      title
      url
      cover {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
  }
`
