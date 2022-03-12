import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import "./gallery.css"

const useGallery = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "gallery" } }) {
        nodes {
          id
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
          name
        }
      }
    }
  `)

  return data.allFile.nodes.map(node => ({
    ...node.childImageSharp,
    id: node.id,
    name: node.name,
  }))
}

const Gallery = () => {
  const images = useGallery()
  return (
    <div className="gallery">
      {images.map(({ id, fluid, name }) => (
        <div key={id}
          className="titleoverlay"
        >
          <Link to={`/${name}`}>
          <h6 className="gallery-show-title">{name}</h6>
            <Img fluid={fluid} style={{ zIndex: -1 }} />
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Gallery
