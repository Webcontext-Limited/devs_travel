import React from "react"
import { MARKS, BLOCKS, INLINES } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const renderBasicRichTxt = ({ richText, h1, h2, h5, p, a }) => {
  const Text = ({ children }) => <p className={p}>{children}</p>
  const Bold = ({ children }) => (
    <strong className="font-bold">{children}</strong>
  )
  const Italic = ({ children }) => <em className="italic"> {children}</em>
  const H1 = ({ children }) => <h1 className={`${h1}`}> {children}</h1>
  const H2 = ({ children }) => <h2 className={`${h2}`}> {children}</h2>
  const H5 = ({ children }) => <h5 className={`${h5}`}> {children}</h5>
  const options = {
    renderMark: {
      [MARKS.BOLD]: text => <Bold>{text}</Bold>,
      [MARKS.ITALIC]: text => <Italic>{text}</Italic>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
      [BLOCKS.HEADING_1]: (node, children) => <H1>{children}</H1>,
      [BLOCKS.HEADING_2]: (node, children) => <H2>{children}</H2>,
      [BLOCKS.HEADING_5]: (node, children) => <H5>{children}</H5>,

      [BLOCKS.EMBEDDED_ASSET]: node => {
        console.log("dfhbbfd", node.data.target)
        const { gatsbyImageData, title } = node.data.target
        return <GatsbyImage image={getImage(gatsbyImageData)} alt={title} />
      },

      [INLINES.HYPERLINK]: node => {
        return (
          <a
            href={node.data.uri}
            target={`${node.data.uri.startsWith("/") ? "_self" : "_blank"}`}
            rel="noopener noreferrer"
            className={`${a} text-sky-600 hover:text-sky-500 hover:underline`}
          >
            {node.content[0].value}
          </a>
        )
      },
    },
  }

  return renderRichText(richText, options)
}

export { renderBasicRichTxt }
