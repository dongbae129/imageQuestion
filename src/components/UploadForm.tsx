import axios from "axios";
import React, { useContext, useState } from "react";
import { ImageContext } from "../context/ImageContext";
import ImageList from "./ImageList";
import ProgressBar from "./ProgressBar";

export type imageType = {
  createdAt: string;
  id: number;
  key: string;
  originalFileName: string;
  updatedAt: string;
};

const UploadForm = (): JSX.Element => {
  const [files, setFile] = useState<FormData>();
  const [imgsrc, setImgSrc] = useState<any>(null);
  const [percent, setPercent] = useState(0);
  const [images, setImages] = useContext(ImageContext);
  //   const [images, setImages] = useState<imageType[]>([]);

  // let fileRef = useRef<FormData>(null)
  const onChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const imgData = new FormData();
    [].forEach.call(e.target.files, (f) => {
      imgData.append("image", f);
    });
    setFile(imgData);
    const fileReader = new FileReader();
    fileReader.readAsDataURL(e.target.files![0]);
    fileReader.onload = (e) => setImgSrc(e.target!.result);
    // fileRef.current = imgData
    console.log(e.target.files);
  };
  const onClickButton = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // const formData = new FormData();
    try {
      await axios
        .post("http://localhost:5000/api/images/upload", files, {
          headers: { "Content-Type": "multipart/form-data" },
          onUploadProgress: (e: ProgressEvent) => {
            setPercent(Math.round((100 * e.loaded) / e.total));
          },
        })
        .then((res) => {
          setImages((prev: imageType[]) => prev.concat(res.data));
          setImgSrc(null);
        });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <ImageList />
      <form style={{ width: "100%", height: "100%" }}>
        {/* <ProgressBar percent={percent}/> */}
        <img src={imgsrc} alt="" style={{ width: "75%" }} />

        <label htmlFor="image">사진</label>
        <input onChange={onChangeImage} type="file" id="image" />
        <button onClick={onClickButton} type="submit">
          제출
        </button>
      </form>
    </div>
  );
};

export default UploadForm;
