import React from "react";
import SimpleReactLightbox from "simple-react-lightbox";
import './src/global.css'
export const wrapRootElement = ({ element }) => (
  <SimpleReactLightbox>{element}</SimpleReactLightbox>
)
