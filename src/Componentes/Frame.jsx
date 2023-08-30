
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
import nubecumulo from '../obj/nubes/CumulusClouds.glb'
import portalValores from '../obj/construccion/gate_wood.glb'

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
 const portalSeleccion = (ir) => {
  console.log("Hecho " + ir)
  window.location.href=ir;
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
        <a-entity id="hojas_21"  gltf-model={hojas} position="-0.67 0 1" rotation="0 0 0" scale="1.0 1.0 1.0"></a-entity>
        <a-entity static-body id="arbol_22" gltf-model={arbol} position="-0.7 0 4.6" rotation="0 80 0" scale="1.0 1.0 1.0"></a-entity>
        <a-entity id="hojas_22" gltf-model={hojas} position="-0.7 0 4.6" rotation="0 80 0" scale="1.0 1.0 1.0"></a-entity>
        <a-entity static-body id="arbol_23" gltf-model={arbol} position="-0.9 -0.5 8" rotation="0 119 0" scale="1.1 1.1 1.1"></a-entity>
        <a-entity id="hojas_23" gltf-model={hojas} position="-0.9 -0.5 8" rotation="0 119 0" scale="1.1 1.1 1.1"></a-entity>
        <a-entity static-body id="arbol_24" gltf-model={arbol} position="-0.66 -0.1 -6.58" rotation="0 39 0" scale="1.2 1.2 1.2"></a-entity>
        <a-entity id="hojas_24" gltf-model={hojas} position="-0.66 -0.1 -6.58" rotation="0 39 0" scale="1.2 1.2 1.2"></a-entity>
        <a-entity static-body id="arbol_25" gltf-model={arbol} position="-0.6 -0.0 10.4" rotation="0 119 0" scale="1.4 1.4 1.4 "></a-entity>
        <a-entity id="hojas_25" gltf-model={hojas} position="-0.6 -0.0 10.4" rotation="0 119 0" scale="1.4 1.4 1.4 "></a-entity>
        <a-entity static-body id="arbol_26" gltf-model={arbol} position="-0.5 -0.2 14.4" rotation="0 101 0" scale="1.7 1.7 1.7"></a-entity>
        <a-entity id="hojas_26" gltf-model={hojas} position="-0.5 -0.2 14.4" rotation="0 101 0" scale="1.7 1.7 1.7"></a-entity>
        <a-entity static-body id="arbol_27" gltf-model={arbol} position="-0.7 -0.5 -2.4" rotation="0 15 0" scale="1.6 1.6 1.6"></a-entity>
        <a-entity id="hojas_27" gltf-model={hojas} position="-0.7 -0.5 -2.4" rotation="0 15 0" scale="1.6 1.6 1.6"></a-entity>
        <a-entity static-body id="arbol_28" gltf-model={arbol} position="-1 -0.05 -12.4" rotation="0 181 0" scale="1.2 1.2 1.2"></a-entity>
        <a-entity id="hojas_28" gltf-model={hojas} position="-1 -0.05 -12.4" rotation="0 181 0" scale="1.2 1.2 1.2"></a-entity>
        <a-entity static-body id="arbol_29" gltf-model={arbol} position="-1.2 -0.05 -14.5" rotation="0 151 0" scale="1.2 1.2 1.2"></a-entity>
        <a-entity id="hojas_29" gltf-model={hojas} position="-1.2 -0.05 -14.5" rotation="0 151 0" scale="1.2 1.2 1.2"></a-entity>
       

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
        <a-entity id="varios_21" gltf-model={plantdandeli} position="-5.8 1.7 2.5" rotation="0 152 0" scale="6 6 6" ></a-entity>
        {/* muro  */}
        <a-box id="wall_21" color="grey" width="30" height="3" depth="1" position="0 0 0" material="repeat:19 5;color:withe;metalness:0.2;roughness:0.1;src:#imagen-pared" static-body rotation="0 90 0" ></a-box>
      </Entity>

      <Entity id="muro_3" position="0 0 -15" rotation="0 90 0">
        {/* Arboles del perimetro */}
        <a-entity static-body id="arbol_31" gltf-model={arbol} position="-0.67 0 1" rotation="0 0 0" scale="1 1 1"></a-entity>
        <a-entity id="hojas_31" gltf-model={hojas} position="-0.67 0 1" rotation="0 0 0" scale="1 1 1"></a-entity>
        <a-entity static-body id="arbol_32" gltf-model={arbol} position="-0.7 0 4.6" rotation="0 80 0" scale="1 1 1"></a-entity>
        <a-entity id="hojas_32" gltf-model={hojas} position="-0.7 0 4.6" rotation="0 80 0" scale="1 1 1"></a-entity>
        <a-entity static-body id="arbol_33" gltf-model={arbol} position="-0.9 -0.5 8" rotation="0 119 0" scale="1.1 1. 1.1"></a-entity>
        <a-entity id="hojas_33" gltf-model={hojas} position="-0.9 -0.5 8" rotation="0 119 0" scale="1.1 1. 1.1"></a-entity>
        <a-entity static-body id="arbol_34" gltf-model={arbol} position="-0.66 -0.1 -6.58" rotation="0 39 0" scale="1.2 1.2 1.2"></a-entity>
        <a-entity id="hojas_34" gltf-model={hojas} position="-0.66 -0.1 -6.58" rotation="0 39 0" scale="1.2 1.2 1.2"></a-entity>
        <a-entity static-body id="arbol_35" gltf-model={arbol} position="-0.6 -0.0 10.4" rotation="0 119 0" scale="1.4 1.4 1.4"></a-entity>
        <a-entity id="hojas_35" gltf-model={hojas} position="-0.6 -0.0 10.4" rotation="0 119 0" scale="1.4 1.4 1.4"></a-entity>
        <a-entity static-body id="arbol_36" gltf-model={arbol} position="-0.5 -0.2 14.4" rotation="0 101 0" scale="1.7 1.7 1.7"></a-entity>
        <a-entity id="hojas_36" gltf-model={hojas} position="-0.5 -0.2 14.4" rotation="0 101 0" scale="1.7 1.7 1.7"></a-entity>
        <a-entity static-body id="arbol_37" gltf-model={arbol} position="-0.7 -0.5 -2.4" rotation="0 15 0" scale="1.6 1.6 1.6"></a-entity>
        <a-entity id="hojas_37" gltf-model={hojas} position="-0.7 -0.5 -2.4" rotation="0 15 0" scale="1.6 1.6 1.6"></a-entity>
        <a-entity static-body id="arbol_38" gltf-model={arbol} position="-1 -0.05 -12.4" rotation="0 181 0" scale="1.2 1.2 1.2"></a-entity>
        <a-entity id="hojas_38" gltf-model={hojas} position="-1 -0.05 -12.4" rotation="0 181 0" scale="1.2 1.2 1.2"></a-entity>
        <a-entity static-body id="arbol_39" gltf-model={arbol} position="-1.2 -0.05 -14.5" rotation="0 151 0" scale="1.2 1.2 1.2"></a-entity>
        <a-entity id="hojas_39" gltf-model={hojas} position="-1.2 -0.05 -14.5" rotation="0 151 0" scale="1.2 1.2 1.2"></a-entity>
       
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
        <a-box id="wall_21" color="grey" width="30" height="3" depth="1" position="0 0 0" material="repeat:10 2;color:withe;metalness:0.2;roughness:0.1;src:#imagen-pared" static-body rotation="0 90 0" ></a-box>
      </Entity>
      {/* PORTALES */}
      <a-entity id="portalvalores" gltf-model={portalValores} position="8.6 -0.25 -12" rotation="0 88 0" scale="0.5 0.5 0.5">
      
      </a-entity>
      <Entity
                  primitive="a-entity"
                  reset="true"
                  position="9.3 1.6 -12"
                  rotation="0 134 0"
                  geometry="primitive: box; height: 1; width: 1; depth:0"
                  material="shader: flat; color: black"
                  events={{
                    click: ()=> portalSeleccion('valores') ,
                  }}
                  text={"value:Valores;width: 16;letterSpacing:10px;yOffset:25;color:white"} 
              />
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
      <a-box id="camino_1" width="2" height="3" depth="0.5" material="src:#camino_piedra" position="0 -0.244 15" rotation="90 0 0"></a-box>
      <a-box id="camino_2" width="2" height="3" depth="0.5" material="src:#camino_piedra" position="0.64 -0.244 13" rotation="90 -34.3 0"></a-box>
      <a-box id="camino_3" width="2" height="3" depth="0.5" material="src:#camino_piedra" position="-1.3 -0.2 11.66" rotation="90 44 0"></a-box>
      <a-box id="camino_4" width="2" height="3" depth="0.5" material="src:#camino_piedra" position="2.53 -0.2 11.03" rotation="90 -52 0"></a-box>
      <a-box id="camino_5" width="2" height="3" depth="0.5" material="src:#camino_piedra" position="4.69 -0.2 9.28" rotation="90 -52 0"></a-box>
      <a-box id="camino_6" width="2" height="3" depth="0.5" material="src:#camino_piedra" position="-3.3 -0.2 9.51" rotation="90 -138 0"></a-box>
      <a-box id="camino_7" width="2" height="3" depth="0.5" material="src:#camino_piedra" position="7 -0.2 7.5" rotation="90 -52 0"></a-box>
      <a-box id="camino_8" width="2" height="3" depth="0.5" material="src:#camino_piedra" position="-5.6 -0.2 5.4" rotation="90 2.7 0"></a-box>
      <a-box id="camino_9" width="2" height="3" depth="0.5" material="src:#camino_piedra" position="-5.8 -0.2 2.43" rotation="90 -0.2 0"></a-box>
      <a-box id="camino_10" width="2" height="3" depth="0.5" material="src:#camino_piedra" position="9.8 -0.2 1.0" rotation="90 2.46 0"></a-box>
      <a-box id="camino_11" width="2" height="3" depth="0.5" material="src:#camino_piedra" position="-5.2 -0.2 8.03" rotation="90 -91 0"></a-box>
      <a-box id="camino_12" width="2" height="3" depth="0.5" material="src:#camino_piedra" position="9.5 -0.2 -4.61" rotation="90 4.4 0"></a-box>
      <a-box id="camino_13" width="2" height="3" depth="0.5" material="src:#camino_piedra" position="-8.2 -0.2 7.8" rotation="90 -90 0"></a-box>
      <a-box id="camino_14" width="2" height="3" depth="0.5" material="src:#camino_piedra" position="9.3 -0.2 5.6" rotation="90 -52 0"></a-box>
      <a-box width="2" height="3" depth="0.5" material="src:#camino_piedra" id="camino_15" position="9.88 -0.2 3.8" rotation="90 4.4 0"></a-box>
      <a-box width="2" height="3" depth="0.5" material="src:#camino_piedra" id="camino_16" position="4.2 -0.2 -11.2" rotation="90 -90 0"></a-box>
      <a-box width="2" height="3" depth="0.5" material="src:#camino_piedra" id="camino_17" position="-0.5 -0.2 -10" rotation="90 -54 0"></a-box>
      <a-box width="2" height="3" depth="0.5" material="src:#camino_piedra" id="camino_18" position="9.7 -0.2 -1.9" rotation="90 4.4 0"></a-box>
      <a-box width="2" height="3" depth="0.5" material="src:#camino_piedra" id="camino_19" position="1.5 -0.2 -11" rotation="90 -90 0"></a-box>
      <a-box width="2" height="3" depth="0.5" material="src:#camino_piedra" id="camino_20" position="9.4 -0.2 8.5" rotation="90 -141 0"></a-box>
      <a-box width="2" height="3" depth="0.5" material="src:#camino_piedra" id="camino_21" position="-5.9 -0.2 -0.6" rotation="90 4.4 0"></a-box>
      <a-box width="2" height="3" depth="0.5" material="src:#camino_piedra" id="camino_22" position="-5.3 -0.2 -5.6" rotation="90 -31.8 0"></a-box>
      <a-box width="2" height="3" depth="0.5" material="src:#camino_piedra" id="camino_23" position="-2.7-0.2 -8.5" rotation="90 -52 0"></a-box>
      <a-box width="2" height="3" depth="0.5" material="src:#camino_piedra" id="camino_24" position="9.47 -0.2 -7.5" rotation="90 1.14 0"></a-box>
      <a-box width="2" height="3" depth="0.5" material="src:#camino_piedra" id="camino_25" position="-6.0 -0.2 -3.4" rotation="90 -1.4 0"></a-box>
      <a-box width="2" height="3" depth="0.5" material="src:#camino_piedra" id="camino_26" position="6.03 -0.2 -10.7" rotation="90 -113 0"></a-box>
      <a-box width="2" height="3" depth="0.5" material="src:#camino_piedra" id="camino_27" position="-2.7 -0.2 -8.5" rotation="90 -52 0"></a-box>
      <a-box width="2" height="3" depth="0.5" material="src:#camino_piedra" id="camino_28" position="-3.75 -0.2 -7.5" rotation="90 -46 0"></a-box>
      <a-box width="2" height="3" depth="0.5" material="src:#camino_piedra" id="camino_29" position="8.03 -0.2 -9.55" rotation="90 56 0"></a-box>
      <a-box width="2" height="3" depth="0.5" material="src:#camino_piedra" id="camino_30" position="9.5 -0.2 -10" rotation="90 -2.5 0"></a-box>
      <a-box width="2" height="3" depth="0.5" material="src:#camino_piedra" id="camino_31" position="-3.87 -0.2 -10" rotation="90 40 0"></a-box>
      <a-box width="2" height="3" depth="0.5" material="src:#camino_piedra" id="camino_32" position="-8.36 -0.2 -3" rotation="90 86.2 0"></a-box>
      {/* suelo */}
      <a-plane static-body position="0 0 0"  rotation="-90 0 0" width="30" height="40" material="src: #cesped; repeat: 100 100" radius="10"></a-plane>
      <a-plane static-body position="0 -0.5 0"  rotation="-90 0 0" width="300" height="400" color="green" radius="10"></a-plane>
      {/* cielo */}
      <a-sky color="#87CEEB" material="" geometry="" scale="-1.31 1 1" rotation="0 0 0"></a-sky>
      {/* nubes */}
      <a-entity id="nube_1" type="model" gltf-model={nubecumulo} position="-1.2 50 100.5" rotation="0 151 0" scale="6 6 6">
        <a-animation attribute="position" dur="300000" from="-1.2 50 100.5" to="-1.2 50 -200.0" repeat="indefinite">
        </a-animation>
      </a-entity>
      {/* cámara */}
      {cargarCamara}
    </Scene>


    );
  }
  
  export default Frame;