import React from "react"
import { graphql } from "gatsby"
import { renderBasicRichTxt } from "../utils/renderBasicRichTxt"

const BlogPage = ({ data }) => {
  const contData = data.title
  console.log(contData)
  return (
    <>
      <div className="relative py-16 bg-white overflow-hidden">
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
            <h2 className="text-center font-semibold text-indigo-600 tracking-wide uppercase">
              {contData.title}
            </h2>

            {renderBasicRichTxt({ richText: contData.body })}
          </div>
        </div>
      </div>
      {contData.title}
      <p>{renderBasicRichTxt({ richText: contData.body })}</p>
    </>
  )
}

export default BlogPage

export const ritchTextPosts = graphql`
  query ($id: String!) {
    title: contentfulBlogPost(id: { eq: $id }) {
      id
      title
      body {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            __typename
            title
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    }
  }
`
