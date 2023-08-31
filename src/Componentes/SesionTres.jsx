import {Entity, Scene} from 'aframe-react';
import React from 'react'






const SesionTres = () => {
 
    const cargarCamara = (
        <Entity camera kinematic-body="radius:1"  look-controls universal-controls position="0 1.6 20" rotation="22 0 0">
          <Entity cursor position="0 0 -0.5" geometry="primitive:ring;radiusInner:0.01;radiusOuter:0.016" material="opacity:0.5;shader:flat;transparent:false;color:blue" scale="0.5 0.5 0.5" raycaster ></Entity>
        </Entity>
         );

  return (
    <Scene physics="debug: false" canvas="" inspector="" keyboard-shortcuts="" screenshot="" vr-mode-ui="" auto-enter-vr="">
    {/* imagenes */}
    <a-assets>
      {/* }<img id="arena" src={require('../resources/fondoarena.jpg')} alt='' /> */}
      <img id="cesped" src={require('../resources/cesped.jpg')} alt='' />
      <img id="sky" src={require('../resources/sky.jpg')} alt='' /> 
      
    </a-assets>

    


        {/* VARIOS */}
        <a-sky src="#sky" material="" geometry="" scale="-1.31 1 1" rotation="180 180 180"></a-sky>
        <a-plane static-body="" position="0 0 0" color="#A1887FE" rotation="-90 0 0" width="15" height="15" material= "" radius="10" geometry=""></a-plane> 

        <a-entity  position="-0.112 0.406 -0.445" shader="standard" scale="0.39 0.12999999999999998 0.33" gltf-model={1}> </a-entity> 
        

       






    </Scene>
  )
}

export default SesionTres