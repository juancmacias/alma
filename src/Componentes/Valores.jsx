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
import doorjapanese from '../obj/sesion2/doorjapanese.glb'
import ceiling from '../obj/sesion2/ceiling.glb'
import bonsai from '../obj/sesion3/bonsai.glb'
import sakura from '../obj/sesion2/sakura.glb'
import rug from '../obj/sesion3/rug.glb'



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
          <img id="baldosa" src={require('../obj/sesion2/texture-baldosa.jpg')} alt='' /> 
          <img id="gravaverde" src={require('../obj/sesion3/grava-verde.jpg')} alt='' /> 
      
        
        </a-assets>
        {/* CAMARA */}

        <a-entity id="cameraRig">
        <a-entity camera position="0 1.608 10.005">
           <a-text id="contadorTiempo" position="1 1 -3" color="white" align="center" ></a-text>
          <a-text id="message" position="-1 2 -3" color="white" align="center" value=""></a-text>
        </a-entity>
        <a-entity oculus-touch-controls="hand: left"
                  collider-check raycaster="objects: .collidable; showLine: true"
                  thumbstick-logging></a-entity>
        <a-entity oculus-touch-controls="hand: right"
                  collider-check raycaster="objects: .collidable; showLine: true"
                  thumbstick-logging></a-entity>
      </a-entity>




        
      {/* <a-entity position="0 1.608 10.005" camera="active:false;userHeight:1.6" wasd-controls cursor-controls collision="objects: .colisionables" data-aframe-inspector-original-camera="" data-aframe-inspector="default-camera"></a-entity>
     <Entity  camera kinematic-body="radius:1"  look-controls universal-controls  position="0 2 13.15">
     <Entity cursor position="0 0 -0.5" geometry="primitive:ring;radiusInner:0.01;radiusOuter:0.016" 
        material="opacity:0.5;shader:flat;transparent:false;color:blue" scale="0.5 0.5 0.5" raycaster ></Entity> 
    </Entity>  */}
        






        {/* VARIOS */}
        <a-sky  src="#sky" material="" geometry="" scale="-1.31 1 1" rotation="180 180 180"></a-sky>
        
        <a-plane static-body="" position="0 0 0" rotation="-90 0 0" width="30" height="30" src="#grava"   radius="10" geometry=""></a-plane>
                           
        <a-entity id="muro">
        <a-box id="wall1" static-body="sphereRadius:NaN" position="-0.03 1.101 -14.94" rotation="0.115 179.565 -0.115" geometry="width:29.32;height:2.85;depth:0.1" material=""></a-box>
        <a-box id="wall2" static-body="sphereRadius:NaN" position="-14.614 0.85 -0.142" rotation="0.057295779513082325 90.1262611740785 0.6302535746439055" geometry="width:30.360000000000003;depth:0.1;height:2.99" material=""></a-box>
        <a-box id="wall3" static-body="sphereRadius:NaN" position="14.757 1.11 0.155" rotation="-1.1459155902616465 90.29814851261774 -0.9167324722093172" geometry="width:29.92;height:2.85;depth:0.1" material=""></a-box>
        <a-box id="wall4" static-body="sphereRadius:NaN" position="0.106 1.101 15.092" rotation="0.115 179.565 -0.115" geometry="width:29.32;height:2.85;depth:0.1" material=""></a-box>
        <a-box id="bamboo4" position="-14.403 1.129 0.461" gltf-model="/static/media/bamboo_cover.c9158caec02fa70d5ac3.glb" scale="0.196 0.03 -0.275" rotation="0 -89.782486497 0" geometry="height:1.33" material=""></a-box>       
        <a-box id="puerta1" position="-1.938 0.262 14.737" rotation="1.4896902673401404 0.17188733853924698 -91.15758520531398" gltf-model="/static/media/japanese_door.694adb459d22147bbb5f.glb" material=""></a-box>      
        <a-box id="bamboo2" position="8.526 1.171 14.698" gltf-model="/static/media/bamboo_cover.c9158caec02fa70d5ac3.glb" scale="0.08 0.03 -0.275" material=""></a-box>
        <a-box id="bamboo3" position="-8.23 1.156 14.639" gltf-model="/static/media/bamboo_cover.c9158caec02fa70d5ac3.glb" scale="0.082 0.03 -0.275" material=""></a-box>
        <a-box id="bamboo5" position="14.45 1.129 0.461" gltf-model="/static/media/bamboo_cover.c9158caec02fa70d5ac3.glb" scale="0.196 0.03 -0.275" rotation="0 -89.782 0" geometry="height:1.33" material=""></a-box>
        <a-box id="bamboo6" position="0.558 1.171 -14.358" gltf-model="/static/media/bamboo_cover.c9158caec02fa70d5ac3.glb" scale="0.197 0.04 -0.275" material="" geometry="width:1.89;height:1.16"></a-box>
        
        {/* <a-box id="wall3" static-body="sphereRadius:NaN" position="14.757 1.11 0.155" rotation="-1.1459155902616465 90.29814851261774 -0.9167324722093172" geometry="width:29.92;height:2.85;depth:0.1" material=""></a-box> */}
        
        </a-entity>

       
        <a-entity id="treerose" position="-12.50 0 0.637">
        <a-entity  id="bamboo1" position="2.087 -0.386 -12.616" rotation="0 45 0" gltf-model={bambo} scale="6.1 5.19 2.82"></a-entity>
        <a-entity id="bamboo2" position="-0.032 -0.386 -12.59" rotation="0 45 0" gltf-model={bambo} scale="6.1 5.19 2.82"></a-entity> 
        <a-entity id="rose" position="0.909 -0.261 -12.187" scale="0.6799999999999999 0.56 0.16000000000000003" gltf-model={treerose}> </a-entity>
        <a-entity id="roca"position="1.021 -0.766 -12.261" rotation="-17.647 62.051 5.672" gltf-model={roca} scale="0.324 0.547 0.44"></a-entity>
        <a-entity id="rocar" position="-3.081 -0.096 -13.98" rotation="0 45 0" gltf-model={rocar} scale="0.12 0.17 0.12"></a-entity>
       </a-entity>

       <a-entity id="rose" position="-5.657 -0.176 -11.171" scale="0.68 0.56 0.16" gltf-model="/static/media/tree_rose.9a136464fa8a3b9d8663.glb"> </a-entity>
       <a-entity position="-13.102 -0.065 -8.886" rotation="0 -176.185 0" gltf-model="/static/media/bamboo_bench.902965dda17d9993a7dd.glb" material=""></a-entity>
       <a-box id="tree" position="-13.572 -0.008 7.64" rotation="0 45 0" gltf-model="/static/media/treeN.b4f5f0862e2a89ce3ef2.glb" scale="0.004 0.004 0.005" material=""></a-box>


       <a-entity id="house">
       <a-entity position="1.99 0.213 -9.499" rotation="0 90.413 0" gltf-model={house} scale="0.51 0.5 0.6"></a-entity>
       <a-box position="4.427 0.025 -10.49" src="#grava" rotation="-89.21 -175.325 85.543" geometry="height:13.19;width:7.6499999999999995;depth:0.060000000000000005" material=""></a-box>
       <a-entity position="11.85 -0.192 -12.274" rotation="0 45 0" gltf-model={bambo} scale="6.1 5.19 2.82"></a-entity>
       <a-entity position="12.03 -0.192 -9.468" rotation="0 45 0" gltf-model={bambo} scale="6.1 5.19 2.82"></a-entity>
       <a-entity position="8.552 0.073 -8.774" rotation="0 -0.516 0" gltf-model={table} material=""></a-entity>
       <a-entity id="rose" position="11.827 -0.329 -11.171" scale="0.68 0.56 0.16" gltf-model={treerose}> </a-entity> 
       <a-box position="8.549 0.831 -8.847" rotation="0 45 0" gltf-model={tea} material=""></a-box>
      
       <a-box id="lamp" position="10.51 0.109 -7.015" rotation="0 84.053 0" gltf-model={lamp} material="" scale="0.01 0.01 0.01"></a-box> 
       <a-box id="lamp" position="10.789 -0.136 -13.887" rotation="0 84.05290854569178 0" gltf-model="/static/media/japanese_lamp.bb2f4272d7f2979f9969.glb" scale="0.01 0.01 0.01" material=""></a-box>
       <a-box id="lamp" position="10.738 0.047 -10.669" rotation="0 84.053 0" gltf-model="/static/media/japanese_lamp.bb2f4272d7f2979f9969.glb" scale="0.01 0.01 0.01" material=""></a-box>
       </a-entity>
      
     
    
      <a-entity id="">
      {/* fuente */}
      <a-entity static-body="sphereRadius:NaN" position="-0.112 0.024 1.427" shader="standard" scale="0.25 0.25 0.25" gltf-model={fontain}> </a-entity>
      {/* <!-- agua --> */} 
      <a-entity position="-0.103 0.174 1.573" radius="0.9" height="1.9" color="#FFC65D" geometry="radius:1.45;height:0;primitive:cylinder" material="alphaTest:0.11;color:#4f6987"></a-entity>
      </a-entity>  

      {/* diorema */}
      <a-box position="-8.257 -4.517 9.378" rotation="0 87.66254265501595 0" gltf-model={diorema} scale="0.1 0.1 0.1"></a-box>
     
   <a-entity position="-1.30 0 8.566">
    <a-box id="tree" position="11.095 -0.008 3.602"  rotation="0 45 0" gltf-model={tree}  scale="0.004 0.004 0.005"></a-box>
    <a-box position="11.162 -0.042 3.587" src="#madera" rotation="0 90.814 0" geometry="height:0.21;width:2.40;depth:2.0" material=""></a-box>       
    <a-entity id="chair" position="12.706 0.088 1.647" scale="0.018 0.018 0.018" gltf-model={chair}> </a-entity>
    <a-entity id="chair" position="8.677 -0.005 5.691" scale="0.018 0.018 0.018" gltf-model={chair} rotation="0.2291831180523293 -177.15855025445055 0.6875493541569879"> </a-entity>
   </a-entity>

   
   <a-entity position="0.980 0.408  -1.23">
   <a-box src="#baldosa" position="10.319 -0.383 7.026" rotation="-88.75116246576451 116.3677281910702 -116.3677281910702" gltf-model="1" material="" geometry="width:5.31;height:6.77;depth:0.17"></a-box>
   <a-box color="" position="10.387 0.424 10.417" rotation="-1.318 0.63 -90.012" gltf-model="1" material="" geometry="width:2.54;height:5.60;depth:0.100"></a-box>
   <a-box color="" position="10.387 0.424 3.67" rotation="-1.318 0.63 -90.012" gltf-model="1" material="" geometry="width:2.54;height:5.60;depth:0.17"></a-box>
   <a-box color="" position="13.206 0.414 7.05" rotation="-1.3178029288008934 90.47003585115698 -90.01166961505233" gltf-model="1" material="" geometry="height:7.08;width:2.54;depth:0.17"></a-box>
   <a-box position="10.524 -0.549 3.871" rotation="0 1.318 0" gltf-model="/static/media/doorjapanese.c95cce69766d9d397001.glb" material="" scale="2.5 3.09 2.5"></a-box>
   <a-box position="8.179 0.361 4.519" rotation="0 45 0" gltf-model="/static/media/bonsai.22f5d56f12eefd28d1be.glb" material=""></a-box>
   <a-box position="8.179 0.361 10.137" rotation="0 45 0" gltf-model="/static/media/bonsai.22f5d56f12eefd28d1be.glb" material=""></a-box>

  {/* <a-box position="0 0 0" rotation="0 0 0" gltf-model={gravaverderug} material="" scale="0.23 0.25 0.17"></a-box>  */}


   </a-entity>
   
   <a-box position="12.583 -1.102 -2.558" gltf-model="/static/media/sakura.be0559acd7219c5d264e.glb" material="" scale="0.23 0.25 0.17"></a-box>
    


</Scene >


        

  )
}

export default Valores