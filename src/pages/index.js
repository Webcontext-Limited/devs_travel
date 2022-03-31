import React, { useState } from "react"
import { graphql } from "gatsby"
//import { renderBasicRichTxt } from "../utils/renderBasicRichTxt"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
//import VideoPlayer from "../components/VideoPlayer"
import loadable from "@loadable/component"
import pMinDelay from "p-min-delay"
//const VideoPlayer = loadable(() => import("../components/VideoPlayer"))
const VideoPlayer = loadable(() =>
  pMinDelay(import("../components/VideoPlayer"), 10000)
)

const Home = ({ data }) => {
  //const contData = data.title.nodes
  const { title, url, cover } = data.video
  console.log(data.video)
  const [vid, setVid] = useState(false)

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div
          className={`${
            vid ? `hidden` : `visible`
          }  mx-auto  lg:max-w-lg mt-24`}
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

        {/* <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
            Blog
          </h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            devs.travel
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            displaying content soon.
            {contData.map(item => {
              return (
                <>
                  <p>{item.title}</p>
                  <p key={item.key}>
                    {renderBasicRichTxt({ richText: item.body })}
                  </p>
                </>
              )
            })}
          </p>
        </div> */}
      </div>
    </div>
  )
}
export default Home

// export const data = graphql`
//   query pageQuery($id: String) {
//     contentfulPage(id: { eq: $id }) {
//       title
//     }
//   }
// `
// export const ritchTextPosts = graphql`
//   {
//     title: allContentfulBlogPost {
//       nodes {
//         id
//         title
//         body {
//           raw
//           references {
//             ... on ContentfulAsset {
//               contentful_id
//               __typename
//               title
//               gatsbyImageData(placeholder: BLURRED)
//             }
//           }
//         }
//       }
//     }
//   }
// `
export const query = graphql`
  {
    video: contentfulVideo {
      id
      title
      url
      cover {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
  }
`
