// import Carousel from "react-bootstrap/Carousel";
import { graphql } from "gatsby"
import Img from 'gatsby-image'
import React from 'react'
import { Container } from "react-bootstrap";

export default function Show({data}){
  
  const images =  data.allFile.nodes.map(node => ({
    ...node.childImageSharp,
    id: node.id, name: node.name
  }));
  return (
    <Container>
      {images.map(({ id, fluid }) => (
          <Img key={id} fluid={fluid}  />
      ))}
    </Container>
  )
}

  export const query = graphql`
    query($title: String) {
      allFile(
        filter: { sourceInstanceName: { eq: "shows" }, relativeDirectory: { eq: $title } }
      ) {
        nodes {
          id
          name
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `;



