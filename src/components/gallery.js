import { useStaticQuery, graphql, Link } from "gatsby"
import Img from 'gatsby-image'
import React from 'react'
import './gallery.css'

const useGallery = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: { sourceInstanceName: { eq: "gallery" } }
      ) {
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
  `);


  return data.allFile.nodes.map(node => ({
    ...node.childImageSharp,
    id: node.id,
    name: node.name
  }));
};

const Gallery = () => {
  const images = useGallery()
  return (
    <div className="gallery">
      {images.map(({ id, fluid, name }) => (
          <Link to={`/${name}`}>
          <Img key={id} fluid={fluid}  />
          </Link>
      ))}
    </div>
  )
}

export default Gallery;