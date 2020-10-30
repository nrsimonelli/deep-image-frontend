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
      <div className='title'>
        Deep Image
      </div>
      <div className='image-block'>
        <img src="https://i.pinimg.com/originals/31/a6/f4/31a6f41d99c680ca2c5f2e30bd132844.jpg" alt="sex" width="150" height="150" />      
      </div>
      <div className='upload-block'>
        <div className='column'>
          <div>
            Upload Image
          </div>
          <div>
          <ImageUploader
            {...props}
            withIcon={true}
            onChange={onDrop}
            imgExtension={[".jpg", ".gif", ".png", ".gif"]}
            maxFileSize={5242880}
          />
          </div>
        </div>
        <div className='column'>
          <div>
            Choose Style
          </div>
          <div>
          <ImageUploader
            {...props}
            withIcon={true}
            onChange={onDrop}
            imgExtension={[".jpg", ".gif", ".png", ".gif"]}
            maxFileSize={5242880}
          />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
