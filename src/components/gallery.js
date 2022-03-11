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
  const imgStyle = {
    backgroundColor: 'black'
  }
  const images = useGallery()
  return (
    <div className="gallery" style={imgStyle}>
      {images.map(({ id, fluid }) => (
        <Link to='/id'>
        <Img key={id} fluid={fluid}  />
        </Link>
      ))}
    </div>
  )
}

export default Gallery;