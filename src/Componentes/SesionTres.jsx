import {Entity, Scene} from 'aframe-react';
import React from 'react'


import box from '../obj/sesion3/box.glb'
import sofa from '../obj/sesion3/sofa.glb'
import garden from '../obj/sesion3/garden-zen.glb'
import bonsai from '../obj/sesion3/bonsai.glb'
import alfombra from '../obj/sesion3/alfombra.glb'
import table from '../obj/sesion3/table.glb'
// import table1 from '../obj/sesion3/table1.glb'
// import terminal_sofa from'../obj/sesion3/terminal_sofa.glb'






const SesionTres = () => {
 
   
  return (
       


    <Scene physics="debug: false" canvas="" inspector="" keyboard-shortcuts="" screenshot="" vr-mode-ui="" auto-enter-vr="">
    
    <a-entity position="0 1.608 10.005" camera="active:false;userHeight:1.6" wasd-controls="" look-controls="" aframe-injected="" data-aframe-inspector-original-camera="" data-aframe-inspector="default-camera"></a-entity>
        <Entity  camera kinematic-body="radius:2"  look-controls universal-controls  position="0 2 14.15">
        <Entity cursor position="0 0 -0.5" geometry="primitive:ring;radiusInner:0.01;radiusOuter:0.016" 
        material="opacity:0.5;shader:flat;transparent:false;color:blue" scale="0.8 0.8 0.8" raycaster ></Entity> 
    </Entity> 


    {/* imagenes */}
    <a-assets>


      <img id="cesped" src={require('../resources/cesped.jpg')} alt='' />
      <img id="sky" src={require('../resources/sky.jpg')} alt='' /> 
      <img id="suelo" src={require('../obj/sesion3/suelo.jpg')} alt='' />
      <img id="madera" src={require('../obj/sesion3/madera-oscura.jpg')} alt='' /> 
      <img id="grava" src={require('../obj/sesion3/grava-verde.jpg')} alt='' /> 
      
    </a-assets>

    <a-entity position="-0.414 2.087 17.867" camera="active:false;userHeight:1.6" wasd-controls="" rotation="0.34377467707849396 -0.4583662361046586 0" look-controls="" aframe-injected="" data-aframe-inspector-original-camera="" data-aframe-inspector="default-camera"></a-entity>
        {/* VARIOS */}
        <a-sky src="#sky" material="" geometry="" scale="-1.31 1 1" rotation="180 180 180"></a-sky>
        <a-plane static-body="" position="0 0 0"  src="#suelo" rotation="-90 0 0" width="30" height="30" material= "" radius="10" geometry=""></a-plane> 

      
        {/* caja */}
  <a-entity position="0 0 -9" >
        
        
       
      <a-box static-body position="14.845 1.929 4.12" rotation="0 90 0" color="#FADBD8" material="" geometry="width:20.88;height:8;depth:0.05"></a-box>
      <a-box static-body position="-14.926 2.279 3.843" rotation="0 90 0" color="#FADBD8" material="" geometry="width:20.8;height:8;depth:0.05"></a-box>
      <a-box static-bod src="#madera" position="9.176 1.131 14.406" rotation="0 180 0" color="#FADBD8" material="" geometry="width:11.37;height:2;depth:0.05"></a-box>
      <a-box static-body src="#madera" position="-9.308 1.092 14.053" rotation="0 180 0" color="#FADBD8" material="" geometry="height:2;width:11.27;depth:0.05"></a-box>
      <a-box  position="-0.252 2.136 -5.997" rotation="0 180 0" material="opacity: 0.4"  geometry="height:8;width:30;depth:0.05"></a-box>
         
 
    <a-entity position="11.13 00 5.828">
     <a-box static-body position="-6.743 1.895 3.005" src="#madera" rotation="0 180 0" transparent="true" geometry="height:3;width:4.26;depth:0.05" material=""></a-box>
     <a-box static-body position="-6.706 1.906 3.134" color="#F5EEF8" rotation="0 180 0"  geometry="width:4;height:2.5;depth:0.05" material=""></a-box>
     <a-box static-body position="-6.866 1.968 2.974" color="#F5EEF8" rotation="0 180 0"  geometry="width:4;height:2.5;depth:0.05" material=""></a-box>
    </a-entity>


    <a-entity position="11.070 -0.37 -1.36">
     <a-box static-body position="-6.743 1.895 3.005" src="#madera" rotation="0 180 0" transparent="true" geometry="height:3;width:4.30;depth:0.05" material=""></a-box>
     <a-box static-body position="-6.706 1.906 3.134" color="#F5EEF8" rotation="0 180 0"  geometry="width:4;height:2.5;depth:0.05" material=""></a-box>
     <a-box static-body position="-6.866 1.968 2.974" color="#F5EEF8" rotation="0 180 0"  geometry="width:4;height:2.5;depth:0.05" material=""></a-box>
    </a-entity>
   
    <a-entity position="3.062 -0.37 -1.36">
     <a-box static-body position="-6.743 1.895 3.005" src="#madera" rotation="0 180 0" transparent="true" geometry="height:3;width:4.26;depth:0.05" material=""></a-box>
     <a-box static-body position="-6.706 1.906 3.134" color="#F5EEF8" rotation="0 180 0"  geometry="width:4;height:2.5;depth:0.05" material=""></a-box>
     <a-box static-body position="-6.866 1.968 2.974" color="#F5EEF8" rotation="0 180 0"  geometry="width:4;height:2.5;depth:0.05" material=""></a-box>
    </a-entity>
 
    <a-entity position="3.062 -0.37 5.457">
     <a-box static-body position="-6.743 1.895 3.005" src="#madera" rotation="0 180 0" transparent="true" geometry="height:3;width:4.26;depth:0.05" material=""></a-box>
     <a-box static-body position="-6.706 1.906 3.134" color="#F5EEF8" rotation="0 180 0"  geometry="width:4;height:2.5;depth:0.05" material=""></a-box>
     <a-box static-body position="-6.866 1.968 2.974" color="#F5EEF8" rotation="0 180 0"  geometry="width:4;height:2.5;depth:0.05" material=""></a-box>
    </a-entity>
    
 
    <a-entity position="0 0 0">
    <a-plane position="0 0.027 18.789" rotation="-90 0 -0.28" width="4" height="4" src="#grava" geometry="" material="" scale="7.56 2.64 1.64"></a-plane>
    <a-entity position="6.099 0.039 15.088" gltf-model="/static/media/sofa.0d2ed7c9f4ae4ccdfef8.glb" scale="0.36 0.51 0.41" rotation="0 268.28 0"></a-entity>
     </a-entity>
 
     <a-entity position="0.494 0.665 6.03" gltf-model="/static/media/garden-zen.4879a4d3b056cabec44f.glb" scale="2.23 3.08 3.65" rotation="0 268.28 0"></a-entity>
     <a-entity position="-5.095 1.729 14.777" gltf-model="/static/media/bonsai.22f5d56f12eefd28d1be.glb" scale="2.23 3.08 3.65" rotation="0 90 0"></a-entity>
    
    
     <a-entity position="9.477 1.729 -1.303" gltf-model="/static/media/alfombra.9bef059011a7ab0a3b47.glb" scale="0.73 0.72 0.6599999999999999" rotation="0 90 0"></a-entity>
 
     {/* <a-entity position="9.477 1.729 -1.303" gltf-model={table1} scale="0.73 0.72 0.6599999999999999" rotation="0 90 0"></a-entity> */}
 
     <a-box position="-1 0.5 -3" rotation="0 45 0" gltf-model={1} color="#4CC3D9"></a-box>
     <a-box position="10.05 0.099 13.319" rotation="0.29000000000000004 91.19000000000001 4.82" gltf-model="/static/media/table.53efc18b89ec79457236.glb" color="#4CC3D9" material="" scale="16.19 16.41 22.25"></a-box>
     
     {/* <a-box position="9.881 0.5 -3" rotation="0 95 0" gltf-model="/static/media/terminal_sofa.f8a1987192a73f9c77a1.glb" color="#4CC3D9" material="" scale="0.039999999999999966 0.05000000000000002 0.04000000000000002"></a-box> */}
 
 
 
 
 
 
 
 
 
 
 
 
  </a-entity>
   


    </Scene>
  )
}

export default SesionTres