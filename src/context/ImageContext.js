import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const ImageContext = createContext();

export const ImageProvider = (prop) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/images")
      .then((res) => setImages(res.data));
  }, []);
  return (
    <ImageContext.Provider value={[images, setImages]}>
      {prop.children}
    </ImageContext.Provider>
  );
};
