import {Entity, Scene} from 'aframe-react';
import React, {useState, useEffect, useRef} from 'react';



/* precargar los objetos en 3d */
import bamboo from '../obj/plantas/bamboo.glb'
import arbol from '../obj/plantas/tronco.glb'
import hojas from '../obj/plantas/hojas.glb'
import maple_tronco from '../obj/plantas/maple_tronco.glb'
import maple_hojas from '../obj/plantas/maple_hojas.glb'
import molinillo from '../obj/plantas/molinillo.glb'

import plantdandeli from '../obj/plantas/plants-dandelion.glb'
import buda from '../obj/construccion/garden_buddha.glb'
import nomo from '../obj/construccion/mesh_garden_gnome.glb'
import tori from '../obj/construccion/japanese_tori_gate.glb'
import nubecumulo from '../obj/nubes/CumulusClouds.glb'
import portalValores from '../obj/construccion/gate_wood.glb'
//import useSound from 'use-sound';
//import forest from '../sound/jardin.mp3';

function Frame() {
  const [sonido] = useState(localStorage.getItem('sonido'));
  
  //const [playP, { stopP }] = useSound(forest);
  const start = ()  => {
    /* carga de sonido */

    if(sonido === "on"){
      //playP()
    }

  }

  useEffect(()=> {

    caches.keys().then((names) => {
      names.forEach((name) => {
        caches.delete(name);
      });
    });
    
    start();
  })



  const cargarObjetos = (tipo1,tipo2, cantidad, p, max, min, x,y,z, escala) => {
    let objetos = []
    for(let i = 1; i <= cantidad; i++){     
      let rot = 180/i+5
      let scala = escala+Math.random() 
      let XX = x + Math.random()
      let ZZ = 1 + Math.floor(Math.random() * (max - min + 1) + min);

      objetos.push(<a-gltf-model static-body id={`arbol_5${i}`} src={tipo1} position={`${XX} ${y} ${ZZ}`} rotation={`0 ${rot} 0`} scale={`${scala} ${scala} ${scala}`}></a-gltf-model>)
      objetos.push(<a-gltf-model id={`hoja_5${i}`}  src={tipo2} position={`${XX} ${y} ${ZZ}`} rotation={`0 ${rot}) 0`} scale={`${scala} ${scala} ${scala}`}></a-gltf-model>)
    }
    return(objetos)

 }
 const portalSeleccion = (ir) => {
  var pos = document.querySelector('#camera').getAttribute('position');
  console.log("Hecho " + pos.x)
  console.log("Hecho " + pos.z)
  console.log("Hecho " + pos.y)
  var position = pos.x+ ' '+ pos.y+ ' '+pos.z 
  localStorage.setItem("position", position);
  //stopP();
  window.location.href=ir;
 }
 

    return (
      
      <Scene id="Scene_1" physics="debug: false;friction:0.1;restitution:0.5" canvas="" inspector="" keyboard-shortcuts="" screenshot="" vr-mode-ui="true" auto-enter-vr="">
        {/*
        <a-entity id="mano_left" hand-controls="left"></a-entity>
        <a-entity id="mano_right" hand-controls="right"></a-entity>
        */}
        



        {/* recursos xrextras-loading */}
        <a-assets>
          <audio id="jardin" crossorigin="anonymous" src="sound/jardin.ogg"  preload='auto'></audio>
          <img id="imagen-pared" src={require('../resources/piedra_muro_1.jpg')} alt='' />
          <img id="cesped" src={require('../resources/cesped.jpg')} alt='' />
          <img id="sky" src={require('../resources/cielo-azul.jpg')} alt='' />
          <img id="camino_piedra" src={require('../resources/piedra_suelo_1.jpg')} alt='' />

        </a-assets>

        <Entity geometry="height: 5;segmentsHeight:30;segmentsRadial:30; primitive:cylinder;" color="black" static-body="shape: cylinder" position="1.9 0 0" rotation="0 -11 0" scale="4.5 1 6.3"></Entity>
        <Entity key="muro_1" position="-15 0 0" rotation="0 0 0">
          {
            /* 
             Arboles del perimetro
             objeto, cantidad, posicion, maximo, minimo, x, y, z
            */
            cargarObjetos(arbol, hojas, 3, 0, 14, -14, 0, 0, -14, 1)
          }
          {
            cargarObjetos(maple_tronco, maple_hojas, 1, 0, 14, -14, 0, 0, -14, -0.1)
          }

          {/* bambu */}
          <a-entity id="bambu_11" gltf-model={bamboo} position="0.5 0.01 -10.4" rotation="0 181 0" scale="1.1 1 1"></a-entity>
          <a-entity id="bambu_12" gltf-model={bamboo} position="0.6 0.01 -13.5" rotation="0 151 0" scale="1 1.1 1"></a-entity>
          <a-entity id="bambu_13" gltf-model={bamboo} position="0.8 0.01 -12.3" rotation="0 181 0" scale="1 1 1.1"></a-entity>
          <a-entity id="bambu_14" gltf-model={bamboo} position="1 0.01 -13.6" rotation="0 151 0" scale="1 1.1 1.1"></a-entity>
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
          {/* muro  */}
          <a-box id="wall_11" color="grey" width="30" height="3" depth="1" position="0 0 0" material="repeat:19 5;color:withe;metalness:0.2;roughness:0.1;src:#imagen-pared" static-body rotation="0 90 0" ></a-box>
        </Entity>
{/* */}
        <Entity id="muro_2" position="15 0 0" rotation="0 0 0">
          {/* Arboles del perimetro  "dynamic-body="mass: 5"*/}
          <a-entity static-body="true" id="arbol_21" gltf-model={arbol} position="-0.67 0 1" rotation="0 0 0" scale="1.0 1.0 1.0"></a-entity>
          <a-entity id="hojas_21" gltf-model={hojas} position="-0.67 0 1" rotation="0 0 0" scale="1.0 1.0 1.0"></a-entity>
          <a-entity static-body="true" id="arbol_22" gltf-model={arbol} position="-0.7 0 4.6" rotation="0 80 0" scale="1.0 1.0 1.0"></a-entity>
          <a-entity id="hojas_22" gltf-model={hojas} position="-0.7 0 4.6" rotation="0 80 0" scale="1.0 1.0 1.0"></a-entity>
          <a-entity static-body="true" id="arbol_23" gltf-model={arbol} position="-0.9 -0.5 8" rotation="0 119 0" scale="1.1 1.1 1.1"></a-entity>
          <a-entity id="hojas_23" gltf-model={hojas} position="-0.9 -0.5 8" rotation="0 119 0" scale="1.1 1.1 1.1"></a-entity>
          <a-entity static-body="true" id="arbol_24" gltf-model={arbol} position="-0.66 -0.1 -6.58" rotation="0 39 0" scale="1.2 1.2 1.2"></a-entity>
          <a-entity id="hojas_24" gltf-model={hojas} position="-0.66 -0.1 -6.58" rotation="0 39 0" scale="1.2 1.2 1.2"></a-entity>
          <a-entity static-body="true" id="arbol_27" gltf-model={arbol} position="-0.7 -0.5 -2.4" rotation="0 15 0" scale="1.6 1.6 1.6"></a-entity>
          <a-entity id="hojas_27" gltf-model={hojas} position="-0.7 -0.5 -2.4" rotation="0 15 0" scale="1.6 1.6 1.6"></a-entity>
          <a-entity static-body="true" id="arbol_28" gltf-model={arbol} position="-1 -0.05 -12.4" rotation="0 181 0" scale="1.2 1.2 1.2"></a-entity>
          <a-entity id="hojas_28" gltf-model={hojas} position="-1 -0.05 -12.4" rotation="0 181 0" scale="1.2 1.2 1.2"></a-entity>



          {/* bambu */}
          <a-entity id="bambu_21" gltf-model={bamboo} position="-0.5 0.01 -10.4" rotation="0 181 0" scale="1.1 1 1"></a-entity>
          <a-entity id="bambu_22" gltf-model={bamboo} position="-0.6 0.01 -13.5" rotation="0 151 0" scale="1 1.1 1"></a-entity>
          <a-entity id="bambu_23" gltf-model={bamboo} position="-0.8 0.01 -12.3" rotation="0 181 0" scale="1 1 1.1"></a-entity>
          <a-entity id="bambu_24" gltf-model={bamboo} position="-1 0.01 -13.6" rotation="0 151 0" scale="1 1.1 1.1"></a-entity>
          <a-entity id="bambu_25" gltf-model={bamboo} position="-0.9 0.01 -14.4" rotation="0 181 0" scale="1.1 1 1"></a-entity>
          <a-entity id="bambu_26" gltf-model={bamboo} position="-0.9 0.01 -9.5" rotation="0 151 0" scale="1 1.1 1"></a-entity>
          <a-entity id="bambu_28" gltf-model={bamboo} position="-0.6 0.0 -1.6" rotation="0 151 0" scale="1 1.1 1.1"></a-entity>
          {/* varias plantas */}
          <a-entity id="varios_21" gltf-model={plantdandeli} position="-5.8 1.7 2.5" rotation="0 152 0" scale="6 6 6" ></a-entity>
          {/* muro  */}
          <a-box id="wall_21" color="grey" width="30" height="3" depth="1" position="0 0 0" material="repeat:19 5;color:withe;metalness:0.2;roughness:0.1;src:#imagen-pared" static-body rotation="0 90 0" ></a-box>
        </Entity>
        <Entity id="muro_3" position="0 0 -15" rotation="0 90 0">
          {/* Arboles del perimetro */}
          <a-entity static-body="true" id="arbol_31" gltf-model={arbol} position="-0.67 0 1" rotation="0 0 0" scale="1 1 1"></a-entity>
          <a-entity id="hojas_31" gltf-model={hojas} position="-0.67 0 1" rotation="0 0 0" scale="1 1 1"></a-entity>
          <a-entity static-body="true" id="arbol_33" gltf-model={arbol} position="-0.9 -0.5 8" rotation="0 119 0" scale="1.1 1. 1.1"></a-entity>
          <a-entity id="hojas_33" gltf-model={hojas} position="-0.9 -0.5 8" rotation="0 119 0" scale="1.1 1. 1.1"></a-entity>
          <a-entity static-body="true" id="arbol_35" gltf-model={arbol} position="-0.6 -0.0 10.4" rotation="0 119 0" scale="1.4 1.4 1.4"></a-entity>
          <a-entity id="hojas_35" gltf-model={hojas} position="-0.6 -0.0 10.4" rotation="0 119 0" scale="1.4 1.4 1.4"></a-entity>
          <a-entity static-body id="arbol_37" gltf-model={arbol} position="-0.7 -0.5 -2.4" rotation="0 15 0" scale="1.6 1.6 1.6"></a-entity>
          <a-entity id="hojas_37" gltf-model={hojas} position="-0.7 -0.5 -2.4" rotation="0 15 0" scale="1.6 1.6 1.6"></a-entity>
          <a-entity static-body="true" id="arbol_38" gltf-model={arbol} position="-1 -0.05 -12.4" rotation="0 181 0" scale="1.2 1.2 1.2"></a-entity>
          <a-entity id="hojas_38" gltf-model={hojas} position="-1 -0.05 -12.4" rotation="0 181 0" scale="1.2 1.2 1.2"></a-entity>


          {/* bambu */}
          <a-entity id="bambu_31" gltf-model={bamboo} position="-0.5 0.01 -10.4" rotation="0 181 0" scale="1.1 1 1"></a-entity>
          <a-entity id="bambu_33" gltf-model={bamboo} position="-0.8 0.01 -12.3" rotation="0 181 0" scale="1 1 1.1"></a-entity>
          <a-entity id="bambu_34" gltf-model={bamboo} position="-1 0.01 -13.6" rotation="0 151 0" scale="1 1.1 1.1"></a-entity>
          <a-entity id="bambu_35" gltf-model={bamboo} position="-0.9 0.01 -14.4" rotation="0 181 0" scale="1.1 1 1"></a-entity>
          <a-entity id="bambu_36" gltf-model={bamboo} position="-0.9 0.01 -9.5" rotation="0 151 0" scale="1 1.1 1"></a-entity>
          <a-entity id="bambu_38" gltf-model={bamboo} position="-0.6 0.0 -1.6" rotation="0 151 0" scale="1 1.1 1.1"></a-entity>
          {/* muro  */}
          <a-box id="wall_21" color="grey" width="30" height="3" depth="1" position="0 0 0" material="repeat:10 2;color:withe;metalness:0.2;roughness:0.1;src:#imagen-pared" static-body rotation="0 90 0" ></a-box>
        </Entity>


        {/* PORTALES */}
        <a-entity id="portalvalores" gltf-model={portalValores} position="8.3 -0.25 -11.6" rotation="0 88 0" scale="0.5 0.5 0.5"></a-entity>
        <Entity
          visible="true"
          id="portalvalores"
          events={{
            click: () => portalSeleccion('valores')
          }}
          position="9.5 2 -11.5"
          rotation="0 -2.9 0"
          width="2"
          height="2"

          material="color:#c6c6c6;opacity: 0.5;" geometry="primitive:plane; radius:10; width: 2; height: 0.6;"
          text={`value:Valorés;wrapCount:20;width: 4;yOffset:-4;color:#F7f7f7;shader: msdf; font:https://juancmacias.github.io/alma-thinking-with-you/public/font/marker/PermanentMarker-Regular-msdf.json;align: center`} />
        
        {/* CARTELES */}
        <Entity
          id="bienvenida"
          sound="src:#jardin; on:click; loop:true; volume:0.75"
          position="0.5 2.9 14.2"
          rotation="-16 0 0"
          width="2"
          height="2"
          material="color:#c6c6c6;opacity: 0.6;" geometry="primitive:plane; radius:0.4; width: 2; height: 2.1;"
          text={`value:¡Hola! Te doy la bienvenida a este viaje que te propongo. Me gustaría que te
          sintieras como en casa. ¡Abre tus sentidos y disfruta de la experiencia!;wrapCount:20;width: 2;yOffset:-4;color:black;shader: msdf; font:https://juancmacias.github.io/alma-thinking-with-you/public/font/normal/normal-msdf.json; align: center`} />
        
        <Entity
          id="titulo_cartel"
          position="-0.37 5.3 15.17"
          rotation="0 0 0"
          width="2"
          height="2"
          material="color:#c6c6c6;opacity: 0;" geometry="primitive:plane; radius:0.4; width: 3; height: 0.6;"
          text={`value:THINKING WITH;wrapCount:20;width: 4;yOffset:-4;color:#0D0D0C; align: center`} />
        <Entity
          id="titulo_you_cartel"
          position="1.25 5.3 15.17"
          rotation="0 0 0"
          width="2"
          height="2"
          material="color:#c6c6c6;opacity: 0;" geometry="primitive:plane; radius:0.4; width: 3; height: 0.6;"
          text={`value:YOU;wrapCount:20;width: 4;yOffset:-4;color:blue; align: center`} />

        <Entity
          id="salida_cartel"
          events={{
            click: () => portalSeleccion('/')
          }}
          position="-1.6 3 14.8"
          rotation="0 -180 0"
          width="2"
          height="2"
          material="color:#14B76E;opacity: 0.5;" geometry="primitive:plane; radius:0.4; width: 2; height: 0.6;"
          text={`value:Salida;wrapCount:20;width: 4;yOffset:-4;color:#F7f7f7;shader: msdf; font:https://juancmacias.github.io/alma-thinking-with-you/public/font/marker/PermanentMarker-Regular-msdf.json;align: center`} />
        {/* cosas varias */}

        <a-entity id="buda" gltf-model={buda} position="-0.5 -0.25 -14" rotation="0 29 0" scale="1 1 1"></a-entity>
        <a-entity id="nomo_1" gltf-model={nomo} position="-14 0.01 -14" rotation="0 29 0" scale="1.2 1.2 1.2"></a-entity>
        <a-entity id="nomo_2" gltf-model={nomo} position="14 0.01 14" rotation="0 -100 0" scale="1.2 1.2 1.2"></a-entity>

        <a-entity id="nomo_4" gltf-model={nomo} position="14 0.01 -14" rotation="0 -29 0" scale="1.2 1.2 1.2"></a-entity>

        {/* ENTRADA */}
        <a-box id="wall_seguro_1" width="30" height="3" depth="0.01" position="0 0 20" material="opacity:0.1" static-body="true" rotation="0 180 0" ></a-box>
        <a-box id="wall_seguro_2" width="10" height="3" depth="0.01" position="15 0 15" material="opacity:0.1" static-body="true" rotation="0 90 0" ></a-box>
        <a-box id="wall_seguro_3" width="10" height="3" depth="0.01" position="-15 0 15" material="opacity:0.1" static-body="true" rotation="0 -90 0" ></a-box>
        <a-box id="wall_tory_1" color="grey" width="13.1" height="3" depth="0.5" position="9.26 0 15" material="repeat:19 5;color:withe;metalness:0.2;roughness:0.1;src:#imagen-pared" static-body rotation="0 180 0" ></a-box>
        <a-box id="wall_tory_2" color="grey" width="13.1" height="3" depth="0.5" position="-9.26 0 15" material="repeat:19 5;color:withe;metalness:0.2;roughness:0.1;src:#imagen-pared" static-body rotation="0 180 0" ></a-box>
        <a-entity id="tori" gltf-model={tori}  position="0 0 15" rotation="0 0 0" scale="0.7 0.7 0.7"></a-entity>
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
        <a-box width="2" height="3" depth="0.5" material="src:#camino_piedra" id="camino_23" position="-2.7 -0.2 -8.5" rotation="90 -52 0"></a-box>
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
        <a-plane id="plano_1" static-body="true" position="0 0 0" rotation="-90 0 0" width="30" height="40" material="src: #cesped; repeat: 100 100" radius="10"></a-plane>
        <a-plane id="plano_2" position="0 -0.5 0" rotation="-90 0 0" width="300" height="400" color="green" radius="10"></a-plane>
        {/* cielo */}
        <a-sky id="cielo" sound="src:#jardin; on:click; loop:true; volume:0.75" color="#87CEEB" material="" geometry="" scale="-1.31 1 1" rotation="0 0 0"></a-sky>
        {/* nubes */}
        <a-entity id="nube_1" gltf-model={nubecumulo} position="-1.2 50 100.5" rotation="0 151 0" scale="6 6 6">
          <a-animation id="animacion_1" attribute="position" dur="300000" from="-1.2 50 100.5" to="-1.2 50 -200.0" repeat="indefinite">
          </a-animation>
        </a-entity>
        <a-entity id="nube_2" gltf-model={nubecumulo} position="-1.2 50 399.5" rotation="0 76 0" scale="10 10 10">
          <a-animation id="animacion_2" attribute="position" dur="300800" from="70 50 399.5" to="40 50 -500.0" repeat="indefinite">
          </a-animation>
        </a-entity>
        {/* cámara */}
        {/*cargarCamara*/}
        <Entity id="camera"  camera kinematic-body="radius:1" universal-controls look-controls position={localStorage.getItem('position') === null ? "0 1.6 19.5" : localStorage.getItem('position')} rotation="16.6 0 0">
          <Entity cursor  position="0 0 -0.5" geometry="primitive:ring;radiusInner:0.01;radiusOuter:0.016" material="opacity:0.5;shader:flat;transparent:false;color:blue" scale="0.5 0.5 0.5"></Entity>

        </Entity>
    </Scene>


    );
  }
  
  export default Frame;