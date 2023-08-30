import {Entity, Scene} from 'aframe-react';
import React from 'react'

import Fontain from '../obj/construccion/fontain_2s.glb'
import stylized from '../obj/arboles/stylized_tree.glb'
import treerose from '../obj/arboles/tree_rose.glb'
import flower from '../obj/plantas/blue-flower.glb'
import zennor from '../obj/construccion/zennor.glb'
import bamboo from '../obj/plantas/bamboo.glb'
import portal from '../obj/construccion/gate_wood.glb'
import vines from '../obj/plantas/vines.glb'
import rocar from '../obj/rocas/rocar.glb'
import roca from '../obj/rocas/roca.glb'




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
        
        
        
        <Entity  camera kinematic-body="radius:2"  look-controls universal-controls  position="0 1.6 9.7">
          <Entity cursor position="0 0 -0.5" geometry="primitive:ring;radiusInner:0.01;radiusOuter:0.016" 
              material="opacity:0.5;shader:flat;transparent:false;color:blue" scale="0.8 0.8 0.8" raycaster ></Entity> 
        </Entity>
        {/* VARIOS */}
        <a-sky src="#sky" material="" geometry="" scale="-1.31 1 1" rotation="180 180 180"></a-sky>
        <a-plane static-body="" position="0 0 0" rotation="-90 0 0" width="20" height="20" material="src: #cesped; repeat: 100 100" radius="10" geometry=""></a-plane>
        
        
        
        {/* PRIMERA ENTIDAD - MURO */}
         
         <Entity position="0 0 -9" >
          
          <a-box static-body="sphereRadius:NaN" width="20" height="2" depth="1" position="-0.369 0.3 -0.462" rotation="0 180 0" material="repeat:19 5;color:withe;metalness:0.2;roughness:0.1;src:#imagen-pared" geometry=""></a-box>
          <a-box static-body width="20" height="2" depth="1" position="10 0.3 9.001" rotation="0 90 0" material="repeat:19 5;color:withe;metalness:0.2;roughness:0.1; src:#imagen-pared" ></a-box>
          <a-box static-body width="20" height="2" depth="1" position="-10 0.3 9.001" rotation="0 90 0" material="repeat:19 5;color:withe;metalness:0.2;roughness:0.1; src:#imagen-pared" ></a-box>
          <a-box static-body width="20" height="2" depth="1" position="-5.832 0.351 18.679" rotation="0 180 0" material="repeat:19 5;color:withe;metalness:0.2;roughness:0.1;src:#imagen-pared" geometry="" scale="0.43 0.67 0.26"></a-box>
          <a-box static-body width="20" height="2" depth="1" position="5.343 0.207 18.74" rotation="0 180 0" material="repeat:19 5;color:withe;metalness:0.2;roughness:0.1;src:#imagen-pared" geometry="" scale="0.43 0.67 0.26"></a-box>
          <a-box static-body width="20" height="2" depth="1" position="0.994 0.275 18.154" rotation="0 90 0" material="repeat:19 5;color:withe;metalness:0.2;roughness:0.1;src:#imagen-pared" geometry="" scale="0.07 0.67 0.26"></a-box>
          <a-box static-body width="20" height="2" depth="1" position="-1.604 0.275 17.852" rotation="0 90 0" material="repeat:19 5;color:withe;metalness:0.2;roughness:0.1;src:#imagen-pared" geometry="" scale="0.07 0.67 0.26"></a-box>

