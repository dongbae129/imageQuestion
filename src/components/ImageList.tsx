import React, { useContext } from "react";

import { imageType } from "./UploadForm";
import { ImageContext } from "../context/ImageContext";

function ImageList(): JSX.Element {
  const [images] = useContext(ImageContext);
  console.log(images, "@@");
  return (
    <div style={{ width: "100%" }}>
      {images.length > 0 &&
        (images as imageType[]).map((v) => (
          <img
            style={{ width: "50%", height: "300px" }}
            key={v.key}
            src={`http://localhost:5000/${v.originalFileName}`}
            alt=""
          />
        ))}
    </div>
  );
}
export default ImageList;
