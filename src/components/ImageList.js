import "./ImageList.css";
import React from "react";

const ImageList = props => {
  return props.images.map(({ description, id, urls }) => {
    return <img alt={description} key={id} src={urls.regular} />;
  });
};

export default ImageList;
