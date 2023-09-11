
import {Entity, Scene} from 'aframe-react';
import React, {useState} from 'react'
import { urlFont, urlApi, urlVid } from './../services/urls';

/* precargar los objetos en 3d */
import sofa from '../obj/construccion/sesioncinco/sofa.glb'
import alfombraama from '../obj/construccion/sesioncinco/alfombraama.glb'
import bonsai from '../obj/construccion/sesioncinco/bonsai.glb'
import puff from '../obj/construccion/sesioncinco/puff.glb'
import cerezojapones from '../obj/construccion/sesioncinco/cerezojapones.glb'
import mesa_centro from '../obj/construccion/sesioncinco/mesa_centro.glb'
import casajaponesa from '../obj/construccion/sesioncinco/casajaponesa.glb'
import cuadro from '../obj/construccion/sesioncinco/cuadro.glb'
import sofanegro from '../obj/construccion/sesioncinco/sofanegro.glb'
import bonsai_tree from '../obj/construccion/sesioncinco/bonsai_tree.glb'
import lampara from '../obj/construccion/sesioncinco/lampara.glb' 
import mesacafe from '../obj/construccion/sesioncinco/mesacafe.glb'
import puerta from '../obj/construccion/sesioncinco/puerta.glb'
import esfera from '../obj/construccion/sesioncinco/esfera.glb'
import sol from '../obj/construccion/sesioncinco/sol.glb'
import yingyang from '../obj/construccion/sesioncinco/yingyang.glb'
import manifiesto from '../resources/manifiesto.mp4'
import thinkito from '../obj/construccion/sesioncinco/thinkito.glb'



