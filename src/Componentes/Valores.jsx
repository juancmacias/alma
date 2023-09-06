import {Entity, Scene} from 'aframe-react';
import React from 'react'



import door from '../obj/sesion2/japanese_door.glb'
import house from '../obj/sesion2/house-te.glb'
import bambo from '../obj/plantas/bamboo.glb'
import bamboo from '../obj/sesion2/bamboo_cover.glb'
import treerose from '../obj/arboles/tree_rose.glb'
import rocar from '../obj/rocas/rocar.glb'
import roca from '../obj/rocas/roca.glb'
import banco from '../obj/sesion2/bamboo_bench.glb'
import table from '../obj/sesion2/chair_table.glb'
import tea from '../obj/sesion2/teaset.glb'
import diorema from '../obj/sesion2/diorema.glb'
import tree from '../obj/sesion2/treeN.glb'
import fontain from '../obj/construccion/fontain_2s.glb'
import chair from '../obj/construccion/parkchair.glb'
import lamp from '../obj/sesion2/japanese_lamp.glb'





const Valores = () => {
  return (

      <Scene physics="debug: false" canvas="" inspector="" keyboard-shortcuts="" screenshot="" vr-mode-ui="" auto-enter-vr="">
        {/* imagenes */}
        <a-assets>
          <img id="imagen-pared" src={require('../resources/piedra_muro.jpg')} alt='' />
          <img id="cesped" src={require('../resources/cesped.jpg')} alt='' />
          <img id="sky" src={require('../resources/sky.jpg')} alt='' /> 
          <img id="grava" src={require('../obj/sesion2/grava.jpg')} alt='' /> 
          <img id="madera" src={require('../obj/sesion3/madera-oscura.jpg')} alt='' /> 
      
        
        </a-assets>
        {/* CAMARA */}
        
        <a-entity position="0 1.608 10.005" camera="active:false;userHeight:1.6" wasd-controls="" look-controls="" aframe-injected="" data-aframe-inspector-original-camera="" data-aframe-inspector="default-camera"></a-entity>
        
        <Entity  camera kinematic-body="radius:2"  look-controls universal-controls  position="0 1.6 9.7">
        <Entity cursor position="0 0 -0.5" geometry="primitive:ring;radiusInner:0.01;radiusOuter:0.016" 
        material="opacity:0.5;shader:flat;transparent:false;color:blue" scale="0.8 0.8 0.8" raycaster ></Entity> 
        </Entity> 
        {/* VARIOS */}
        <a-sky src="#sky" material="" geometry="" scale="-1.31 1 1" rotation="180 180 180"></a-sky>
        
        <a-plane static-body="" position="0 0 0" rotation="-90 0 0" width="30" height="30"color="#7F8C8D"   radius="10" geometry=""></a-plane>
                           
        <a-entity id="muro">
        <a-box id="wall1" static-body position="0.141 0.99 -13.321" rotation="0.115 179.565 -0.115" geometry="height:2.85;depth:0.1;width:27"></a-box>       
        <a-box id="wall2" static-body position="-13.275 0.85 0.536" rotation="-1.432 90.814 0.229" geometry="depth:0.1;width:28;height:2.99"></a-box>        
        <a-box id="wall3" static-body position="13.623 0.976 0.755" rotation="-2.12 89.611 -0.172" geometry="height:2.85;depth:0.1;width:28"></a-box>       
        <a-box id="puerta1" position="-1.643 0.262 14.208" rotation="1.4896902673401404 0.17188733853924698 -91.15758520531398" gltf-model={door} material=""></a-box>
        <a-box id="wall4" static-body position="0.009 0.934 14.572" rotation="-3.094 179.565 -1.089" geometry="depth:0.1;width:27.17;height:2.99"></a-box>       
        <a-box id="bamboo1" static-body position="0.223 -0.15 -13.116" gltf-model={bamboo}scale="0.18 0.055 -0.16" ></a-box>
        <a-box id="bamboo2" position="8.329 1.206 14.302" gltf-model={bamboo} scale="0.075 0.03 -0.275" ></a-box>
        <a-box id="bamboo3"position="-7.571 1.206 14.302" gltf-model={bamboo} scale="0.075 0.03 -0.275" ></a-box>
        <a-box id="bamboo4" position="-12.868 1.206 0.509" gltf-model={bamboo} scale="0.185 0.03 -0.275" rotation="0 -89.782486497 0" geometry="height:1.33" material=""></a-box>       
        <a-box id="bamboo5" position="13.374 1.206 0.615" gltf-model={bamboo} scale="0.185 0.03 -0.275" rotation="0 -89.782 0" geometry="height:1.33" material=""></a-box>
        </a-entity>

       
        <a-entity id="treerose" position="-8.26 0 2.75">
        <a-entity  id="bamboo1" position="2.087 -0.386 -12.616" rotation="0 45 0" gltf-model={bambo} scale="6.1 5.19 2.82"></a-entity>
        <a-entity id="bamboo2" position="-0.032 -0.386 -12.59" rotation="0 45 0" gltf-model={bambo} scale="6.1 5.19 2.82"></a-entity> 
        <a-entity id="rose" position="0.909 -0.261 -12.187" scale="0.6799999999999999 0.56 0.16000000000000003" gltf-model={treerose}> </a-entity>
        <a-entity id="roca"position="1.021 -0.766 -12.261" rotation="-17.647 62.051 5.672" gltf-model={roca} scale="0.324 0.547 0.44"></a-entity>
        <a-entity id="rocar" position="-3.081 -0.096 -13.98" rotation="0 45 0" gltf-model={rocar} scale="0.12 0.17 0.12"></a-entity>
        </a-entity>

        <a-entity position="-10.482 -0.065 -7.818" rotation="0 -176.185 0" gltf-model="/static/media/bamboo_bench.902965dda17d9993a7dd.glb" material=""></a-entity>

       <a-entity id="house">
       <a-entity position="1.99 0.213 -9.499" rotation="0 90.413 0" gltf-model={house} scale="0.51 0.5 0.6"></a-entity>
       <a-box position="4.427 0.025 -10.49" src="#grava" rotation="-89.21 -175.325 85.543" geometry="height:13.19;width:7.6499999999999995;depth:0.060000000000000005" material=""></a-box>
       <a-entity position="11.85 -0.192 -12.274" rotation="0 45 0" gltf-model={bambo} scale="6.1 5.19 2.82"></a-entity>
       <a-entity position="12.03 -0.192 -9.468" rotation="0 45 0" gltf-model={bambo} scale="6.1 5.19 2.82"></a-entity>
       <a-entity position="8.552 0.073 -8.774" rotation="0 -0.516 0" gltf-model={table} material=""></a-entity>
       <a-entity id="rose" position="11.827 -0.329 -11.171" scale="0.68 0.56 0.16" gltf-model={treerose}> </a-entity> 
       <a-box position="8.549 0.831 -8.847" rotation="0 45 0" gltf-model={tea} material=""></a-box>
      
       </a-entity>
      
     
    
      <a-entity id="">
      {/* fuente */}
      <a-entity static-body="sphereRadius:NaN" position="-0.112 0.024 1.427" shader="standard" scale="0.25 0.25 0.25" gltf-model={fontain}> </a-entity>
      {/* <!-- agua --> */} 
      <a-entity position="-0.103 0.174 1.573" radius="0.9" height="1.9" color="#FFC65D" geometry="radius:1.45;height:0;primitive:cylinder" material="alphaTest:0.11;color:#4f6987"></a-entity>
      </a-entity>  

      {/* diorema */}
      <a-box position="-8.257 -4.517 9.378" rotation="0 87.66254265501595 0" gltf-model={diorema} scale="0.1 0.1 0.1"></a-box>
     
  
    <a-box id="tree" position="11.095 -0.008 3.602"  rotation="0 45 0" gltf-model={tree}  scale="0.004 0.004 0.005"></a-box>
    <a-box position="11.162 -0.042 3.587" src="#madera" rotation="0 90.814 0" geometry="height:0.21;width:2.40;depth:2.0" material=""></a-box>       
    
  
      {/* bancos */} 
      <a-entity id="chair" position="12.706 0.088 1.647" scale="0.018 0.018 0.018" gltf-model={chair}> </a-entity>
      <a-entity id="chair" position="8.677 -0.005 5.691" scale="0.018 0.018 0.018" gltf-model={chair} rotation="0.2291831180523293 -177.15855025445055 0.6875493541569879"> </a-entity>

{/*   
   <a-box position="6.095 0.5 8.221" rotation="0 45 0" gltf-model={1} material=""></a-box> */}

   <a-box id="lamp" position="10.096 0.5 -11.286" rotation="0 84.05290854569178 0" gltf-model={lamp}scale="0.01 0.01 0.01"></a-box>  
   <a-box id="lamp" position="10.51 0.109 -7.015" rotation="0 84.053 0" gltf-model={lamp} material="" scale="0.01 0.01 0.01"></a-box>
   <a-box id="lamp" position="12.009 0.065 1.978" rotation="0 84.053 0" gltf-model={lamp}material="" scale="0.01 0.01 0.01"></a-box>     
   

</Scene >


        

  )
}

export default Valores