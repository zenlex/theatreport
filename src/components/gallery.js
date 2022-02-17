import { useStaticQuery, graphql } from "gatsby"
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
        }
      }
    }
  `);


  return data.allFile.nodes.map(node => ({
    ...node.childImageSharp,
    id: node.id,
  }));
};

const Gallery = () => {
  const images = useGallery()
  return (
    <div className="gallery">
      {images.map(({ id, fluid }) => (
        <Img key={id} fluid={fluid} />
      ))}
    </div>
  )
}

export default Gallery;