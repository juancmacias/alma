
import {Entity, Scene} from 'aframe-react';
import React, {useState, useEffect, useRef} from 'react';
import ReactDOM from 'react-dom';
import useSound from 'use-sound';

/* precargar los objetos en 3d */
import bamboo from '../obj/plantas/bamboo.glb'
import arbol from '../obj/plantas/stylized_tree.glb'





function Frame() {
  
  const cargarCamara = (
    <Entity camera kinematic-body="radius:2"  look-controls universal-controls position="0 1.6 0">
      <Entity cursor position="0 0 -0.5" geometry="primitive:ring;radiusInner:0.01;radiusOuter:0.016" material="opacity:0.5;shader:flat;transparent:false;color:blue" scale="0.8 0.8 0.8" raycaster ></Entity>
    </Entity>
  );
    return (
      <Scene debug="false" physics="debug: false" canvas="" inspector="" keyboard-shortcuts="" screenshot="" vr-mode-ui="" auto-enter-vr="">
        {/* recursos */}
       <a-assets>
          <img id="imagen-pared" src={require('../resources/piedra_muro.jpg')} alt='' />

      </a-assets>
      <Entity id="muro_1" position="-15 0 0" rotation="0 0 0">
        {/* Arboles del perimetro */}
        <a-entity static-body id="arbol_11" gltf-model={arbol} position="0.5 0 1" rotation="0 0 0" scale="10 10 10"></a-entity>
        <a-entity static-body id="arbol_12" gltf-model={arbol} position="0.7 0 4.6" rotation="0 80 0" scale="10 10 10"></a-entity>
        <a-entity static-body id="arbol_13" gltf-model={arbol} position="0.4 -0.5 8" rotation="0 119 0" scale="11 11 11"></a-entity>
        <a-entity static-body id="arbol_14" gltf-model={arbol} position="0.66 -0.1 -6.58" rotation="0 39 0" scale="12 12 12"></a-entity>
        <a-entity static-body id="arbol_15" gltf-model={arbol} position="0.6 -0.0 10.4" rotation="0 119 0" scale="14 14 14 "></a-entity>
        <a-entity static-body id="arbol_16" gltf-model={arbol} position="0.5 -0.2 14.4" rotation="0 101 0" scale="10.7 10.7 10.7"></a-entity>
        <a-entity static-body id="arbol_17" gltf-model={arbol} position="0.7 -0.5 -2.4" rotation="0 15 0" scale="12.6 12.6 12.6"></a-entity>
        <a-entity static-body id="arbol_18" gltf-model={arbol} position="1 -0.05 -12.4" rotation="0 181 0" scale="10.2 10.2 10.2"></a-entity>
        <a-entity static-body id="arbol_19" gltf-model={arbol} position="1.2 -0.05 -14.5" rotation="0 151 0" scale="11.2 11.2 11.2"></a-entity>
        {/* bambu */}
        <a-entity id="bambu_11" gltf-model={bamboo} position="0.5 0.01 -10.4" rotation="0 181 0" scale="1.1 1 1"></a-entity>
        <a-entity id="bambu_12" gltf-model={bamboo} position="0.6 0.01 -13.5" rotation="0 151 0" scale="1 1.1 1"></a-entity>
        <a-entity id="bambu_13" gltf-model={bamboo} position="0.8 0.01 -12.3" rotation="0 181 0" scale="1 1 1.1"></a-entity>
        <a-entity id="bambu_14" gltf-model={bamboo} position="1 0.01 -13.6" rotation="0 151 0" scale="1 1.1 1.1"></a-entity>
        <a-entity id="bambu_15" gltf-model={bamboo} position="0.9 0.01 -14.4" rotation="0 181 0" scale="1.1 1 1"></a-entity>
        <a-entity id="bambu_16" gltf-model={bamboo} position="0.9 0.01 -9.5" rotation="0 151 0" scale="1 1.1 1"></a-entity>
        <a-entity id="bambu_17" gltf-model={bamboo} position="0.7 0.0 -7.3" rotation="0 181 0" scale="1 1 1.1"></a-entity>
        <a-entity id="bambu_18" gltf-model={bamboo} position="0.6 0.0 -1.6" rotation="0 151 0" scale="1 1.1 1.1"></a-entity>
        {/* muro  */}
        <a-box id="wall_11" color="grey" width="30" height="3" depth="1" position="0 0 0" material="repeat:19 5;color:withe;metalness:0.2;roughness:0.1;src:#imagen-pared" static-body rotation="0 90 0" ></a-box>
      </Entity>

      <Entity id="muro_2" position="15 0 0" rotation="0 0 0">
        {/* Arboles del perimetro */}
        <a-entity static-body id="arbol_21" type="model" gltf-model={arbol} position="-0.67 0 1" rotation="0 0 0" scale="10 10 10"></a-entity>
        <a-entity static-body id="arbol_22" type="model" gltf-model={arbol} position="-0.7 0 4.6" rotation="0 80 0" scale="10 10 10"></a-entity>
        <a-entity static-body id="arbol_23" type="model" gltf-model={arbol} position="-0.9 -0.5 8" rotation="0 119 0" scale="11 11 11"></a-entity>
        <a-entity static-body id="arbol_24" type="model" gltf-model={arbol} position="-0.66 -0.1 -6.58" rotation="0 39 0" scale="12 12 12"></a-entity>
        <a-entity static-body id="arbol_25" type="model" gltf-model={arbol} position="-0.6 -0.0 10.4" rotation="0 119 0" scale="14 14 14 "></a-entity>
        <a-entity static-body id="arbol_26" type="model" gltf-model={arbol} position="-0.5 -0.2 14.4" rotation="0 101 0" scale="10.7 10.7 10.7"></a-entity>
        <a-entity static-body id="arbol_27" type="model" gltf-model={arbol} position="-0.7 -0.5 -2.4" rotation="0 15 0" scale="12.6 12.6 12.6"></a-entity>
        <a-entity static-body id="arbol_28" type="model" gltf-model={arbol} position="-1 -0.05 -12.4" rotation="0 181 0" scale="10.2 10.2 10.2"></a-entity>
        <a-entity static-body id="arbol_29" type="model" gltf-model={arbol} position="-1.2 -0.05 -14.5" rotation="0 151 0" scale="11.2 11.2 11.2"></a-entity>
        {/* bambu */}
        <a-entity id="bambu_11" gltf-model={bamboo} position="-0.5 0.01 -10.4" rotation="0 181 0" scale="1.1 1 1"></a-entity>
        <a-entity id="bambu_12" gltf-model={bamboo} position="-0.6 0.01 -13.5" rotation="0 151 0" scale="1 1.1 1"></a-entity>
        <a-entity id="bambu_13" gltf-model={bamboo} position="-0.8 0.01 -12.3" rotation="0 181 0" scale="1 1 1.1"></a-entity>
        <a-entity id="bambu_14" gltf-model={bamboo} position="-1 0.01 -13.6" rotation="0 151 0" scale="1 1.1 1.1"></a-entity>
        <a-entity id="bambu_15" gltf-model={bamboo} position="-0.9 0.01 -14.4" rotation="0 181 0" scale="1.1 1 1"></a-entity>
        <a-entity id="bambu_16" gltf-model={bamboo} position="-0.9 0.01 -9.5" rotation="0 151 0" scale="1 1.1 1"></a-entity>
        <a-entity id="bambu_17" gltf-model={bamboo} position="-0.7 0.0 -7.3" rotation="0 181 0" scale="1 1 1.1"></a-entity>
        <a-entity id="bambu_18" gltf-model={bamboo} position="-0.6 0.0 -1.6" rotation="0 151 0" scale="1 1.1 1.1"></a-entity>
        {/* muro  */}
        <a-box id="wall_21" color="grey" width="30" height="3" depth="1" position="0 0 0" material="repeat:19 5;color:withe;metalness:0.2;roughness:0.1;src:#imagen-pared" static-body rotation="0 90 0" ></a-box>
      </Entity>
      <Entity id="muro_3" position="0 0 -15" rotation="0 90 0">
        {/* Arboles del perimetro */}
        <a-entity static-body id="arbol_21" type="model" gltf-model={arbol} position="-0.67 0 1" rotation="0 0 0" scale="10 10 10"></a-entity>
        <a-entity static-body id="arbol_22" type="model" gltf-model={arbol} position="-0.7 0 4.6" rotation="0 80 0" scale="10 10 10"></a-entity>
        <a-entity static-body id="arbol_23" type="model" gltf-model={arbol} position="-0.9 -0.5 8" rotation="0 119 0" scale="11 11 11"></a-entity>
        <a-entity static-body id="arbol_24" type="model" gltf-model={arbol} position="-0.66 -0.1 -6.58" rotation="0 39 0" scale="12 12 12"></a-entity>
        <a-entity static-body id="arbol_25" type="model" gltf-model={arbol} position="-0.6 -0.0 10.4" rotation="0 119 0" scale="14 14 14 "></a-entity>
        <a-entity static-body id="arbol_26" type="model" gltf-model={arbol} position="-0.5 -0.2 14.4" rotation="0 101 0" scale="10.7 10.7 10.7"></a-entity>
        <a-entity static-body id="arbol_27" type="model" gltf-model={arbol} position="-0.7 -0.5 -2.4" rotation="0 15 0" scale="12.6 12.6 12.6"></a-entity>
        <a-entity static-body id="arbol_28" type="model" gltf-model={arbol} position="-1 -0.05 -12.4" rotation="0 181 0" scale="10.2 10.2 10.2"></a-entity>
        <a-entity static-body id="arbol_29" type="model" gltf-model={arbol} position="-1.2 -0.05 -14.5" rotation="0 151 0" scale="11.2 11.2 11.2"></a-entity>
        {/* bambu */}
        <a-entity id="bambu_11" gltf-model={bamboo} position="-0.5 0.01 -10.4" rotation="0 181 0" scale="1.1 1 1"></a-entity>
        <a-entity id="bambu_12" gltf-model={bamboo} position="-0.6 0.01 -13.5" rotation="0 151 0" scale="1 1.1 1"></a-entity>
        <a-entity id="bambu_13" gltf-model={bamboo} position="-0.8 0.01 -12.3" rotation="0 181 0" scale="1 1 1.1"></a-entity>
        <a-entity id="bambu_14" gltf-model={bamboo} position="-1 0.01 -13.6" rotation="0 151 0" scale="1 1.1 1.1"></a-entity>
        <a-entity id="bambu_15" gltf-model={bamboo} position="-0.9 0.01 -14.4" rotation="0 181 0" scale="1.1 1 1"></a-entity>
        <a-entity id="bambu_16" gltf-model={bamboo} position="-0.9 0.01 -9.5" rotation="0 151 0" scale="1 1.1 1"></a-entity>
        <a-entity id="bambu_17" gltf-model={bamboo} position="-0.7 0.0 -7.3" rotation="0 181 0" scale="1 1 1.1"></a-entity>
        <a-entity id="bambu_18" gltf-model={bamboo} position="-0.6 0.0 -1.6" rotation="0 151 0" scale="1 1.1 1.1"></a-entity>
        {/* muro  */}
        <a-box id="wall_21" color="grey" width="30" height="3" depth="1" position="0 0 0" material="repeat:19 5;color:withe;metalness:0.2;roughness:0.1;src:#imagen-pared" static-body rotation="0 90 0" ></a-box>
      </Entity>

      {/* suelo */}
      <a-plane static-body position="0 0 0"  rotation="-90 0 0" width="30" height="30" color="#7BC8A4"></a-plane>
      {/* cielo */}
      <a-sky color="#ECECEC"></a-sky>
      {/* cámara */}
      {cargarCamara}
    </Scene>







    );
  }
  
  export default Frame;