{/* <a-entity  static-body width="30" height="3" depth="1" position="7.059 0.38 9.001" rotation="0 90 0" material="repeat:19 5;color:withe;metalness:0.2;roughness:0.1; src:#imagen-pared" ></a-entity>
<a-entity  static-body width="30" height="3" depth="1" position="-7.373 0.38 9.001" rotation="0 90 0" material="repeat:19 5;color:withe;metalness:0.2;roughness:0.1; src:#imagen-pared" ></a-entity>
<a-entity static-body  width="30" height="3" depth="1" position="0.213 0.379 16.522" rotation="0 180 0" material="repeat:19 5;color:withe;metalness:0.2;roughness:0.1; src:#imagen-pared"></a-entity>
<a-entity  static-body width="30" height="3" depth="1" position="0.213 0.379 1.87" rotation="0 180 0" material="repeat:19 5;color:withe;metalness:0.2;roughness:0.1; src:#imagen-pared"></a-entity>  */}

      {/* <a-entity position="-2.9545 -0.10728 6.9"scale="0.3 0.4 -0.14"  gltf-model= {treerose}> </a-entity>
      <a-entity position="-0.486 -0.38978 5.924"shader="standard" scale="0.33 0.44 0.19"  gltf-model={treerose}> </a-entity>
      <a-entity position="2.912 -0.082 6.14935" shader="standard" scale="0.51 0.35 -0.14" gltf-model={treerose}> </a-entity>
      <a-entity position="-3.48449 0.01283 9.25271" shader="standard" scale="0.23 0.38 0.25"  gltf-model={treerose}> </a-entity>
      <a-entity position="2.73802 -0.01518 9.188" shader="standard" scale="0.25 0.38 0.21" gltf-model={treerose}> </a-entity>

      <a-entity position="5.979 -0.037 9.188" shader="standard" scale="0.25 0.38 0.21" gltf-model="/static/media/tree_rose.9a136464fa8a3b9d8663.glb"> </a-entity>
      <a-entity position="5.156 -0.39 11.517" shader="standard" scale="0.33 0.44 0.25" gltf-model="/static/media/tree_rose.9a136464fa8a3b9d8663.glb"> </a-entity>
      <a-entity position="-6.89 0.013 19.498" shader="standard" scale="0.23 0.38 0.25" gltf-model="/static/media/tree_rose.9a136464fa8a3b9d8663.glb"> </a-entity>          */}



       <a-entity static-body position="0.191 0.024 11.729" shader="standard" scale="0.13 0.13 0.13" gltf-model="/static/media/fontain_2s.7997a527cfe06539e176.glb"> </a-entity>
        
       {/* <!-- suelo-fuente --> */}
       <a-entity static-body position="0.095 0.026 11.758" radius="0.5" height="1.5" color="#FFC65D" geometry="radius:1.54;height:0;primitive:cylinder" material="src: #grava;"></a-entity>
       {/* <!-- agua --> */}
       <a-entity position="0.119 0.17 11.776" radius="0.9" height="1.9" color="#FFC65D" geometry="radius:0.69;height:0;primitive:cylinder" material="alphaTest:0.11;color:#4f6987"></a-entity>
        
      <a-entity position="-1 0.5 14.405" rotation="0 45 0"  gltf-model= {rocar}></a-entity>
       <a-entity position="-0.37 0.393 13.529" rotation="0 45 0" gltf-model="/static/media/flower.1af5d3271728ad9dd386.glb"></a-entity>
       <a-entity position="-1.959 0.269 12.566" rotation="0 45 0" gltf-model="/static/media/flower.1af5d3271728ad9dd386.glb"></a-entity>
       <a-entity position="-1.938 0.366 12.39" rotation="0 45 0"  gltf-model="/static/media/flower.1af5d3271728ad9dd386.glb"></a-entity>
       <a-entity position="-1.065 0.269 12.566" rotation="0 45 0"   gltf-model="/static/media/flower.1af5d3271728ad9dd386.glb"></a-entity> 
       <a-entity position="-1.366 0.269 12.566" rotation="0 45 0"   gltf-model="/static/media/flower.1af5d3271728ad9dd386.glb"></a-entity>
       <a-entity position="-1.597 0.033 12.566" rotation="0 45 0"   gltf-model="/static/media/flower.1af5d3271728ad9dd386.glb"></a-entity>

       {/* piedra */}
       <a-entity position="4.483 1.362 -0.138" rotation="1.15 147.5 3.5100000000000002" color="#4CC3D9" material="alphaTest:1;color:#dcc1c1" gltf-model="/static/media/zennor.9450829016a1781102cb.glb" scale="0.9099999999999999 1.01 0.96"></a-entity>
       <a-entity position="1.021 -0.766 0.176" rotation="-17.647 62.051 5.672" gltf-model="/static/media/roca.b37671f5496622e34327.glb" scale="0.324 0.547 0.44"></a-entity>
       <a-entity position="-1.504 -0.096 -0.018" rotation="0 45 0" gltf-model="/static/media/rocar.71ca2437ebd4e5e1bebf.glb" scale="0.12 0.17 0.12"></a-entity>
        
        {/* arboles mural  */}
        <a-entity position="-9.051 -0.119 14.405" rotation="0 45 0"  m gltf-model={bamboo} scale="5.75 4.21 2.82"></a-entity>
        <a-entity position="-9.051 -0.192 15.837" rotation="0 45 0" gltf-model={bamboo} scale="6.1 5.19 2.82"></a-entity>
        <a-entity position="-9.039 -0.192 12.375" rotation="0 45 0" gltf-model={bamboo} scale="6.1 5.19 2.82"></a-entity>
        <a-entity position="-9.039 -0.192 10.375" rotation="0 45 0" gltf-model={bamboo} scale="6.1 5.19 2.82"></a-entity>
        <a-entity position="-9.039 -0.192 8.375" rotation="0 45 0"  gltf-model={bamboo} scale="6.1 5.19 2.82"></a-entity>
        <a-entity position="-9.039 -0.192 6.375" rotation="0 45 0" gltf-model={bamboo} scale="6.1 5.19 2.82"></a-entity>
        <a-entity position="-9.039 -0.192 4.375" rotation="0 45 0" gltf-model={bamboo} scale="6.1 5.19 2.82"></a-entity>
        <a-entity position="-8.997 -0.113 1.021" rotation="0 45 0" gltf-model={bamboo} scale="6.1 5.44 2.82"></a-entity>
        <a-entity position="-3.846 -0.157 1.22" rotation="0 45 0"  gltf-model={bamboo} scale="6.22 5.57 2.82"></a-entity>
        <a-entity position="-1.051 -0.157 1.220" rotation="0 45 0" gltf-model={bamboo} scale="6.22 5.57 2.82"></a-entity>
        <a-entity position="1.695 -0.158 1.176" rotation="0 45 0"  gltf-model={bamboo} scale="8.57 5.57 3.39"></a-entity>
        <a-entity position="3.93 -0.158 1.176" rotation="0 45 0"   gltf-model={bamboo} scale="8.57 5.57 3.39"></a-entity>
        <a-entity position="8.544 -0.114 1.627" rotation="0 45 0"  gltf-model={bamboo} scale="8.96 5.57 5.3"></a-entity>
        <a-entity position="8.544 -0.114 4.054" rotation="0 45 0" gltf-model={bamboo} scale="8.96 5.57 5.3"></a-entity>
        <a-entity position="8.544 -0.114 5.761" rotation="0 45 0"  gltf-model={bamboo} scale="8.96 5.57 5.3"></a-entity>
        <a-entity position="8.544 -0.219 9.917" rotation="0 45 0"  gltf-model={bamboo} scale="8.96 5.57 5.3"></a-entity>
        <a-entity position="8.609 -0.309 13.161" rotation="0 45 0" gltf-model={bamboo} scale="6.1 5.19 2.82"></a-entity>
        <a-entity position="6.469 -0.379 1.163" rotation="0 45 0"  gltf-model={bamboo} scale="6.22 5.57 2.82"></a-entity>
        <a-entity  position="8.544 -0.114 7.638" rotation="0 45 0"  gltf-model={bamboo} scale="8.96 5.57 5.3"></a-entity>
        <a-entity static-body position="8.544 -0.219 15.609" rotation="0 45 0" gltf-model={bamboo} scale="8.96 5.57 5.3"></a-entity>
        <a-entity static-body position="-6.647 -0.113 1.021" rotation="0 45 0" gltf-model={bamboo} scale="6.1 5.44 2.82"></a-entity>
        <a-entity static-body position="8.496 -0.112 17.82" rotation="0 45 0"  gltf-model={bamboo} scale="8.96 5.57 5.3"></a-entity>
        <a-entity static-body position="8.544 -0.219 11.267" rotation="0 45 0" gltf-model={bamboo} scale="8.96 5.57 5.3"></a-entity>
        <a-entity static-body position="5.719 -0.112 17.82" rotation="0 45 0"  gltf-model={bamboo} scale="8.96 5.57 5.3"></a-entity>
       
        
   
    {/* portal */}
   {/* <a-entity position="-1.186 0.008 16.666" rotation="1.27 90 -2.19" gltf-model="/static/media/gate_wood.649a512bd84ee73e11bd.glb" scale="0.59 0.41 0.4"></a-entity> */}
    <a-entity position="-1.564 0.38 16.693" rotation="0 40 0" gltf-model= {flower} scale="0.71 0.7000000000000001 0.9800000000000001"></a-entity>
    <a-entity position="0.925 0.363 16.899" rotation="0 45 0" gltf-model= {flower} scale="0.85 0.72 0.83"></a-entity>
    
    {/* <a-entity position="-1 1.956 16.711" rotation="0 45 0" gltf-model={vines}scale="0.61 0.48 0.71"></a-entity>
    <a-entity position="-1 1.955 16.59" rotation="0 45 0" gltf-model={vines}scale="0.61 0.48 0.71"></a-entity> */}
      {/* camino */}


      <a-plane position="0.121 0.044 14.658" rotation="-90 0 0" width="0.5" height="3.8" geometry="height:2.6399999999999997" material="src:#grava"></a-plane>

      <a-entity position="-1.186 0.008 16.666" rotation="1.27 90 -2.19" gltf-model="{flower}"></a-entity>


      <a-entity position="-6.469 -0.496 16.389" shader="standard" scale="0.23 0.38 0.25" gltf-model="/static/media/tree_rose.9a136464fa8a3b9d8663.glb"> </a-entity>
      <a-entity position="-2.986 -0.135 16.575" shader="standard" scale="0.31 0.39 0.24" gltf-model="/static/media/tree_rose.9a136464fa8a3b9d8663.glb"> </a-entity>
      <a-entity position="-7.527 -0.107 2.839" scale="0.3 0.48000000000000004 -0.48" gltf-model="/static/media/tree_rose.9a136464fa8a3b9d8663.glb"> </a-entity>
      <a-entity position="-7.527 -0.107 2.839" scale="0.3 0.4 -0.39" gltf-model="/static/media/tree_rose.9a136464fa8a3b9d8663.glb"> </a-entity>
      <a-entity position="-7.527 -0.261 6.751" scale="0.41 0.47000000000000003 -0.39" gltf-model="/static/media/tree_rose.9a136464fa8a3b9d8663.glb"> </a-entity>
      <a-entity position="-7.713 -0.261 10.698" scale="0.41 0.41 -0.37" gltf-model="/static/media/tree_rose.9a136464fa8a3b9d8663.glb"> </a-entity>
      
    <a-entity position="-3.992 -0.276 2.135" shader="standard" scale="0.45 0.48 0.39" gltf-model="/static/media/tree_rose.9a136464fa8a3b9d8663.glb"> </a-entity>

    <a-entity position="-3.967 -0.261 7.096" scale="0.41 0.41 -0.37" gltf-model="/static/media/tree_rose.9a136464fa8a3b9d8663.glb"> </a-entity>
     
    <a-entity position="1.886 -0.276 2.135" shader="standard" scale="0.64 0.48 0.6799999999999999" gltf-model="/static/media/tree_rose.9a136464fa8a3b9d8663.glb"> </a-entity>
</Entity>


</Scene >


        

  )
}

export default Valores