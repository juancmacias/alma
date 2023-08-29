import {Entity, Scene} from 'aframe-react';
import React from 'react'

import Fontain from '../obj/construccion/fontain_2s.glb'
import treerose from '../obj/arboles/tree_rose.glb'



const Valores = () => {
  return (
      <Scene physics="debug: false" canvas="" inspector="" keyboard-shortcuts="" screenshot="" vr-mode-ui="" auto-enter-vr="">
        {/* imagenes */}
        <a-assets>
          <img id="imagen-pared" src={require('../resources/piedra_muro.jpg')} alt='' />
          <img id="cesped" src={require('../resources/cesped.jpg')} alt='' />
          <img id="sky" src={require('../resources/sky.jpg')} alt='' /> 
          <img id="grava" src={require('../resources/grava.jpg')} alt='' /> 
        </a-assets>
        {/* CAMARA */}
        <Entity camera kinematic-body="radius:2"  look-controls universal-controls  position="0 1.6 7">
          <Entity cursor position="0 0 -0.5" geometry="primitive:ring;radiusInner:0.01;radiusOuter:0.016" 
              material="opacity:0.5;shader:flat;transparent:false;color:blue" scale="0.8 0.8 0.8" raycaster ></Entity> 
        </Entity>
        {/* VARIOS */}
        <a-sky src="#sky" material="" geometry="" scale="-1.31 1 1" rotation="180 180 180"></a-sky>
        <a-plane static-body="" position="0 0 0" rotation="-90 0 0" width="20" height="20" material="src: #cesped; repeat: 100 100" radius="10" geometry=""></a-plane>
        {/* PRIMERA ENTIDAD */}
        <Entity position="0 0 -9" >
          
          <a-box static-body width="20" height="3" depth="1" position="10 0.3 9.001" rotation="0 90 0" material="repeat:19 5;color:withe;metalness:0.2;roughness:0.1; src:#imagen-pared" ></a-box>
          <a-box static-body width="20" height="3" depth="1" position="-10 0.3 9.001" rotation="0 90 0" material="repeat:19 5;color:withe;metalness:0.2;roughness:0.1; src:#imagen-pared" ></a-box>
          <a-box static-body width="20" height="3" depth="1" position="0.213 0.3 19" rotation="0 180 0" material="repeat:19 5;color:withe;metalness:0.2;roughness:0.1; src:#imagen-pared"></a-box>
          <a-box static-body width="20" height="3" depth="1" position="0.213 0.3 0" rotation="0 180 0" material="repeat:19 5;color:withe;metalness:0.2;roughness:0.1; src:#imagen-pared"></a-box>

          <a-entity static-body position="-2.9545 -0.10728 6.9" shader="standard" scale="1 1 1"  gltf-model= {treerose}> </a-entity>
          <a-entity static-body position="-0.486 -0.38978 5.924"shader="standard" scale="1.33 1.33 1.33"  gltf-model={treerose}> </a-entity>
          <a-entity static-body position="2.912 -0.082 6.14935" shader="standard" scale="1.44 1.44 1.44"  gltf-model={treerose}> </a-entity>
          <a-entity static-body position="-3.48449 0.01283 9.25271" shader="standard" scale="1.23 1.23 1.23"gltf-model={treerose}> </a-entity>
          <a-entity static-body position="2.73802 -0.01518 9.188" shader="standard" scale="1.1 1.1 1.1"gltf-model={treerose}> </a-entity>
          <a-entity position="0.03061 0.05444 12.67491" scale="1.45 2.79 0.08" rotation="-94.3 90 -256.04" gltf-model="img/path/way_path_blocks.glb"> </a-entity>
          <a-entity position="-0.25686 0.09246 8.07019" shader="standard" scale="0.13 0.13 0.13" gltf-model= {Fontain}> </a-entity>
          
          {/* camino */}
          <a-cylinder src="#grava" position="-0.259 0.045 7.943" radius="0.5" height="1.5" material="" geometry="radius: 1.78; height: 0" scale="0.83 -0.02 0.77"></a-cylinder>
          {/* <!-- agua --> */}
          <a-cylinder position="-0.27993 0.15612 8.13673" radius="0.5" height="1.5" color="black" material="color: #286f81" geometry="" scale="1.46 -0.02 1.41"></a-cylinder>
          {/* <!-- suelo-fuente --> */}

        </Entity>




</Scene >


        

  )
}

export default Valores