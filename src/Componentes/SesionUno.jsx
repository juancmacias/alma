import { Entity, Scene } from 'aframe-react';
import React, { useState, useEffect } from 'react';
import { urlFont, urlApi } from './../services/urls';
//import Axios from 'axios';
//import DiaryVR from './DiaryVR';
//import DiaryContent from './DiaryContent';
//import ApiRequest from './ApiRequest';


import bamboo from '../obj/plantas/bamboo.glb';
import arbre from '../obj/construccion/Section1/pink_tree.glb';
import fuente from '../obj/construccion/Section1/zsolnay_fountain.glb';
//import planta from '../obj/construccion/Section1/Bonsai.glb';
import arbol from '../obj/plantas/tronco.glb'
import hojas from '../obj/plantas/hojas.glb'
import Rampamodel from '../obj/construccion/Section1/Rampa.glb';
import Puentemodel from '../obj/construccion/Section1/bridge.glb';
import Rampa from './Rampa';
import Puente from './Puente';
import cascada from '../obj/construccion/Section1/cascada.glb';
import bamboo1 from '../obj/construccion/Section1/bamboo1.glb';
import madera from '../obj/construccion/Section1/madera.glb';
import japanese1 from '../obj/construccion/Section1/japanese_toro.glb';
//import sand from '../obj/construccion/Section1/sand_stone.glb';





