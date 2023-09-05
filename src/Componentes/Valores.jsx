import {Entity, Scene} from 'aframe-react';
import React from 'react'

//import Fontain from '../obj/construccion/fontain_2s.glb'
//import stylized from '../obj/arboles/stylized_tree.glb'
//import treerose from '../obj/arboles/tree_rose.glb'
 import flower from '../obj/plantas/blue-flower.glb'
//import zennor from '../obj/construccion/zennor.glb'
 import bamboo from '../obj/plantas/bamboo.glb'
 import portal from '../obj/construccion/gate_wood.glb'
import vines from '../obj/plantas/vines.glb'
//import rocar from '../obj/rocas/rocar.glb'
//import roca from '../obj/rocas/roca.glb'
//import walk from '../obj/construccion/walk.glb'
//import farola from '../obj/construccion/farola.glb'
//import chair from '../obj/construccion/free_parkchair.glb'
//import  setp from '../obj/construccion/healing.glb'
//import lamp  from '../obj/construccion/lamp.glb'
//import lantern from '../obj/construccion/garden_lantern.glb'
//import stone from '../obj/construccion/stone_lantern.glb'
//import fantasy from '../obj/plantas/purple_flower.glb'




const Valores = () => {
  return (

      <Scene physics="debug: false" canvas="" inspector="" keyboard-shortcuts="" screenshot="" vr-mode-ui="" auto-enter-vr="">
        {/* imagenes */}
        <a-assets>
          <img id="imagen-pared" src={require('../resources/piedra_muro.jpg')} alt='' />
          <img id="cesped" src={require('../resources/cesped.jpg')} alt='' />
          <img id="sky" src={require('../resources/sky.jpg')} alt='' /> 
          <img id="grava" src={require('../resources/grava.jpg')} alt='' /> 
          <img id="sand" src={require('../resources/texture-sand.jpg')} alt='' /> 
        </a-assets>
        {/* CAMARA */}
        
        <a-entity position="0 1.608 10.005" camera="active:false;userHeight:1.6" wasd-controls="" look-controls="" aframe-injected="" data-aframe-inspector-original-camera="" data-aframe-inspector="default-camera"></a-entity>
        
         <Entity  camera kinematic-body="radius:2"  look-controls universal-controls  position="0 1.6 9.7">
          <Entity cursor position="0 0 -0.5" geometry="primitive:ring;radiusInner:0.01;radiusOuter:0.016" 
              material="opacity:0.5;shader:flat;transparent:false;color:blue" scale="0.8 0.8 0.8" raycaster ></Entity> 
        </Entity> 
        {/* VARIOS */}
        <a-sky src="#sky" material="" geometry="" scale="-1.31 1 1" rotation="180 180 180"></a-sky>
        <a-plane static-body="" position="0 0 0" rotation="-90 0 0" width="30" height="30
        " color="#blue"  radius="10" geometry=""></a-plane>
                
        <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>

     

      <a-box id="wall1" position="-13.006 0.731 -8.04" rotation="10.485127650894064 89.09493714284301 -0.17188733853924698" color="#4CC3D9" material="" geometry="width:12.86;height:2.01;depth:0.41000000000000003"></a-box>


     

































































        
        {/* PRIMERA ENTIDAD - MURO */}
         
          <Entity position="0 0 -9" >
          
          <a-box static-body="sphereRadius:NaN" width="20" height="2" depth="1" position="-0.369 0.3 -0.462" rotation="0 180 0" material="repeat:19 5;color:withe;metalness:0.2;roughness:0.1;src:#imagen-pared" geometry=""></a-box>
          <a-box static-body width="20" height="2" depth="1" position="10 0.3 9.001" rotation="0 90 0" material="repeat:19 5;color:withe;metalness:0.2;roughness:0.1; src:#imagen-pared" ></a-box>
          <a-box static-body width="20" height="2" depth="1" position="-10 0.3 9.001" rotation="0 90 0" material="repeat:19 5;color:withe;metalness:0.2;roughness:0.1; src:#imagen-pared" ></a-box>
          <a-box static-body width="20" height="2" depth="1" position="-5.832 0.351 18.679" rotation="0 180 0" material="repeat:19 5;color:withe;metalness:0.2;roughness:0.1;src:#imagen-pared" geometry="" scale="0.43 0.67 0.26"></a-box>
          <a-box static-body width="20" height="2" depth="1" position="5.343 0.207 18.74" rotation="0 180 0" material="repeat:19 5;color:withe;metalness:0.2;roughness:0.1;src:#imagen-pared" geometry="" scale="0.43 0.67 0.26"></a-box>
          <a-box static-body width="20" height="2" depth="1" position="0.994 0.275 18.154" rotation="0 90 0" material="repeat:19 5;color:withe;metalness:0.2;roughness:0.1;src:#imagen-pared" geometry="" scale="0.07 0.67 0.26"></a-box>
          <a-box static-body width="20" height="2" depth="1" position="-1.604 0.275 17.852" rotation="0 90 0" material="repeat:19 5;color:withe;metalness:0.2;roughness:0.1;src:#imagen-pared" geometry="" scale="0.07 0.67 0.26"></a-box>
      


      <a-entity static-body="sphereRadius:NaN" position="-0.112 0.024 10.925" shader="standard" scale="0.08 0.12000000000000001 0.08" gltf-model="/static/media/fontain_2s.7997a527cfe06539e176.glb"> </a-entity> 
       {/* <!-- suelo-fuente --> */}
       <a-entity static-body="sphereRadius:NaN" position="-0.034 0.026 10.836" radius="0.3" height="1.5" color="#FFC65D" geometry="radius:2.39;height:0;primitive:cylinder" material="src:#grava"></a-entity>      
        {/* <!-- agua --> */} 
      <a-entity position="-0.111 0.114 10.982" radius="0.9" height="1.9" color="#FFC65D" geometry="radius:0.44;height:0;primitive:cylinder" material="alphaTest:0.11;color:#4f6987"></a-entity>  
       {/* <!-- farola --> */} 
      <a-entity position="-3.033 -0.142 3.184" gltf-model="/static/media/lamp.f60234136ee2c363ba10.glb" scale="0.001 0.001 0"></a-entity>
       <a-entity position="-7.259 -0.142 4.491"  gltf-model="/static/media/lamp.f60234136ee2c363ba10.glb" scale="0.001 0.001 0"></a-entity> 
      {/* bancos */} 
       <a-entity position="-2.771 -0.005 3.418" scale="0.018 0.018 0.018" gltf-model="/static/media/free_parkchair.d69367be751f1375fa0f.glb"> </a-entity>
      <a-entity position="-7.989 -0.005 3.667" scale="0.018 0.018 0.018" gltf-model="/static/media/free_parkchair.d69367be751f1375fa0f.glb" rotation="0 90 0"> </a-entity>


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
        <a-entity position="-7.265 -0.192 17.764" rotation="0 45 0" gltf-model="/static/media/bamboo.555a25ac28b63a969b38.glb" scale="6.1 5.19 2.82"></a-entity>
        

    {/* portal */}

   <a-entity position="-1.186 0.008 16.666" rotation="1.27 90 -2.19" gltf-model="/static/media/gate_wood.649a512bd84ee73e11bd.glb" scale="0.59 0.41 0.4"></a-entity> 

   <a-entity id="portal" position="-1.186 0.008 16.666" rotation="1.27 90 -2.19" gltf-model={portal} scale="0.59 0.41 0.4"></a-entity>

    <a-entity position="-1.564 0.38 16.693" rotation="0 40 0" gltf-model= {flower} scale="0.71 0.7000000000000001 0.9800000000000001"></a-entity>
    <a-entity position="0.925 0.363 16.899" rotation="0 45 0" gltf-model= {flower} scale="0.85 0.72 0.83"></a-entity>
   
 <a-entity position="-1 1.956 16.711" rotation="0 45 0" gltf-model={vines}scale="0.61 0.48 0.71"></a-entity> 
  <a-entity position="-1 1.955 16.59" rotation="0 45 0" gltf-model={vines}scale="0.61 0.48 0.71"></a-entity>  
     
     
      {/* camino */}

    <a-plane position="-0.265 0.016 16.17" rotation="-90 0 0" width="4" height="4"  geometry="" material="src:#sand" scale="0.12 1.35 1"></a-plane> 
    <a-entity position="-0.502 -0.567 17.283" rotation="-69.385 85.142 -78.44" gltf-model="/static/media/walk.424f288336c1c07fd4a6.glb" scale="1.64 7.49 2.66"></a-entity>
    <a-entity position="-0.502 -0.567 14.762" rotation="-69.385 85.142 -78.44" gltf-model="/static/media/walk.424f288336c1c07fd4a6.glb" scale="1.64 7.49 2.66"></a-entity> 






  <a-entity position="-1.186 0.008 16.666" rotation="1.27 90 -2.19" gltf-model="{1}"></a-entity> 

     {/* arboles */}
      
    <a-entity position="-7.658 -0.261 2.829" scale="0.34 0.41 -0.41000000000000003" gltf-model="/static/media/tree_rose.9a136464fa8a3b9d8663.glb"> </a-entity>
     <a-entity position="2.358 -0.135 17.389" shader="standard" scale="0.31 0.39 0.24" gltf-model="/static/media/tree_rose.9a136464fa8a3b9d8663.glb"> </a-entity> 
     <a-entity position="7.179 -0.261 1.674" scale="0.41 0.41 -0.37" gltf-model="/static/media/tree_rose.9a136464fa8a3b9d8663.glb"> </a-entity>
     <a-entity position="-7.658 -0.261 2.829" scale="0.51 0.39999999999999997 -0.41" gltf-model="/static/media/tree_rose.9a136464fa8a3b9d8663.glb"> </a-entity>
     <a-entity position="2.024 -0.084 2.182" scale="0.42000000000000004 0.41 -0.41" gltf-model="/static/media/tree_rose.9a136464fa8a3b9d8663.glb"> </a-entity>
     <a-entity position="-8.117 -0.261 7.784" scale="0.41 0.41 -0.37" gltf-model="/static/media/tree_rose.9a136464fa8a3b9d8663.glb"> </a-entity> 
     <a-entity position="-2.862 -0.305 2.65" scale="0.34 0.41 -0.41" gltf-model="/static/media/tree_rose.9a136464fa8a3b9d8663.glb"> </a-entity> 
     <a-entity position="-5.606 -0.305 7.28" scale="0.34 0.41 -0.41" gltf-model="/static/media/tree_rose.9a136464fa8a3b9d8663.glb"> </a-entity>
     <a-entity position="-3.155 -0.135 17.389" shader="standard" scale="0.31 0.39 0.24" gltf-model="/static/media/tree_rose.9a136464fa8a3b9d8663.glb"> </a-entity>
  
     {/* set de piedras */}
    <a-entity position="6.405 -0.034 10.754" rotation="0 40 0" gltf-model="/static/media/healing.372c08410e8d142b23cc.glb" scale="2.42 2.7399999999999993 2.9299999999999997"></a-entity>
     <a-entity position="6.405 -0.034 9.287" rotation="0 40 0" gltf-model="/static/media/healing.372c08410e8d142b23cc.glb" scale="2.42 2.74 2.93"></a-entity> 
     
    {/* lamp */}
   <a-entity position="-1.435 0.033 11.311" rotation="0 40 0" gltf-model="/static/media/garden_lantern.c640e43f4203290381ad.glb" scale="0.71 0.7 0.98"></a-entity>
    <a-entity position="1.261 0.033 11.311" rotation="0 40 0" gltf-model="/static/media/garden_lantern.c640e43f4203290381ad.glb" scale="0.71 0.7 0.98"></a-entity>
  
   <a-entity position="-7.333 0.059 14.44" gltf-model="/static/media/stone_lantern.e0f7a238ccfbedee0bc4.glb" scale="0.19 0.28 0.24"></a-entity>
     
     {/* Flowers */}

     
  <a-entity position="-7.273 -0.227 11.704" rotation="0 40 0" gltf-model="/static/media/purple_flower.957c4598e99bfc653c09.glb" scale="0.015 0.015 0.015"></a-entity> 
    <a-entity position="-7.273 -0.227 12.524" rotation="0 40 0" gltf-model="/static/media/purple_flower.957c4598e99bfc653c09.glb" scale="0.015 0.015 0.015"></a-entity> 
   </Entity>
     
 

</Scene >


        

  )
}

export default Valores