function SesionCinco() {
  const [sonido] = useState(localStorage.getItem('sonido'));
  const portalSeleccion = (ir) => {
    window.location.href=ir;
   }
    return (
        <Scene  preloader="title: Cargando objetos...;slowLoad:true;" physics="debug:false" canvas="" inspector="" keyboard-shortcuts="" screenshot="" vr-mode-ui="" auto-enter-vr="">
        {/* recursos */}
        <a-assets>
            <img id="imagen-pared" src={require('../resources/piedra_muro.jpg')} alt='' />
            <img id="suelosesioncinco" src={require('../resources/suelosesioncinco.jpg')} alt='' />
            <img id="sky" src={require('../resources/amanecer.jpg')} alt='' />
            <img id="texturamuro" src={require('../resources/texturamurodibu.png')} alt='' />
            <img id="entrada" src={require('../resources/entrada.jpg')} alt='' />
            <video preload="auto" id="manifiesto" src={`${urlVid}/public/manifiesto.mp4`}></video>
    
        </a-assets>
        
        {/* objetos de la escena */}
        <Entity position="0 0 -9" >
        <Entity id="videouno" material="shader: flat; src: #manifiesto"
        geometry="primitive: plane; width: 2.25; height: 5.25"
        position="6.4 2.6 9.6"
        rotation="0 0 0"
        scale= "2.4 0.5 1"
        play-on-click
        visible="true"></Entity>       
        
        <Entity
          id="salida_cartel"
          events={{
            click: () => portalSeleccion('/hubs')
          }}
          position="-0.80 1.7 14.1"
          rotation="0 -180 0"
          width="2"
          height="2"
          material="color:#14B76E;opacity: 0.5;" geometry="primitive:plane; radius:0.4; width: 2; height: 0.6;"
          text={`value:Salida;wrapCount:20;width: 4;yOffset:-4;color:#F7f7f7;shader: msdf; font:${urlFont}/marker/PermanentMarker-Regular-msdf.json;align: center`} />
        

        {/* Sofa */}
        <a-box gltf-model={sofa} position="-6.753 0.32 3.965" rotation="0 1.547 0" scale="1.5 1.5 1.5" material=""></a-box>
        <a-box gltf-model={sofanegro} position="9.926 0.124 6.892" rotation="0 -93.965078401455 0" scale="0.02 0.02 0.02" material=""></a-box>
        
        {/* Alfombraama */}
        <a-box gltf-model={alfombraama} position="-6.848 0.32 5.755" rotation="0 1.547 0" scale="1.1 1 1" material=""></a-box>

        {/* Bonsai */}
        <a-box gltf-model={bonsai} position="10.089 0.038 4.406" rotation="0 -175.78345154613658 0" scale="1.1 1 1" material=""></a-box>
         
         {/* Puff */}
        <a-box gltf-model={puff} position="-4.968 0.295 4.845" rotation="0 -4.354 0" scale="0.03 0.03 0.03" material=""></a-box>
        <a-box gltf-model={puff} position="-4.888 0.307 6.698" rotation="0 -4.354 0" scale="0.03 0.03 0.03" material=""></a-box>
        
        {/* Arboles */}
        <a-box gltf-model={cerezojapones} position="2.869 0.303 -3.185" rotation="0 -4.354 0" scale="0.1 0.1 0.1" material=""></a-box>
        <a-box gltf-model={cerezojapones} position="4.677 0.303 -3.185" rotation="0 -4.354 0" scale="0.1 0.1 0.1" material=""></a-box>
       
        
        {/* Mesa de centro*/ }
        <a-box gltf-model={mesa_centro} position="5.062 0.146 6.496" rotation="0 -89.782 0" scale="0.005 0.006 0.005" material=""></a-box>
        
       {/*Casa japonesa*/}
       <a-box gltf-model={casajaponesa} position="7.301 0.303 -2.153" rotation="0 1.547 0" scale="1.1 0.89 1" material=""></a-box>

       {/* Cuadro */} 
       <a-box gltf-model={cuadro} position="-5.975 2.758 3.416" rotation="0 -4.354 0" scale="0.005 0.005 0" material=""></a-box>
      
      <a-box gltf-model={bonsai_tree} position="-1.64 1.354 13.356" rotation="0 -4.354 0" material=""></a-box>

      <a-box gltf-model={lampara} position="-2.274 0.328 2.927" rotation="0 -87.26147219842437 0" scale="0.03 0.03 0.03" material=""></a-box>

      <a-box gltf-model={mesacafe} position="-9.892 0.328 6.939" rotation="0 -87.261 0" scale="0.03 0.02 0.01" material=""></a-box>

      <a-box gltf-model={puerta} position="0.778 -0.01 21.595" rotation="0 1.432 0" material="" scale="9 7.169 1"></a-box>

      <a-box gltf-model={yingyang} position="-3.317 -0.01 21.922" rotation="0 11.688 0" scale="0.08 0.08 0.03" material=""></a-box>
      <a-box gltf-model={yingyang} position="4.875 -0.01 21.922" rotation="0 -4.927437038125079 0" scale="0.08 0.08 0.03" material=""></a-box>
     
     <a-box gltf-model={esfera} position="-1.358 0.525 12.876" rotation="22.039 -58.428 22.039" material="" scale="0.8 0.9 1.3"> 
              <a-animation attribute="rotation" dur="10000" fill="forwards" to="360 360 360" repeat="indefinite"></a-animation></a-box>

      <a-box gltf-model={sol} position="7.235 1.245 -2.373" rotation="22.039 -58.428 22.039" material="" scale="0.8 0.9 1.3"> 
              <a-animation attribute="rotation" dur="10000" fill="forwards" to="360 360 360" repeat="indefinite"></a-animation></a-box>          

      <a-box gltf-model={thinkito} position="7.201 1.305 17.652" rotation="34.70216595604936 -40.78454184996791 34.70216595604936" material="" scale="0.8 0.9 1.3">
        <a-animation attribute="rotation" dur="10000" fill="forwards" to="0 360 0" repeat="indefinite"></a-animation></a-box>
      

      {/* <a-plane position="0.631 2.961 13.948" scale="1.278 2.178 1" material=""></a-plane>
      <a-plane position="-8.638 3.256 9.858" scale="3.187 1.302 1" material="" rotation="0 -0.6302535746439055 0"></a-plane>    
    <a-plane position="1 1 1" scale="1 1 1" material=""></a-plane> */}
              
       
       
        </Entity>
       
        

        
        {/* suelo */}
        <a-plane static-body position="0 0 0"  rotation="-90 0 0" width="30" height="30" material="src: #suelosesioncinco; repeat: 100 100" radius="10"></a-plane>
        {/* cielo */}
        <a-sky src="#sky" material="" geometry="" scale="-1.31 1 1" rotation="0 0 0"></a-sky>
        {/* CAMARA */}
        {/* <a-entity camera="active:false" velocity="" kinematic-body="radius:2" position="0 1.6 14.696" look-controls="" universal-controls="" gamepad-controls="" keyboard-controls="" touch-controls="" hmd-controls="" mouse-controls="" data-aframe-inspector-original-camera=""><a-entity raycaster="" cursor="" position="0 0 -0.5" geometry="primitive:ring;radiusInner:0.01;radiusOuter:0.016" material="opacity:0.5;shader:flat;color:blue" scale="0.8 0.8 0.8"></a-entity></a-entity>*/}
        <Entity id="cameraRig" camera kinematic-body="radius:1" look-controls universal-controls position="0 1.6 14.696" rotation="16.6 0 0">
          <Entity cursor position="0 0 -0.5" geometry="primitive:ring;radiusInner:0.01;radiusOuter:0.016" material="opacity:0.5;shader:flat;transparent:false;color:blue" scale="0.5 0.5 0.5"></Entity>
          <a-entity controller="hand: left"></a-entity>
          <a-entity controller="hand: right"></a-entity>
      </Entity>
        </Scene>
        
    );
}

export default SesionCinco;