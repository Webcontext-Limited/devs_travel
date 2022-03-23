import React from "react"
import { graphql } from "gatsby"
import { INLINES, BLOCKS, MARKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"

const PracticePage = data => {
  //const post = data.blogpost.edges[0].node.body
  const post = data.title.nodes[0].title
  console.log(post)

  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: node => {
        console.log(node)
        return <img src={node.data.target.fixed.src} alt="cheese/" />
      },
    },
  }
  //const output = renderRichText(post, options)
  const output = renderRichText(post)
  console.log(output)

  return <div>{output}</div>
}

export const ritchTextPosts = graphql`
  {
    title: allContentfulBlogPost {
      nodes {
        title
      }
    }
  }
`
export default PracticePage

// blogpost: allContentfulBlogPost {
//   edges {
//     node {
//       title
//       body {
//         raw
//         references {
//           ... on ContentfulAsset {
//             __typename
//             title
//             gatsbyImageData(placeholder: BLURRED)
//           }
//         }
//       }
//     }
//   }
// }
