// import Carousel from "react-bootstrap/Carousel";
import { graphql } from "gatsby"
import Img from 'gatsby-image'
import React from 'react'
import { Carousel, Container } from "react-bootstrap";

export default function Show(props){
  const data = props.data
  const caption = props.pageContext.caption 
  console.log(props.pageContext)
  const images =  data.allFile.nodes.map(node => ({
    ...node.childImageSharp,
    id: node.id, name: node.name
  }));
  return (
    <Container style={{marginTop:10, padding: 0 }}>
      <Carousel>
        {images.map(({ id, fluid }) => (
          <Carousel.Item key={id} style={{maxHeight:'90vh'}}>
            <Img fluid={fluid} style={{maxHeight:'90vh'}} />
          </Carousel.Item>
        ))}
      </Carousel>
      <h4 style={{color:'lightgrey', textAlign:'center', marginTop:20}}>{caption}</h4>
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
            fluid(sizes: "(max-width:2400px) calc(100vw - 40px), 1200px") {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `;



