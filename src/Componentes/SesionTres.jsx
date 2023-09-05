import {Entity, Scene} from 'aframe-react';
import React from 'react'

import sofa from '../obj/sesion3/sofa.glb'
import garden from '../obj/sesion3/garden-zen.glb'
import bonsai from '../obj/sesion3/bonsai.glb'
import book from '../obj/sesion3/Book.glb'
import poppi from '../obj/sesion3/poppi.glb'
import planta from'../obj/sesion3/plantadeco.glb'
import lamp from '../obj/sesion3/lampzen.glb'
import rug from '../obj/sesion3/rug.glb'
import luna from '../obj/sesion3/luna.glb'
import  setp from '../obj/construccion/healing.glb'
import cushion from '../obj/sesion3/cushion.glb'
import alfombra from '../obj/sesion3/alfombra2.glb'


const SesionTres = () => {
  const portalSeleccion = (ir) => {
    window.location.href=ir;
   }
   
  return (
       
    <Scene physics="debug: false" canvas="" inspector="" keyboard-shortcuts="" screenshot="" vr-mode-ui="" auto-enter-vr="">
    
    <a-entity position="0 1.608 10.005" camera="active:false;userHeight:1.6" wasd-controls cursor-controls collision="objects: .colisionables" data-aframe-inspector-original-camera="" data-aframe-inspector="default-camera"></a-entity>
     <Entity  camera kinematic-body="radius:1"  look-controls universal-controls  position="0 2 13.15">
     <Entity cursor position="0 0 -0.5" geometry="primitive:ring;radiusInner:0.01;radiusOuter:0.016" 
        material="opacity:0.5;shader:flat;transparent:false;color:blue" scale="0.5 0.5 0.5" raycaster ></Entity> 
    </Entity> 
    {/* CARTEL SALIDA */}
    <Entity
          id="salida_cartel"
          events={{
            click: () => portalSeleccion('/hubs')
          }}
          position="-1.6 1.1 14.8"
          rotation="0 -180 0"
          width="2"
          height="2"
          material="color:#14B76E;opacity: 0.5;" geometry="primitive:plane; radius:0.4; width: 2; height: 0.6;"
          text={`value:Salida;wrapCount:20;width: 4;yOffset:-4;color:#F7f7f7;shader: msdf; font:https://juancmacias.github.io/alma-thinking-with-you/public/font/marker/PermanentMarker-Regular-msdf.json;align: center`} />
        
    {/* imagenes */}
    <a-assets>

      <sound id="piano" src={require('../obj/sesion3/sound/piano.mp3')} alt=''/> 
      <img id="cesped" src={require('../resources/cesped.jpg')} alt='' />
      <img id="suelo" src={require('../obj/sesion3/suelo.jpg')} alt='' />
      <img id="madera" src={require('../obj/sesion3/madera-oscura.jpg')} alt='' /> 
      <img id="grava" src={require('../obj/sesion3/grava-verde.jpg')} alt='' /> 
      <img id="sky" src={require('../obj/sesion3/sky.jpg')} alt='' /> 
      
    </a-assets>

   <a-sound src="#piano" volumen="5" autoplay="true" position="-3 1 -4" sound=""> </a-sound> 
   
    <a-entity position="-0.41 1.600  12.72" camera="active:false;userHeight:1.6" wasd-controls="" rotation="0.34377467707849396 -0.4583662361046586 0" look-controls="" aframe-injected="" data-aframe-inspector-original-camera="" data-aframe-inspector="default-camera"></a-entity>
    {/* VARIOS */}
    <a-sky src="#sky" material="shader: flat;" geometry="" scale="-1.31 1 1" rotation="360 360 360"></a-sky>
        
     {/* luna     */}
     <a-entity id="luna"position="7.008 29.193 -52.946" rotation="0 45 0" gltf-model={luna} color="#4CC3D9" material="" geometry="depth:1.8900000000000001;height:1.07" scale="3 3 3"></a-entity>
    <a-plane id="suelos" static-body="" position="0 0 0"  src="#suelo" rotation="-90 0 0" width="30" height="30" material= "" radius="10" geometry=""></a-plane> 

   {/* caja */}
   <a-entity position="0 0 -9" >
        
     {/* paredes   */}
    <a-box id="1" tatic-body position="-0.252 2.136 -5.997" rotation="0 180 0" color="#82E0AA" geometry="height:8;width:30;depth:0.05"></a-box>
    <a-box id="2"static-body position="14.845 1.929 4.12" rotation="0 90 0" color="#82E0AA" geometry="width:20.8;height:8;depth:0.05"></a-box>
    <a-box id="3"static-body position="-14.926 2.279 3.843" rotation="0 90 0" color="#82E0AA" geometry="width:20.8;height:8;depth:0.05"></a-box>
    <a-box id="4" static-body src="#madera" position="9.072 0.682 14.568" rotation="0 180 0" geometry="width:11.77;height:1.5;depth:0.05" ></a-box>
    <a-box id="5" static-body src="#madera" position= "-9.536 0.716 14.253" rotation="0 180 0"  geometry="width:10.93;height:1.5;depth:0.05"></a-box>
    <a-box id="6" static-body src="#madera" position="0.141 0.716 24.261" rotation="0 180 0"  geometry="width:29.95;height:1.5;depth:0.05"></a-box>
    <a-box id="7" static-body src="#madera" position="-14.963 0.741 19.213" rotation="0 90 0"  geometry="width:10.299999999999999;height:1.5;depth:0.05" ></a-box>
    <a-box id="8" static-body src="#madera" position="14.917 0.723 19.072" rotation="0 90 0" geometry="width:10.43;height:1.5;depth:0.05"></a-box>
 

     {/* bloques  */}
    <a-entity id="1" position="11.13 00 5.828">
     <a-box static-body position="-6.743 1.895 3.005" src="#madera" rotation="0 180 0" geometry="height:3;width:4.26;depth:0.05" ></a-box>
     <a-box static-body position="-6.706 1.906 3.134" color="#F5EEF8" rotation="0 180 0"  geometry="width:4;height:2.5;depth:0.05" ></a-box>
     <a-box static-body position="-6.866 1.968 2.974" color="#F5EEF8" rotation="0 180 0"  geometry="width:4;height:2.5;depth:0.05"></a-box>
     </a-entity>

    <a-entity id="2" position="11.070 -0.37 -1.36">
     <a-box  static-body position="-6.743 1.895 3.005" src="#madera" rotation="0 180 0" geometry="height:3;width:4.30;depth:0.05" ></a-box>
     <a-box static-body position="-6.706 1.906 3.134" color="#F5EEF8" rotation="0 180 0" geometry="width:4;height:2.5;depth:0.05" ></a-box>
     <a-box static-body position="-6.866 1.968 2.974" color="#F5EEF8" rotation="0 180 0" geometry="width:4;height:2.5;depth:0.05" ></a-box>
    </a-entity>
   
    <a-entity id="3"  position="3.062 -0.37 -1.36">
     <a-box static-body position="-6.743 1.895 3.005" src="#madera" rotation="0 180 0" geometry="height:3;width:4.26;depth:0.05"></a-box>
     <a-box static-body position="-6.706 1.906 3.134" color="#F5EEF8" rotation="0 180 0" geometry="width:4;height:2.5;depth:0.05"></a-box>
     <a-box static-body position="-6.866 1.968 2.974" color="#F5EEF8" rotation="0 180 0" geometry="width:4;height:2.5;depth:0.05"></a-box>
    </a-entity>
 
    <a-entity id="4"  position="3.062 -0.37 5.457">
     <a-box static-body position="-6.743 1.895 3.005" src="#madera" rotation="0 180 0"  geometry="height:3;width:4.26;depth:0.05"></a-box>
     <a-box static-body position="-6.706 1.906 3.134" color="#F5EEF8" rotation="0 180 0"  geometry="width:4;height:2.5;depth:0.05"></a-box>
     <a-box static-body position="-6.866 1.968 2.974" color="#F5EEF8" rotation="0 180 0"  geometry="width:4;height:2.5;depth:0.05"></a-box>
    </a-entity>
    
      {/* obj del salón */}
     <a-entity id="setp" position="1.403 0.267 4.201" rotation="0 40 0" gltf-model={setp}></a-entity>
     <a-entity id="garden" position="0.494 0.192 6.03" gltf-model={garden}scale="2.9199999999999995 4.65 4.00" rotation="0 268.28 0"></a-entity>
     <a-entity id="bonsai1" position="-13.45 1.528 -4.35" gltf-model={bonsai} scale="2.23 3.08 3.65" rotation="0 90 0"></a-entity>
     <a-entity id="bonsai2" position="-12.917 1.528 10.62" gltf-model={bonsai} scale="2.23 3.08 3.65" rotation="0 90 0"></a-entity>
     <a-entity id="bonsai3" position="13.711 1.528 4.185" gltf-model="/static/media/bonsai.22f5d56f12eefd28d1be.glb" scale="2.23 3.08 3.65" rotation="0 180 0"></a-entity> 
      
    {/* terraza */}
     <a-entity>
     <a-plane  src="#grava" position="-0.493 0.058 18.949" rotation="-90.01166961505233 -0.17188733853924698 0" width="4" height="4" geometry="height:3.6900000000000004;width:3.93" scale="7.56 2.64 1.64" material=""></a-plane>
     <a-entity id="alfombra-terraza" position="-7.347 0.074 17.27" gltf-model={rug} rotation="0 268.28 0" scale="0.88 0.81 0.97"></a-entity>    
     <a-box src="#madera" position="5.378 0.181 16.983" rotation="-1.260507149287811 176.9293671363982 -178.76283208081685" material="" geometry="height:0.35;width:2.1199999999999997;depth:0.98"></a-box>
     
     <a-entity id="planta" position="3.797 0.551 14.914" rotation="0 45 0" gltf-model={planta} scale="1.26 1.23 1.26"></a-entity>
     <a-entity id="planta" position="8.782 0.551 14.938" rotation="0 45 0" gltf-model={planta} scale="1.26 1.23 1.26"></a-entity>
     <a-entity  position="-5.39 0.551 14.914" rotation="0 45 0" gltf-model={planta} scale="1.26 1.23 1.26"></a-entity> 
     
     <a-entity id="poppi" position="2.786 -0.169 17.282" rotation="0 80 0.66" gltf-model={poppi} scale="2.16 2.09 1.9"></a-entity>
     <a-entity id="poppi" position="6.067 -0.017 18.948" rotation="0 180 0.66" gltf-model={poppi} scale="2.16 2.09 1.9"></a-entity>
     <a-entity id="poppi"position="9.21 -0.07 17.56" rotation="0 270 0" gltf-model={poppi} scale="2.16 2.09 1.9"></a-entity>
     <a-entity id="poppi"position="6.092 -0.185 15.43" rotation="0 365 0.66" gltf-model={poppi} scale="2.16 2.09 1.9"></a-entity>
     <a-entity id="lamp" position="-12.012 0.03 15.025" rotation="0 45 0" gltf-model={lamp} material="" scale="0.004 0.004 0.004"></a-entity>
     <a-entity id="lamp" position="10.228 0.03 15.512" rotation="0 45 0" gltf-model={lamp} material="" scale="0.004 0.004 0.004"></a-entity>
     <a-entity id="book" position="5.567 0.504 17.265" rotation="14.496 2.005 0.974" gltf-model={book} color="#4CC3D9" material="" scale="0.03 -0.02 0.03"></a-entity>
     
     </a-entity>
   
    {/* alfombra-formacion interna */}
    <a-entity id="rug-redonda" position="12.106 0.124 -2.996" gltf-model={rug} rotation="0 268.28 0" scale="0.5 0.5 0.5"></a-entity> 
    

    {/* sillon,planta, cojin */}
    <a-entity id="1"  position="" >
    <a-entity id="sofa" position="-3.767 0.215 -2.229" rotation="0.115 89.439 0.115" gltf-model={sofa} scale="1.1700000000000002 1.17 1.1700000000000002"></a-entity>
    <a-entity id="cogin" position="-5.035 0.483 -2.624" rotation="85.59989459254498 -36.21093265226803 -37.47143980155584" gltf-model={cushion}scale="0.025 0.025 0.025" geometry="height:0;depth:0;width:0"></a-entity> 
    <a-entity id="planta" position="-2.128 0.532 -2.336" rotation="0 45 0" gltf-model={planta} scale="1.26 1.23 1.26"></a-entity>
    <a-entity id="alfombra" position="-3.415 0.002 -1.565" rotation="-0.4583662361046586 -179.564972994 0.6302535746439055" gltf-model={alfombra} color="#4CC3D9" material="" scale="1.29 1.2 0.98" geometry="depth:0.31;height:0"></a-entity>
    </a-entity>
  
    <a-entity id="2"  position="8.286 0 0" >
    <a-entity id="sofa" position="-3.767 0.215 -2.229" rotation="0.115 89.439 0.115" gltf-model={sofa} scale="1.1700000000000002 1.17 1.1700000000000002"></a-entity>
    <a-entity id="cogin" position="-5.035 0.483 -2.624" rotation="85.59989459254498 -36.21093265226803 -37.47143980155584" gltf-model={cushion} scale="0.025 0.025 0.025" geometry="height:0;depth:0;width:0"></a-entity>
    <a-entity id="planta" position="-2.128 0.532 -2.336" rotation="0 45 0" gltf-model={planta}  scale="1.26 1.23 1.26"></a-entity>
    <a-entity id="alfombra" position="-3.415 0.002 -1.565" rotation="-0.4583662361046586 -179.564972994 0.6302535746439055" gltf-model={alfombra} scale="1.29 1.2 0.98" geometry="depth:0.31;height:0"></a-entity>
    </a-entity>
  
    <a-entity id="3" position="7.947 0 13.02" >
    <a-entity id="sofa" position="-3.767 0.215 -2.229" rotation="0.115 89.439 0.115" gltf-model={sofa} scale="1.1700000000000002 1.17 1.1700000000000002"></a-entity>
    <a-entity id="cogin" position="-5.035 0.483 -2.624" rotation="85.59989459254498 -36.21093265226803 -37.47143980155584" gltf-model={cushion} scale="0.025 0.025 0.025" geometry="height:0;depth:0;width:0"></a-entity>
    <a-entity id="planta" position="-2.128 0.532 -2.336" rotation="0 45 0" gltf-model={planta}  scale="1.26 1.23 1.26"></a-entity>
    <a-entity id="alfombra" position="-3.415 0.002 -1.565" rotation="-0.4583662361046586 -179.564972994 0.6302535746439055" gltf-model={alfombra} scale="1.29 1.2 0.98" geometry="depth:0.31;height:0"></a-entity>
    </a-entity>
    

    <a-entity id="4" position="-0.46 0 13.02" >
    <a-entity id="sofa" position="-3.767 0.215 -2.229" rotation="0.115 89.439 0.115" gltf-model={sofa} scale="1.1700000000000002 1.17 1.1700000000000002"></a-entity>
    <a-entity id="cogin"position="-5.035 0.483 -2.624" rotation="85.59989459254498 -36.21093265226803 -37.47143980155584" gltf-model={cushion} scale="0.025 0.025 0.025" geometry="height:0;depth:0;width:0"></a-entity>
    <a-entity id="planta" position="-2.128 0.532 -2.336" rotation="0 45 0" gltf-model={planta} color="#4CC3D9"  scale="1.26 1.23 1.26"></a-entity>
    <a-entity id="alfombra"position="-3.415 0.002 -1.565" rotation="-0.4583662361046586 -179.564972994 0.6302535746439055" gltf-model={alfombra} scale="1.29 1.2 0.98" geometry="depth:0.31;height:0"></a-entity>
    </a-entity>
     
     {/* rodapie */}
    <a-box id="1" src="#madera" position="14.702 -0.177 4.265" rotation="3.094 90.184 0.172"  geometry="width:20.67;height:1.09;depth:0.08"></a-box>
    <a-box id="2" src="#madera" position="-14.85 0.092 3.834" rotation="-4.24 89.897 -0.229" geometry="width:20.8;height:1.09;depth:0.08" material=""></a-box>
    <a-box id="3" src="#madera" position="-0.06 -0.035 -5.888" rotation="5.042028597151244 -179.96604345059157 0.40107045659157625" geometry="width:30;height:1.09;depth:0.08" material=""></a-box>
      
    </a-entity>

  
  

    </Scene>
  )
}

export default SesionTres