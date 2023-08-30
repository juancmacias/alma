
import {Entity, Scene} from 'aframe-react';
import React, {useState, useEffect, useRef} from 'react';
import ReactDOM from 'react-dom';
import useSound from 'use-sound';

/* precargar los objetos en 3d */
import bamboo from '../obj/plantas/bamboo.glb'
import arbol from '../obj/plantas/tronco.glb'
import hojas from '../obj/plantas/hojas.glb'
import maple_tronco from '../obj/plantas/maple_tronco.glb'
import maple_hojas from '../obj/plantas/maple_hojas.glb'
import molinillo from '../obj/plantas/molinillo.glb'
import hojasverdes from '../obj/plantas/hojasverdes.glb'
import plantdandeli from '../obj/plantas/plants-dandelion.glb'
import buda from '../obj/construccion/garden_buddha.glb'
import nomo from '../obj/construccion/mesh_garden_gnome.glb'
import tori from '../obj/construccion/japanese_tori_gate.glb'
import camino from '../obj/construccion/floortile.glb'

function Frame() {
  
  const cargarObjetos = (tipo1,tipo2, cantidad, p, max, min, x,y,z, escala) =>{
    let objetos = []
    for(let i = 1; i <= cantidad; i++){     
      let rot = 180/i+5
      let scala = escala+Math.random() 
      let XX = x + Math.random()
      let ZZ = 1 + Math.floor(Math.random() * (max - min + 1) + min);

      objetos.push(<Entity static-body id={`arbol_5${i}`} gltf-model={tipo1} position={`${XX} ${y} ${ZZ}`} rotation={`0 ${rot}) 0`} scale={`${scala} ${scala} ${scala}`}></Entity>)
      objetos.push(<a-entity id={`hoja_5${i}`}  gltf-model={tipo2} position={`${XX} ${y} ${ZZ}`} rotation={`0 ${rot}) 0`} scale={`${scala} ${scala} ${scala}`}></a-entity>)
    }
    return(objetos)

 }
 
  const cargarCamara = (
    <Entity camera kinematic-body="radius:1"  look-controls universal-controls position="0 1.6 20" rotation="22 0 0">
      <Entity cursor position="0 0 -0.5" geometry="primitive:ring;radiusInner:0.01;radiusOuter:0.016" material="opacity:0.5;shader:flat;transparent:false;color:blue" scale="0.5 0.5 0.5" raycaster ></Entity>
    </Entity>
  );
    return (
      <Scene xrextras-loading physics="debug: false" canvas="" inspector="" keyboard-shortcuts="" screenshot="" vr-mode-ui="" auto-enter-vr="">
        {/* recursos */}
       <a-assets>
          <img id="imagen-pared" src={require('../resources/piedra_muro.jpg')} alt='' />
          <img id="cesped" src={require('../resources/cesped.jpg')} alt='' />
          <img id="sky" src={require('../resources/cielo-azul.jpg')} alt='' />
          <img id="camino_piedra" src={require('../resources/piedra_suelo.jpg')} alt='' />
      </a-assets>
      <Entity id="muro_1" position="-15 0 0" rotation="0 0 0">
        {
          /*
           Arboles del perimetro
           objeto, cantidad, posicion, maximo, minimo, x, y, z
          */
          cargarObjetos(arbol,hojas, 6, 0, 14, -14, 0,0,-14, 1)
          
          
        }
        {
          cargarObjetos(maple_tronco,maple_hojas, 4, 0, 14, -14, 0,0,-14, -0.1)
        }
         
        {/* bambu */}
        <a-entity id="bambu_11" gltf-model={bamboo} position="0.5 0.01 -10.4" rotation="0 181 0" scale="1.1 1 1"></a-entity>
        <a-entity id="bambu_12" gltf-model={bamboo} position="0.6 0.01 -13.5" rotation="0 151 0" scale="1 1.1 1"></a-entity>
        <a-entity id="bambu_13" gltf-model={bamboo} position="0.8 0.01 -12.3" rotation="0 181 0" scale="1 1 1.1"></a-entity>
        <a-entity id="bambu_14" gltf-model={bamboo} position="1 0.01 -13.6" rotation="0 151 0" scale="1 1.1 1.1"></a-entity>
        <a-entity id="bambu_15" gltf-model={bamboo} position="0.9 0.01 -14.4" rotation="0 181 0" scale="1.1 1 1"></a-entity>
        <a-entity id="bambu_16" gltf-model={bamboo} position="0.9 0.01 -9.5" rotation="0 151 0" scale="1 1.1 1"></a-entity>
        <a-entity id="bambu_17" gltf-model={bamboo} position="0.7 0.0 -7.3" rotation="0 181 0" scale="1 1 1.1"></a-entity>
        <a-entity id="bambu_18" gltf-model={bamboo} position="0.6 0.0 -1.6" rotation="0 151 0" scale="1 1.1 1.1"></a-entity>
        {/* varias plantas */}
        <a-entity id="varios_11" gltf-model={molinillo} position="0.61 0.0 -1.6" rotation="0 152 0" scale="1 1.1 1.1"></a-entity>
        <a-entity id="varios_12" gltf-model={molinillo} position="0.72 0.0 -1.5" rotation="0 151 0" scale="1 1.1 1.1"></a-entity>
        <a-entity id="varios_13" gltf-model={molinillo} position="0.53 0.0 -1.7" rotation="0 155 0" scale="1 1.1 1.1"></a-entity>
        <a-entity id="varios_14" gltf-model={molinillo} position="0.84 0.0 -1.55" rotation="0 154 0" scale="1 1.1 1.1"></a-entity>
        <a-entity id="varios_15" gltf-model={molinillo} position="0.75 0.0 -1.6" rotation="0 156 0" scale="1 1.1 1.1"></a-entity>
        <a-entity id="varios_16" gltf-model={molinillo} position="0.81 0.0 -1.5" rotation="0 153 0" scale="1 1.1 1.1"></a-entity>
        <a-entity id="varios_17" gltf-model={molinillo} position="0.92 0.0 -1.7" rotation="0 151 0" scale="1 1.1 1.1"></a-entity>
        <a-entity id="varios_18" gltf-model={molinillo} position="0.62 0.0 -1.55" rotation="0 151 0" scale="1 1.1 1.1"></a-entity>
        <a-entity id="varios_19" gltf-model={hojasverdes} position="0.62 0.0 -1.55" rotation="0 80 0" scale="0.1 0.1 0.1"></a-entity>
        {/* muro  */}
        <a-box id="wall_11" color="grey" width="30" height="3" depth="1" position="0 0 0" material="repeat:19 5;color:withe;metalness:0.2;roughness:0.1;src:#imagen-pared" static-body rotation="0 90 0" ></a-box>
      </Entity>

      <Entity id="muro_2" position="15 0 0" rotation="0 0 0">
        {/* Arboles del perimetro  "dynamic-body="mass: 5"*/}
        <a-entity static-body id="arbol_21"  gltf-model={arbol} position="-0.67 0 1" rotation="0 0 0" scale="1.0 1.0 1.0"></a-entity>
        <a-entity static-body id="hojas_21"  gltf-model={hojas} position="-0.67 0 1" rotation="0 0 0" scale="1.0 1.0 1.0"></a-entity>
        <a-entity static-body id="arbol_22" type="model" gltf-model={arbol} position="-0.7 0 4.6" rotation="0 80 0" scale="1.0 1.0 1.0"></a-entity>
        <a-entity static-body id="arbol_23" type="model" gltf-model={arbol} position="-0.9 -0.5 8" rotation="0 119 0" scale="1.1 1.1 1.1"></a-entity>
        <a-entity static-body id="arbol_24" type="model" gltf-model={arbol} position="-0.66 -0.1 -6.58" rotation="0 39 0" scale="1.2 1.2 1.2"></a-entity>
        <a-entity static-body id="arbol_25" type="model" gltf-model={arbol} position="-0.6 -0.0 10.4" rotation="0 119 0" scale="1.4 1.4 1.4 "></a-entity>
        <a-entity static-body id="arbol_26" type="model" gltf-model={arbol} position="-0.5 -0.2 14.4" rotation="0 101 0" scale="1.7 1.7 1.7"></a-entity>
        <a-entity static-body id="arbol_27" type="model" gltf-model={arbol} position="-0.7 -0.5 -2.4" rotation="0 15 0" scale="1.6 1.6 1.6"></a-entity>
        <a-entity static-body id="arbol_28" type="model" gltf-model={arbol} position="-1 -0.05 -12.4" rotation="0 181 0" scale="1.2 1.2 1.2"></a-entity>
        <a-entity static-body id="arbol_29" type="model" gltf-model={arbol} position="-1.2 -0.05 -14.5" rotation="0 151 0" scale="1.2 1.2 1.2"></a-entity>
       

        {/* bambu */}
        <a-entity id="bambu_21" gltf-model={bamboo} position="-0.5 0.01 -10.4" rotation="0 181 0" scale="1.1 1 1"></a-entity>
        <a-entity id="bambu_22" gltf-model={bamboo} position="-0.6 0.01 -13.5" rotation="0 151 0" scale="1 1.1 1"></a-entity>
        <a-entity id="bambu_23" gltf-model={bamboo} position="-0.8 0.01 -12.3" rotation="0 181 0" scale="1 1 1.1"></a-entity>
        <a-entity id="bambu_24" gltf-model={bamboo} position="-1 0.01 -13.6" rotation="0 151 0" scale="1 1.1 1.1"></a-entity>
        <a-entity id="bambu_25" gltf-model={bamboo} position="-0.9 0.01 -14.4" rotation="0 181 0" scale="1.1 1 1"></a-entity>
        <a-entity id="bambu_26" gltf-model={bamboo} position="-0.9 0.01 -9.5" rotation="0 151 0" scale="1 1.1 1"></a-entity>
        <a-entity id="bambu_27" gltf-model={bamboo} position="-0.7 0.0 -7.3" rotation="0 181 0" scale="1 1 1.1"></a-entity>
        <a-entity id="bambu_28" gltf-model={bamboo} position="-0.6 0.0 -1.6" rotation="0 151 0" scale="1 1.1 1.1"></a-entity>
        {/* varias plantas */}
        <a-entity id="varios_21" gltf-model={plantdandeli} position="-6.5 1.7 2.5" rotation="0 152 0" scale="6 6 6" ></a-entity>
        {/* muro  */}
        <a-box id="wall_21" color="grey" width="30" height="3" depth="1" position="0 0 0" material="repeat:19 5;color:withe;metalness:0.2;roughness:0.1;src:#imagen-pared" static-body rotation="0 90 0" ></a-box>
      </Entity>

      <Entity id="muro_3" position="0 0 -15" rotation="0 90 0">
        {/* Arboles del perimetro */}
        <a-entity static-body id="arbol_31" type="model" gltf-model={arbol} position="-0.67 0 1" rotation="0 0 0" scale="1 1 1"></a-entity>
        <a-entity static-body id="arbol_32" type="model" gltf-model={arbol} position="-0.7 0 4.6" rotation="0 80 0" scale="1 1 1"></a-entity>
        <a-entity static-body id="arbol_33" type="model" gltf-model={arbol} position="-0.9 -0.5 8" rotation="0 119 0" scale="1.1 1. 1.1"></a-entity>
        <a-entity static-body id="arbol_34" type="model" gltf-model={arbol} position="-0.66 -0.1 -6.58" rotation="0 39 0" scale="1.2 1.2 1.2"></a-entity>
        <a-entity static-body id="arbol_35" type="model" gltf-model={arbol} position="-0.6 -0.0 10.4" rotation="0 119 0" scale="1.4 1.4 1.4"></a-entity>
        <a-entity static-body id="arbol_36" type="model" gltf-model={arbol} position="-0.5 -0.2 14.4" rotation="0 101 0" scale="1.7 1.7 1.7"></a-entity>
        <a-entity static-body id="arbol_37" type="model" gltf-model={arbol} position="-0.7 -0.5 -2.4" rotation="0 15 0" scale="1.6 1.6 1.6"></a-entity>
        <a-entity static-body id="arbol_38" type="model" gltf-model={arbol} position="-1 -0.05 -12.4" rotation="0 181 0" scale="1.2 1.2 1.2"></a-entity>
        <a-entity static-body id="arbol_39" type="model" gltf-model={arbol} position="-1.2 -0.05 -14.5" rotation="0 151 0" scale="1.2 1.2 1.2"></a-entity>
       
        {/* bambu */}
        <a-entity id="bambu_31" gltf-model={bamboo} position="-0.5 0.01 -10.4" rotation="0 181 0" scale="1.1 1 1"></a-entity>
        <a-entity id="bambu_32" gltf-model={bamboo} position="-0.6 0.01 -13.5" rotation="0 151 0" scale="1 1.1 1"></a-entity>
        <a-entity id="bambu_33" gltf-model={bamboo} position="-0.8 0.01 -12.3" rotation="0 181 0" scale="1 1 1.1"></a-entity>
        <a-entity id="bambu_34" gltf-model={bamboo} position="-1 0.01 -13.6" rotation="0 151 0" scale="1 1.1 1.1"></a-entity>
        <a-entity id="bambu_35" gltf-model={bamboo} position="-0.9 0.01 -14.4" rotation="0 181 0" scale="1.1 1 1"></a-entity>
        <a-entity id="bambu_36" gltf-model={bamboo} position="-0.9 0.01 -9.5" rotation="0 151 0" scale="1 1.1 1"></a-entity>
        <a-entity id="bambu_37" gltf-model={bamboo} position="-0.7 0.0 -7.3" rotation="0 181 0" scale="1 1 1.1"></a-entity>
        <a-entity id="bambu_38" gltf-model={bamboo} position="-0.6 0.0 -1.6" rotation="0 151 0" scale="1 1.1 1.1"></a-entity>
        {/* muro  */}
        <a-box id="wall_21" color="grey" width="30" height="3" depth="1" position="0 0 0" material="repeat:19 5;color:withe;metalness:0.2;roughness:0.1;src:#imagen-pared" static-body rotation="0 90 0" ></a-box>
      </Entity>
      {/* cosas varias */}

      <a-entity id="buda" gltf-model={buda} position="-0.5 -0.25 -14" rotation="0 29 0" scale="1 1 1"></a-entity>
      <a-entity static-body id="nomo" gltf-model={nomo} position="-14 0.01 -14" rotation="0 29 0" scale="1.2 1.2 1.2"></a-entity>
      <a-entity static-body id="nomo" gltf-model={nomo} position="14 0.01 14" rotation="0 -100 0" scale="1.2 1.2 1.2"></a-entity>
      <a-entity static-body id="nomo" gltf-model={nomo} position="-14 0.01 14.5" rotation="0 100 0" scale="1.2 1.2 1.2"></a-entity>
      <a-entity static-body id="nomo" gltf-model={nomo} position="14 0.01 -14" rotation="0 -29 0" scale="1.2 1.2 1.2"></a-entity>

      {/* ENTRADA */}
      <a-box id="wall_seguro_1" width="30" height="3" depth="0.1" position="0 0 20" material="opacity:0.1" static-body rotation="0 180 0" ></a-box>
      <a-box id="wall_seguro_2" width="10" height="3" depth="0.1" position="14 0 14" material="opacity:0.1" static-body rotation="0 90 0" ></a-box>
      <a-box id="wall_seguro_3" width="10" height="3" depth="0.1" position="-14 0 -14" material="opacity:0.1" static-body rotation="0 -90 0" ></a-box>
      <a-box id="wall_tory_1" color="grey" width="13.1" height="3" depth="0.5" position="9.26 0 15" material="repeat:19 5;color:withe;metalness:0.2;roughness:0.1;src:#imagen-pared" static-body rotation="0 180 0" ></a-box>
      <a-box id="wall_tory_2" color="grey" width="13.1" height="3" depth="0.5" position="-9.26 0 15" material="repeat:19 5;color:withe;metalness:0.2;roughness:0.1;src:#imagen-pared" static-body rotation="0 180 0" ></a-box>
      <a-entity id="tori" gltf-model={tori} position="0 0 15" rotation="0 0 0" scale="0.7 0.7 0.7"></a-entity>
      {/* camino */}
      <a-box id="camino_1" width="2" height="3" depth="0.5" material="src:#camino_piedra" position="0 -0.2 14.5" rotation="90 0 0" scale="1 1 1"></a-box>
      <a-box id="camino_2" width="2" height="3" depth="0.5" material="src:#camino_piedra" position="0.64 -0.2 13" rotation="90 -34.3 0" scale="1 1 1"></a-box>
      <a-box id="camino_3" width="2" height="3" depth="0.5" material="src:#camino_piedra" position="0.8 -0.2 11.66" rotation="90 -32 0" scale="1 1 1"></a-box>
      <a-entity id="camino_4" gltf-model={camino} position="-0.85 -0.05 11.3" rotation="0 -52 0" scale="1 1 1"></a-entity>
      <a-entity id="camino_5" gltf-model={camino} position="3.3 -0.05 9" rotation="0 -52 0" scale="1 1 1"></a-entity>
      <a-entity id="camino_6" gltf-model={camino} position="-2.1 -0.05 10.1" rotation="0 -42 0" scale="1 1 1"></a-entity>
      <a-entity id="camino_7" gltf-model={camino} position="4.6 -0.05 7.9" rotation="0 -52 0" scale="1 1 1"></a-entity>
      <a-entity id="camino_8" gltf-model={camino} position="1.8 -0.05 10.3" rotation="0 -52 0" scale="1 1 1"></a-entity>
      <a-entity id="camino_9" gltf-model={camino} position="-3.4 -0.05 9" rotation="0 -34 0" scale="1 1 1"></a-entity>
      <a-entity id="camino_10" gltf-model={camino} position="-4.6 -0.05 7.9" rotation="0 -46 0" scale="1 1 1"></a-entity>
      <a-entity id="camino_11" gltf-model={camino} position="-5.8 -0.05 4.88" rotation="0 -78 0" scale="1 1 1"></a-entity>
      <a-entity id="camino_12" gltf-model={camino} position="-5.4 -0.05 6.6" rotation="0 -69 0" scale="1 1 1"></a-entity>
      <a-entity id="camino_13" gltf-model={camino} position="-6.1 -0.05 3.13" rotation="0 -90 0" scale="1 1 1"></a-entity>
      <a-entity id="camino_14" gltf-model={camino} position="5.9 -0.05 6.8" rotation="0 -52 0" scale="1 1 1"></a-entity>
      {/* suelo */}
      <a-plane static-body position="0 0 0"  rotation="-90 0 0" width="30" height="40" material="src: #cesped; repeat: 100 100" radius="10"></a-plane>
      <a-plane static-body position="0 -0.5 0"  rotation="-90 0 0" width="300" height="400" color="green" radius="10"></a-plane>
      {/* cielo */}
      <a-sky src="#sky" material="" geometry="" scale="-1.31 1 1" rotation="0 0 0"></a-sky>
      {/* cámara */}
      {cargarCamara}
    </Scene>







    );
  }
  
  export default Frame;