function SesionUno() {
  const [diaryText, setDiaryText] = useState([]);
  const requestOptionsInfo = { method: 'GET', redirect: 'manual' };


  const recibeinfo = () => {
    console.log("inicio llamada");
    fetch(urlApi+"/escena/3", requestOptionsInfo)
      .then((response) => response.text())
      .then((result) => {
        setDiaryText(result);
        console.log("Devuelto " + diaryText);
      })
      .catch((error) => {
        console.log('error', error);
      });
  };



  useEffect(() => {
    //recibeinfo()


  });
  const [sonido] = useState(localStorage.getItem('sonido'));
  const portalSeleccion = (ir) => {
    window.location.href=ir;
   }
  return (
    <Scene  preloader="title: Cargando objetos...;slowLoad:true;" physics="debug: false" canvas="" inspector="" keyboard-shortcuts="" screenshot="" vr-mode-ui="" auto-enter-vr="" frustum-culling>
      {/* recursos */}
      <a-assets>
        <img id="imagen-pared" src={require('../resources/piedra_muro.jpg')} alt='' />
        <img id="Sand" src={require('../resources/Sesionuna/Sand.jpg')} alt='' />
        <img id="Sand1" src={require('../resources/Sesionuna/Sand1.jpg')} alt='' />
        <img id="sky" src={require('../resources/cielo-azul.jpg')} alt='' />
        <a-asset-item id="japones-obj" src={require('../obj/construccion/Section1/japones_pond/Pond.obj')}></a-asset-item>
        <a-asset-item id="japones-mtl" src={require('../obj/construccion/Section1/japones_pond/Pond.mtl')}></a-asset-item>
      </a-assets>
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
        
      <Entity
        id="muro-entrada"
        position="0 0 15"
        scale="1 2 0.1"
        static-body
        material="color: #888"
      />

      {/* muro 1 */}
      <Entity id="muro_1" position="-15 0 0" rotation="0 0 0">
        <a-box
          id="wall_11"
          color="#D2B48C"
          width="30"
          height="3"
          depth="1"
          position="0 0 0"
          material="repeat: 19 5; color: white; metalness: 0.2; roughness: 0.1; src: #imagen-pared"
          static-body
          rotation="0 90 0"
        ></a-box>
        <a-entity static-body gltf-model={arbre} position="0.6 0 7.373" scale="1 0.8 1"></a-entity>
        <a-entity static-body gltf-model={arbre} position="1.394 -0.037 -14.37" rotation="0 80 0" scale="0.6 0.76 0.52"></a-entity>

        <a-entity static-body gltf-model={hojas} position="0.53 0 1" scale="1 1.23 1"></a-entity>
        <a-entity static-body gltf-model={arbol} position="0.53 0 1" scale="1 1.23 1"></a-entity>
        <a-entity static-body gltf-model={arbol} position="0.7 0 4.6" rotation="0 80 0" scale="1 1.23 1"></a-entity>
        <a-entity static-body gltf-model={hojas} position="0.7 0 4.6" rotation="0 80 0" scale="1.0 1.23 1.0"></a-entity>
        <a-entity static-body gltf-model={arbol} position="0.66 -0.1 -6.58" rotation="0 39 0" scale="1.2 1.22 1.2"></a-entity>
        <a-entity static-body gltf-model={hojas} position="0.66 -0.1 -6.58" rotation="0 39 0" scale="1.2 1.22 1.2"></a-entity>
      </Entity>
      {/* muro 2 */}
      <Entity id="muro_2" position="0 0 -15" rotation="0 90 0">
        <a-box
          id="wall_12"
          color="#D2B48C"
          width="30"
          height="3"
          depth="1"
          position="0 0 0"
          material="repeat: 19 5; color: white; metalness: 0.2; roughness: 0.1; src: #imagen-pared"
          static-body
          rotation="0 90 0"></a-box>
        <a-entity static-body gltf-model={hojas} position="-8.833 -0.291 13.418" scale="1 1.23 1"></a-entity>
        <a-entity static-body gltf-model={arbol} position="-8.833 -0.291 13.418" scale="1 1.23 1"></a-entity>
        <a-entity static-body gltf-model={hojas} position="-3.539 0.073 0.75" rotation="0 80 0" scale="1 1.23 1"></a-entity>
        <a-entity static-body gltf-model={hojas} position="0.57 0.073 0.75" scale="1 1.23 1"></a-entity>
        <a-entity static-body gltf-model={arbol} position="-14.665 0.248 13.483" scale="1 1.23 1"></a-entity>
        <a-entity static-body gltf-model={hojas} position="-14.297 1.352 13.506" scale="1 1.23 1"></a-entity>
        <a-entity static-body gltf-model={hojas} position="-0.782 0.151 -5.943" rotation="0 39 0" scale="1.2 1.22 1.2"></a-entity>
        <a-entity static-body gltf-model={arbol} position="-0.752 0 -2.559" rotation="0 80 0" scale="1 1.23 1"></a-entity>
        <a-entity static-body gltf-model={arbol} position="0.66 -0.1 -8.366" rotation="0 -90 0" scale="0.5 0.5 0.5"></a-entity>
        <a-entity static-body gltf-model={hojas} position="0.66 -0.1 -8.366" rotation="0 39 0" scale="1.2 1.22 1.2"></a-entity>
        <a-entity static-body gltf-model={arbol} position="0 0 1" scale="1 1.23 1"></a-entity>

        <a-entity id="bambu_1" gltf-model={bamboo} position="-4.564 0.01 -7.909" rotation="0 181 0" scale="7.534 7.597 6.335"></a-entity>
        <a-entity id="bambu_3" gltf-model={bamboo} position="0 0 0" rotation="4.57 120 2.33" scale="1.17 -0.96  1.15"></a-entity>


      </Entity>
      {/* muro 3 */}
      <Entity id="muro_3" position="15 0 0" rotation="0 0 0">
        <a-box
          id="wall_13"
          color="#D2B48C"
          width="30"
          height="3"
          depth="1"
          position="0 0 0"
          material="repeat: 19 5; color: white; metalness: 0.2; roughness: 0.1; src: #imagen-pared"
          static-body
          rotation="0 90 0"></a-box>
        <a-entity id="bambu_1" gltf-model={bamboo} position="-4.759 0.01 -7.533" rotation="0 181 0" scale="5.839 8.489 5.662"></a-entity>
        <a-entity id="bambu_1" gltf-model={bamboo} position="-4.564 0.01 -7.909" rotation="0 181 0" scale="7.534 7.597 6.335"></a-entity>
        <a-entity id="bambu_3" gltf-model={bamboo} position="-6.47 0.01 -10.837" rotation="0 181 0" scale="5.18 6.14 5.02"></a-entity>

      </Entity>
      {/* muro 4 */}
      <Entity id="muro_4" position="0 0 15" rotation="0 90 0">
        {/* Muro izquierdo (sin puerta) */}
        <a-box id="wall_14_left"
          color="#D2B48C"
          width="15"
          height="3"
          depth="1"
          position="0.584 0 -6.854"
          material="repeat:19 5;metalness:0.2;roughness:0.1;src:#imagen-pared"
          static-body
          rotation="0 90 0"></a-box>

        <a-box id="wall_15_left" color="#D2B48C" width="15" height="3" depth="1" position="0.584 0.2 0.911" material="repeat:19 5;metalness:0.2;roughness:0.1;src:imagen-pared" static-body="sphereRadius:NaN" rotation="0 90 0" geometry=""></a-box>

        {/* Apertura para la puerta */}
        <a-box
          id="doorway"
          color="transparent"
          width="15"
          height="3"
          depth="1"
          position="0 0 0"
          material="color: transparent; opacity: 0;"
          rotation="0 90 0"
          static-body></a-box>

   
      </Entity>
      {/* Diario virtual */}
      <a-plane
        width="4.2"
        height="6"
        position="0 0 -0.01"
        color="#000"
        opacity="0"></a-plane>
      <a-entity id="agua" position="7.68 0.2 2.545" ocean="depth:30" material="color:#3DB4EB;opacity:0.55;roughness:0.1" rotation="90 0 0" scale="1 0.746 1"></a-entity>
      {/* Rampa */}
      <a-entity id="rampa" gltf-model="/static/media/Rampa.9f216f7ec4967a1ca206.glb" position="-14.858 4.378 -0.628" rotation="0 120 0" collision="type: dynamic; radius: 0.1"></a-entity>
  
      {/* Plano equilátero */}
      <a-plane id="plato-arena" position="-11.22 0.751 -10.451" rotation="-90.012 3.151 0" width="6" height="5" material="color:#8B4513;roughness:0.9;metalness:0.1" geometry="depth:0.3;"></a-plane>

      {/* Arena blanca en el centro del plano*/}
      <a-plane position="-2.995 0.1 0.105" rotation="-90 0 0" width="5" height="5" color="#green" geometry="" material=""></a-plane>
      <a-entity id="bambu_5" gltf-model={bamboo} position="-6.47 0.46 -10.837" rotation="0 181 0" scale="7.135 8.155 6.915"></a-entity>
      {/* cascada */}
      <a-entity id="cascada"  gltf-model={cascada} position="13.39 4 -14.58" rotation="3.7815214478634336 -44.919891138256546 2.6929016371148693" scale="0.5 0.5 0.5"></a-entity>
      <a-entity id="bamboo"   gltf-model={bamboo} position="6.08 0.052 -14.32" rotation="0 180 0" scale="0.15 0.15 0.15"></a-entity>
      <a-entity id="pillar-1" gltf-model={japanese1} position="-12.71 1.699 -6.069" rotation="0 90 0" scale="-1.175 0.778 -1.052"></a-entity>
      <a-entity id="pillar-2" gltf-model={japanese1} position="1 1 1" rotation="0 90 0" scale="-1.175 0.778 -1.052"></a-entity>
      <a-entity id="pillar-3" gltf-model={japanese1} position="1 2 1" rotation="0 90 0" scale="-1.175 0.778 -1.052"></a-entity>
      <a-entity id="pillar-4" gltf-model={japanese1} position="1 1 1.5" rotation="0 90 0" scale="-1.175 0.778 -1.052"></a-entity>
      <a-entity id="pillar-5" gltf-model={japanese1} position="2 1 -10.281" rotation="0 90 0" scale="-1.175 0.778 -1.052"></a-entity>
      <a-entity id="pillar-6" gltf-model={japanese1} position="13.631 1 3.862" rotation="0 90 0" scale="-1.175 0.778 -1.052"></a-entity>
      <a-entity id="pillar_7" gltf-model={japanese1} position="-9.853 1 8.583" rotation="0 90 0" scale="-1.175 0.778 -1.052"></a-entity>
      {/* Piedras blancas */}
      <a-sphere id="piedra-1" radius="0.5" position="-3.982 1.977 -12.403" material="color:gray" geometry="" scale="1 0.85 1.619" rotation="0 90 0"></a-sphere>
      <a-sphere id="piedra-4" radius="1" position="-4.208 1.317 -12.539" material="color:gray" scale="1 0.469 1.46" geometry="" rotation="0 90 0"></a-sphere>
      <a-sphere id="piedra-3" radius="1.5" position="-4.748 0.45 -12.68" material="color:gray" geometry="" scale="1 0.405 1.455" rotation="0 90 0"></a-sphere>

      {/* Piedras negras */}
      <a-sphere id="piedra-2" radius="0.5" position="-11.608 0.737 10.872" material="color:black" geometry="" scale="3.535 1.145 6.681" rotation="0 39.018 0"></a-sphere>
      <a-sphere id="piedra-6" radius="0.5" position="-11.515 1.568 11.153" material="color:black" geometry="" scale="1.324 2.367 4.806" rotation="0.63 41.597 93.335"></a-sphere>
      <a-sphere id="piedra-5" radius="0.6" position="-11.436 2.46 11.186" material="color:black" geometry="" scale="1.283 0.748 3.207" rotation="0 45 0"></a-sphere>
      <a-sphere id="piedra-7" radius="0.5" position="-11.563 3.116 10.985" material="color:black" scale="1 0.85 1.938" rotation="0 45 0"></a-sphere>


      {/* Árboles o plantas */}
      <a-entity id="bambu_1" gltf-model="/static/media/bamboo.555a25ac28b63a969b38.glb" position="-7.899 0.313 -11.587" rotation="0.115 -160.142 -7.162" scale="10.201 8.855 -8.818"></a-entity>
      <a-entity id="bambu_2" gltf-model={bamboo} position="0 0.01 -10.293" rotation="0 151 0" scale="5.18 6.14 5.02"></a-entity>
      <a-entity id="bambu_3" gltf-model={bamboo} position="-9.248 0.01 -9.104" rotation="0 181 0" scale="5.18 6.14 5.02"></a-entity>
      <a-entity id="bambu_4" gltf-model={bamboo} position="-8.023 0.01 -13.874" rotation="0 151 0" scale="13.177 9.496 3.309"></a-entity>
      <a-entity id="bambu_5" gltf-model={bamboo}position="5.082 -2.332 -7.886" rotation="0 181 0" scale="7.135 8.155 6.915"></a-entity>

     <a-entity 
              id="fuente"
               position="0.32 1.843 2.214" 
               rotation="0 181 0"
               scale="1 1 1 "
  ></a-entity>
      <a-plane position="0 0 0" rotation="-90 0 0" width="5" height="5" color="#fff"></a-plane>
      <a-plane position="1 0 1" rotation="-90 0 0" width="5" height="5" color="#green"></a-plane>
      <a-plane position="3 0.1 3" rotation="-90 0 0" width="5" height="5" color="#000"></a-plane>

      {/*piedras grises*/}

      <a-sphere id="piedra-8" radius="0.5" position="7.802 0.327 -9.366" material="color:gray" geometry="" scale="0.993 0.741 1.458" rotation="0 90 0"></a-sphere>
      <a-sphere id="piedra-9" radius="0.5" position="3 0.526 -8.177" material="color:gray" geometry="" scale="1 0.85 1.619" rotation="0 90 0"></a-sphere>
      <a-sphere id="piedra-10" radius="0.5" position="5.171 0.216 -9.813" material="color:gray" geometry="" scale="1 0.85 1.619" rotation="0 90 0"></a-sphere>
      <a-sphere id="piedra-11" radius="0.5" position="9.253 0.521 -8.223" material="color:gray" geometry="" scale="0.696 1.197 2.578" rotation="0 45 90"></a-sphere>
      <a-sphere id="piedra-12" radius="0.5" position="6.711 0.3 -9.89" material="color:gray" geometry="" scale="1 0.672 1.619" rotation="-5.329 -117.227 -0.115"></a-sphere>
    
     
      {/* Luces */}
      <a-light type="ambient" color="#888" intensity="0.5"></a-light>
      <a-light type="directional" position="-1 1 0"></a-light>
      {/* Suelo */}
      <a-plane
        id="suelo-japones"
        position="0 0.12 0"
        rotation="-90 0 0"
        width="30"
        height="30"
        material="src: #Sand; repeat: 100 100"
        static-body></a-plane>
      <a-plane id="agujero" position="-3.8 3.87 8.7" width="10" height="10" material="color:transparent;opacity:0" static-body="sphereRadius:NaN" geometry="" rotation="90 0 0" scale="0.277 0.436 1"></a-plane>
      {/* Paredes transparentes alrededor del agua */}
      {/* Pared transparente en el lado izquierdo */}
      <a-box id="pared-izquierda" position="-5.421 -0.104 -10.531" width="0.2" height="2" depth="20" material="color:transparent;opacity:0.5" static-body="sphereRadius:NaN" scale="1 1 0.332" geometry="" rotation="0 90 0" visible="false"></a-box>
      <a-box id="pared-izquierda" position="-10.708 0.397 9.323" width="0.2" height="2" depth="20" material="color:transparent;opacity:0.5" static-body="sphereRadius:NaN" scale="0.724 1 0.589" geometry="" rotation="0 45 0" visible="false"></a-box>
      <a-box id="pared-izquierda-2" position="-0.655 -0.004 -9.266" width="0.2" height="2" depth="20" material="opacity:0.5;color:transparent" static-body="sphereRadius:NaN" scale="0.724 1 0.243" rotation="0 45 0" geometry="" visible="false"></a-box>
      <a-box id="izquierda-2" position="12.559 -0.004 -5.475" width="0.2" height="2" depth="20" material="opacity:0.5;color:transparent" static-body="sphereRadius:NaN" scale="0.724 1 0.243" rotation="0 45 0" visible="false"></a-box>
      {/* Pared transparente en el lado derecho */}
      <a-box id="pared-derecha" position="-14 0.5 -2.0" width="20" height="2" depth="0.2" material="color:transparent;opacity:0.5" static-body="sphereRadius:NaN" rotation="0 90 0" scale="0.803 1.249 0.723" geometry="" visible="false"></a-box>
      <a-box id="pared-derecha-2" position="12.5 0.5 -0.7" width="20" height="2" depth="0.2" material="color:transparent;opacity:0.5" static-body="sphereRadius:NaN" rotation="0 90 0" scale="0.803 1.249 0.723" geometry="" visible="false"></a-box>
      {/* Pared transparente en la parte frontal */}
      <a-box id="pared-frontal" position="7.221 0.067 -7.209" width="20" height="2" depth="0.2" material="color:transparent;opacity:0.5" static-body="sphereRadius:NaN" geometry="" scale="0.623 1.058 0.306" rotation="0 -1.432 0" visible="false"></a-box>
      {/* Pared transparente en la parte trasera */}
      <a-box id="pared-trasera" position="-11.78 0.332 -8.076" width="20" height="2" depth="0.2" material="color:transparent;opacity:0.5" static-body="sphereRadius:NaN" geometry="" scale="0.331 0.81 1.064" visible="false"></a-box>
      <a-plane id="agua" width="20" height="20" material="color:blue;opacity:0.7" static-body="sphereRadius:NaN" collision-filter="group: agua; collidesWith: nada" geometry="" rotation="90 0 0" visible="false"></a-plane>
      {/*  (pantallas) */}
      {/* cielo */}
      <a-sky src="#sky" material="" geometry="" scale="-1.31 1 1" rotation="0 0 0"></a-sky>
      {/* CAMARA */}
      <Entity camera kinematic-body="radius:1" look-controls universal-controls position="0 1.6 13.15">
      <Entity cursor position="0 0 -0.5" geometry="primitive:ring;radiusInner:0.01;radiusOuter:0.016" material="opacity:0.5;shader:flat;transparent:false;color:blue" scale="0.8 0.8 0.8" raycaster ></Entity>
      </Entity>
      <a-sphere id="piedra-2" radius="0.5" position="-11.608 0.737 10.872" material="color:black" scale="3.535 1.145 6.681" rotation="0 39.018 0"></a-sphere>
      <a-sphere id="piedra-6" radius="0.5" position="-11.515 1.568 11.153" material="color:black"  scale="1.324 2.367 4.806" rotation="0.63 41.597 93.335"></a-sphere>
      <a-entity id="bambu_5"  radius="0.5" position="-6.47 0.46 -10.837" rotation="0 181 0" scale="7.135 8.155 6.915"></a-entity>
      <a-sphere id="piedra-7" radius="0.5" position="-11.563 3.116 10.985" material="color:black" scale="1 0.85 1.938" rotation="0 45 0"></a-sphere>
    </Scene>
  );
}

export default SesionUno;
