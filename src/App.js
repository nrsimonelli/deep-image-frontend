import './App.css';
import React, { useState } from "react";
import ImageUploader from "react-images-upload";

const App = props => {
  const [pictures, setPictures] = useState([]);

  const onDrop = picture => {
    setPictures([...pictures, picture]);
  };
  return (
    <div className='App'>
    <div>
      Deep Image
    </div>
    <div className='upload-block'>
      <div>Upload Image</div>
      <div>Choose Style</div>
    </div>
    <ImageUploader
      {...props}
      withIcon={true}
      onChange={onDrop}
      imgExtension={[".jpg", ".gif", ".png", ".gif"]}
      maxFileSize={5242880}
    />
    </div>
  );
};

export default App;
