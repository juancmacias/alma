import React, { useState } from 'react';
import {Entity, Scene} from 'aframe-react';
import 'aframe';
import DiaryContent from './DiaryContent';
import './DiaryVR.css';  


const DiaryVR = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="diary-container">
    <div className="diary">
      <div className="diary-cover"></div>
      <div className="contenido-diary">
      

    <Scene>
      <a-plane
        width="4.2"
        height="6"
        position="0 0 -0.01"
        color="#000"
        opacity="0"
       
      ></a-plane>
      <button onClick={() => setIsOpen(true)}>Abrir Diario</button>
      {isOpen && (
        <a-entity position="0 0 0">
          {/*  contenido de diario  */}
          <a-image
            src="https://i.imgur.com/zUREMmE.png"
            width="4.2"
            height="5.45"
          ></a-image>
          <a-text
            value="un texto"
            width="4.0"
            align="left"
            position="-2 3.7 -2"
            color="#000"
            lineHeight="140%"
            wrap-count="40"
          ></a-text>
        </a-entity>
      )}
    </Scene>

   </div>
  </div>
 </div>
  );
};

export default DiaryVR;
