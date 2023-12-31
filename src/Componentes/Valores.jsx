import { Entity, Scene } from 'aframe-react';
import React, { useState } from 'react';
import { urlFont } from '../services/urls';

//import datos from './json/1.json'


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
import treeN from '../obj/sesion2/treeN.glb'
import fontain from '../obj/construccion/fontain_2s.glb'
import chair from '../obj/construccion/parkchair.glb'
import lamp from '../obj/sesion2/japanese_lamp.glb'
import minizen from '../obj/sesion2/mini-garden.glb'
import bonsai from '../obj/sesion3/bonsai.glb'
import sakura from '../obj/sesion2/sakura.glb'
import arrow from '../obj/sesion2/arrow.glb'
import wall from '../obj/sesion2/caminotablas.glb'
import chrysanthemums from '../obj/sesion2/chrysanthemums.glb'
import treetwo from '../obj/sesion2/trees_low_poly.glb'
import gazebo from '../obj/sesion2/gazebo.glb'
import flowers from '../obj/sesion2/flowers.glb'
import flowers2 from '../obj/sesion2/grass_patch.glb'
import thinkito from '../obj/sesion3/thinkito.glb'
import flowerfontain from '../obj/sesion2/flowerfontain.glb'






const Valores = () => {
  const [sonido] = useState(localStorage.getItem('sonido'));
  const [datosU, setDatos] = useState( JSON.parse(localStorage.getItem('datos_libro')))
  console.log("datos "+ datosU)
  const portalSeleccion = (ir) => {
    window.location.href = ir;
  }


  return (

    <Scene  preloader="title: Cargando objetos...;slowLoad:true;" physics="debug: false" canvas="" inspector="" keyboard-shortcuts="" screenshot="" vr-mode-ui="" auto-enter-vr="">
      {/* imagenes */}

      <a-assets>
        <sound id="ambiente" src={require('../obj/sesion2/sound/sound-ambiente.mp3')} alt='' />
        <img id="cesped" src={require('../obj/sesion2/arena3.jpg')} alt='' />
        <img id="sky" src={require('../resources/sky.jpg')} alt='' />
        <a-asset-item id="bamboo" src={bamboo} preload='auto'></a-asset-item>
      </a-assets>

          <Entity
          id={`texto_1`}
          position={`-2 1 7.5`}
          rotation="-0 27 0"
          width="3"
          height="1.7"
          material="color:#3DB4EB;" geometry="primitive:plane; radiusBottom: 1; radiusTop: 0.1; width: 3; height: 1.7;"
          text={`value:${datosU.secciones[0].apartados[0].tituloApartado}\n${datosU.secciones[0].apartados[0].contenidoApartado};wrapCount:25;width: 2;yOffset:-5;color:black;shader: msdf; font:${urlFont}/normal/normal-msdf.json; align: center`} />

          <Entity
          id={`texto_2`}
          position={`-2 1 4.5`}
          rotation="-0 27 0"
          width="3"
          height="1.7"
          material="color:#3DB4EB;" geometry="primitive:plane; radiusBottom: 1; radiusTop: 0.1; width: 3; height: 1.7;"
          text={`value:${datosU.secciones[0].apartados[1].tituloApartado}\n${datosU.secciones[0].apartados[1].contenidoApartado};wrapCount:25;width: 1.5;yOffset:-5;color:black;shader: msdf; font:${urlFont}/normal/normal-msdf.json; align: center`} />
          
          <Entity
          id={`texto_3`}
          position={`-2 1 0.40`}
          rotation="-0 27 0"
          width="3"
          height="1.7"
          material="color:#3DB4EB;" geometry="primitive:plane; radiusBottom: 1; radiusTop: 0.1; width: 3; height: 1.7;"
          text={`value:${datosU.secciones[0].apartados[2].tituloApartado}\n${datosU.secciones[0].apartados[2].contenidoApartado};wrapCount:40;width: 2.5;yOffset:-7;color:black;shader: msdf; font:${urlFont}/normal/normal-msdf.json; align: center`} />
          
          <Entity
          id={`texto_21`}
          position={`2.3 1 7`}
          rotation="-0 -27 0"
          width="3"
          height="1.7"
          material="color:#3DB4EB;" geometry="primitive:plane; radiusBottom: 1; radiusTop: 0.1; width: 3; height: 1.7;"
          text={`value:${datosU.secciones[1].apartados[0].tituloApartado}\n${datosU.secciones[1].apartados[0].contenidoApartado};wrapCount:25;width: 2;yOffset:-5;color:black;shader: msdf; font:${urlFont}/normal/normal-msdf.json; align: center`} />
          
          <Entity
          id={`texto_22`}
          position={`2.3 1 4`}
          rotation="-0 -27 0"
          width="3"
          height="1.7"
          material="color:#3DB4EB;" geometry="primitive:plane; radiusBottom: 1; radiusTop: 0.1; width: 3; height: 1.7;"
          text={`value:${datosU.secciones[1].apartados[1].tituloApartado}\n${datosU.secciones[1].apartados[1].contenidoApartado};wrapCount:25;width: 2;yOffset:-5;color:black;shader: msdf; font:${urlFont}/normal/normal-msdf.json; align: center`} />
          <Entity
          id={`texto_23`}
          position={`11 1 3`}
          rotation="-0 -178 0"
          width="3"
          height="1.7"
          material="color:#3DB4EB;" geometry="primitive:plane; radiusBottom: 1; radiusTop: 0.1; width: 3; height: 1.7;"
          text={`value:${datosU.secciones[1].apartados[2].tituloApartado}\n${datosU.secciones[1].apartados[2].contenidoApartado};wrapCount:25;width: 2;yOffset:-5;color:black;shader: msdf; font:${urlFont}/normal/normal-msdf.json; align: center`} />
          <Entity
          id={`texto_24`}
          position={`11 1 0`}
          rotation="-0 0 0"
          width="3"
          height="1.7"
          material="color:#3DB4EB;" geometry="primitive:plane; radiusBottom: 1; radiusTop: 0.1; width: 3; height: 1.7;"
          text={`value:${datosU.secciones[1].apartados[3].tituloApartado}\n${datosU.secciones[1].apartados[3].contenidoApartado};wrapCount:25;width: 2;yOffset:-5;color:black;shader: msdf; font:${urlFont}/normal/normal-msdf.json; align: center`} />
          <Entity
          id={`texto_25`}
          position={`7.5 1  0`}
          rotation="-0 0 0"
          width="3"
          height="1.7"
          material="color:#3DB4EB;" geometry="primitive:plane; radiusBottom: 1; radiusTop: 0.1; width: 3; height: 1.7;"
          text={`value:${datosU.secciones[1].apartados[4].tituloApartado}\n${datosU.secciones[1].apartados[4].contenidoApartado};wrapCount:25;width: 2;yOffset:-5;color:black;shader: msdf; font:${urlFont}/normal/normal-msdf.json; align: center`} />
          <Entity
          id={`texto_26`}
          position={`4 1 0`}
          rotation="-0 0 0"
          width="3"
          height="1.7"
          material="color:#3DB4EB;" geometry="primitive:plane; radiusBottom: 1; radiusTop: 0.1; width: 3; height: 1.7;"
          text={`value:${datosU.secciones[1].apartados[5].tituloApartado}\n${datosU.secciones[1].apartados[5].contenidoApartado};wrapCount:25;width: 2;yOffset:-5;color:black;shader: msdf; font:${urlFont}/normal/normal-msdf.json; align: center`} />
          <Entity
          id={`texto_27`}
          position={`2.3 1 2`}
          rotation="-0 -27 0"
          width="3"
          height="1.7"
          material="color:#3DB4EB;" geometry="primitive:plane; radiusBottom: 1; radiusTop: 0.1; width: 3; height: 1.7;"
          text={`value:${datosU.secciones[1].apartados[6].tituloApartado}\n${datosU.secciones[1].apartados[6].contenidoApartado};wrapCount:25;width: 2;yOffset:-5;color:black;shader: msdf; font:${urlFont}/normal/normal-msdf.json; align: center`} />
          <Entity
          id={`texto_28`}
          position={`2.3 1 -4.5`}
          rotation="-0 -27 0"
          width="3"
          height="1.7"
          material="color:#3DB4EB;" geometry="primitive:plane; radiusBottom: 1; radiusTop: 0.1; width: 3; height: 1.7;"
          text={`value:${datosU.secciones[1].apartados[7].tituloApartado}\n${datosU.secciones[1].apartados[7].contenidoApartado};wrapCount:25;width: 2;yOffset:-5;color:black;shader: msdf; font:${urlFont}/normal/normal-msdf.json; align: center`} />
          <Entity
          id={`texto_29`}
          position={`0 1 -12`}
          rotation="-0 0 0"
          width="3"
          height="1.7"
          material="color:#3DB4EB;" geometry="primitive:plane; radiusBottom: 1; radiusTop: 0.1; width: 3; height: 1.7;"
          text={`value:${datosU.secciones[1].apartados[8].tituloApartado}\n${datosU.secciones[1].apartados[8].contenidoApartado};wrapCount:25;width: 2;yOffset:-5;color:black;shader: msdf; font:${urlFont}/normal/normal-msdf.json; align: center`} />
          <Entity
          id={`texto_30`}
          position={`-13.4 1.2 1.2`}
          rotation="-0 90 0"
          width="3"
          height="1.7"
          material="color:#3DB4EB;" geometry="primitive:plane; radiusBottom: 1; radiusTop: 0.1; width: 3; height: 1.7;"
          text={`value:${datosU.secciones[1].citas[0].contenidoCita}\n\n${datosU.secciones[1].citas[1].contenidoCita};wrapCount:35;width: 1.9;yOffset:-5;color:black;shader: msdf; font:${urlFont}/normal/normal-msdf.json; align: center`} />
          

      {/* CARTEL SALIDA */}
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
      
      
      
      {/* CAMARA 
      <a-entity position="0 1.608 10.005" camera="active:false;userHeight:1.6"
       wasd-controls cursor-controls collision="objects: .colisionables" data-aframe-inspector-original-camera="" data-aframe-inspector="default-camera"></a-entity>
      */}
      <Entity camera kinematic-body="radius:1" look-controls universal-controls position="0 2 13.15">
        <Entity cursor position="0 0 -0.5" geometry="primitive:ring;radiusInner:0.01;radiusOuter:0.016"
          material="opacity:0.5;shader:flat;transparent:false;color:blue" scale="0.5 0.5 0.5" raycaster ></Entity>
      </Entity>


      {/* VARIOS */}
      <a-sky src="#sky" geometry="" scale="-1.31 1 1" rotation="180 180 180"></a-sky>
      <a-plane static-body="" position="0 0 0" roughness="1.0" anisotropy="16" rotation="-90 0 0" width="30" height="30" material="src: #cesped; repeat: 500 50
        " radius="10"></a-plane>

      {/* CARGAR SONIDO */
        sonido === 'on' ? <a-sound src="#ambiente" volumen="5" autoplay="true" position="-3 1 -4" sound="" loop="true"></a-sound> : ''
      }

      <a-entity id="muro">
        <a-box id="wall1" static-body position="-0.03 1.101 -14.94" rotation="0.115 179.565 -0.115" geometry="width:29.32;height:2.85;depth:0.1" ></a-box>
        <a-box id="wall2" static-body position="-14.614 0.85 -0.142" rotation="0.057295779513082325 90.1262611740785 0.6302535746439055" geometry="width:30.360000000000003;depth:0.1;height:2.99" ></a-box>
        <a-box id="wall3" static-body position="14.757 1.11 0.155" rotation="-1.1459155902616465 90.29814851261774 -0.9167324722093172" geometry="width:29.92;height:2.85;depth:0.1" ></a-box>
        <a-box id="wall4" static-body position="0.106 1.101 15.092" rotation="0.115 179.565 -0.115" geometry="width:29.32;height:2.85;depth:0.1" ></a-box>
        <a-gltf-model id="bamboo4" position="-14.403 1.129 0.461" src="#bamboo" scale="0.196 0.03 -0.275" rotation="0 -89.782486497 0" geometry="height:1.33" ></a-gltf-model>
        <a-box id="puerta1" position="-1.938 0.262 14.737" rotation="1.4896902673401404 0.17188733853924698 -91.15758520531398" gltf-model={door} ></a-box>
        <a-gltf-model id="bamboo2" position="8.526 1.171 14.698" src="#bamboo" scale="0.08 0.03 -0.275" ></a-gltf-model>
        <a-gltf-model id="bamboo3" position="-8.23 1.156 14.639" src="#bamboo" scale="0.082 0.03 -0.275" ></a-gltf-model>
        <a-gltf-model id="bamboo5" position="14.45 1.129 0.461" src="#bamboo" scale="0.196 0.03 -0.275" rotation="0 -89.782 0" geometry="height:1.33" ></a-gltf-model>
        <a-gltf-model id="bamboo6" position="0.558 1.171 -14.358" src="#bamboo" scale="0.197 0.04 -0.275" geometry="width:1.89;height:1.16"></a-gltf-model>
      </a-entity>


      <a-entity id="treerose" position="-12.50 0 0.637">
        <a-entity id="bamboo_1" position="2.087 -0.386 -12.616" rotation="0 45 0" gltf-model={bambo} scale="6.1 5.19 2.82"></a-entity>
        <a-entity id="bamboo_2" position="-0.032 -0.386 -12.59" rotation="0 45 0" gltf-model={bambo} scale="6.1 5.19 2.82"></a-entity>
        <a-entity id="rose1" position="0.909 -0.261 -12.187" scale="0.6799999999999999 0.56 0.16000000000000003" gltf-model={treerose}> </a-entity>
        <a-entity id="roca" position="1.021 -0.766 -12.261" rotation="-17.647 62.051 5.672" gltf-model={roca} scale="0.324 0.547 0.44"></a-entity>
        <a-entity id="rocar" position="-3.081 -0.096 -13.98" rotation="0 45 0" gltf-model={rocar} scale="0.12 0.17 0.12"></a-entity>
        <a-entity id="rose2" position="5.12 -0.176 -7.707" scale="0.68 0.56 0.43" gltf-model={treerose}> </a-entity>
        <a-entity id="bamboo_3" position="8.145 0.019 -11.758" rotation="0 45 0" gltf-model={bambo} scale="6.1 5.19 2.82"></a-entity>
      </a-entity>


      <a-entity id="rose3" position="-5.657 -0.176 -11.171" scale="0.68 0.56 0.16" gltf-model={treerose}></a-entity>

      <a-entity id="house" position="-4.234 0 3.381" rotation="0 88.35009200917294 0" scale="0.8 0.8 0.8"> 
        <a-entity position="2.528 0.213 -9.499" rotation="0 90.413 0" gltf-model={house} scale="0.51 0.61 0.7"></a-entity>
        <a-box src="#cesped" position="4.46 0.025 -9.076" rotation="-89.21 -175.325 85.543" geometry="depth:0.06;height:13.19;width:7.65" ></a-box>
        <a-entity position="11.85 -0.192 -12.274" rotation="0 45 0" gltf-model={bambo} scale="6.1 5.19 2.82"></a-entity>
        <a-entity position="12.03 -0.192 -9.468" rotation="0 45 0" gltf-model={bambo} scale="6.1 5.19 2.82"></a-entity>
        <a-entity position="8.552 0.073 -8.774" rotation="0 -0.516 0" gltf-model={table}></a-entity>
        <a-entity id="rose3" position="11.827 -0.329 -11.171" scale="0.68 0.56 0.16" gltf-model={treerose}> </a-entity>
        <a-entity position="8.549 0.831 -8.847" rotation="0 45 0" gltf-model={tea} ></a-entity>
        <a-box id="lamp1" position="10.536 0.109 -6.128" rotation="0 89.32412026089534 0" gltf-model={lamp} scale="0.03 0.015 0.03" material=""></a-box>
        <a-box id="lamp2" position="10.354 0.109 -12.417" rotation="0 90.1262611740785 0" gltf-model={lamp} scale="0.03 0.015 0.03" material=""></a-box>
      </a-entity>


      <a-entity id="fuente" position="-10.742 0.086 9.503">
        <a-entity static-body position="-0.158 0.024 1.427" shader="standard" scale="0.25 0.25 0.25" gltf-model={fontain}></a-entity>
        <a-entity position="-0.103 0.174 1.573" radius="0.8" height="1.9" color="#D4E6F1 " geometry="radius:1.40;height:0;primitive:cylinder" material="alphaTest:0.11;color:#A3E4D7"></a-entity>
      </a-entity>

      {/* diorema */}
      <a-entity id="diorema" position="0.24 -4.521 -9.946" rotation="0 -91.61595144141863 0" gltf-model={diorema} scale="0.1 0.1 0.1" ></a-entity>


      <a-entity position="-1.3 0 5.149">
        <a-entity id="treeN1" position="11.095 -0.008 5.003" rotation="0 45 0" gltf-model={treeN} scale="0.004 0.004 0.005"></a-entity>
        <a-entity id="chair1" position="12.706 0.088 1.647" scale="0.018 0.018 0.018" gltf-model={chair}> </a-entity>
        <a-entity id="chair2" position="12.062 -0.005 5.018" scale="0.018 0.018 0.018" gltf-model={chair} rotation="0.2291831180523293 -83.3080634120217 0.6875493541569879"> </a-entity>
        <a-entity id="chair3" position="7.095 -0.005 4.491" scale="0.018 0.018 0.018" gltf-model={chair} rotation="0.229 -177.159 0.688"> </a-entity>
        <a-entity id="treeN2" position="7.391 -0.008 4.886" rotation="0 45 0" gltf-model={treeN} scale="0.004 0.004 0.005"></a-entity>
        <a-entity id="treeN3" position="11.095 -0.008 -0.043" rotation="0 45 0" gltf-model={treeN} scale="0.004 0.004 0.005"></a-entity>
        <a-entity id="treeN4" position="7.391 -0.008 1.783" rotation="0 45 0" gltf-model={treeN} scale="0.004 0.004 0.005"></a-entity>
      </a-entity>

      <a-entity position="-7.418 0.012 -11.901" rotation="0 90.871 0" gltf-model={banco}></a-entity>
      <a-entity id="minizen" position="11.38 0 12.44" rotation="0 -87.892 0" gltf-model={minizen} scale="0.23 0.25 0.17"></a-entity>
      <a-entity position="11.441 1.403 12.568" gltf-model={bonsai} scale="1.55 2.13 1.44" rotation="0 -85.14152835644033 0"></a-entity>

      <a-entity id="tree" position="12.09 0 -2.36" gltf-model={sakura} scale="0.23 0.25 0.17"></a-entity>


      <a-entity>
        <a-entity position="14.213 2.417 13.336" rotation="85.199 -71.677 18.908" scale="0.3 0.3 0.3" gltf-model={arrow} animation="property: position; to: 8 1.3 14.2; dir: alternate; dur: 2000; loop: true"></a-entity>
        <a-entity position="-14.118 2.399 10.402" rotation="85.199 -71.677 18.908" scale="0.3 0.3 0.2" gltf-model={arrow} animation="property: position; to: 8 1.3 14.2; dir: alternate; dur: 2000; loop: true"></a-entity>
      </a-entity>


      <a-entity id="wallfontain" position="0 0 1.531" scale="1.3 1.56 1">
        <a-entity id="walk1" position="-2.109 0.012 9.445" rotation="0 178.82 0" gltf-model={wall} scale="1 0.76 0.81"></a-entity>
        <a-entity id="walk2" position="-5.131 0.012 9.398" rotation="0 178.82 0" gltf-model={wall} scale="1 0.76 0.81"></a-entity>
      </a-entity>


      <a-entity id="walkhouse">
        <a-entity id="walkhouse1" position="-7.879 0.012 1.274" rotation="0 178.82 0" gltf-model={wall} scale="1 0.76 1.58"></a-entity>
        <a-entity id="walkhoseu2" position="-4.208 0.012 1.347" rotation="0 178.82 0" gltf-model={wall} scale="1.35 0.76 1.58"></a-entity>
        <a-entity id="walkhoseu3" position="-1.71 0.014 1.347" rotation="0 178.82 0" gltf-model={wall} scale="0.6200000000000001 0.76 1.58"></a-entity>
      </a-entity>

      <a-entity id="walkdiorema1">
        <a-entity id="walkdiorema1" position="0.18 0.012 -3.745" rotation="0 -90.58462741018315 0" gltf-model={wall} scale="1.35 0.76 1.58"></a-entity>
        <a-entity id="walkdiorema2" position="0.18 0.012 0.537" rotation="0 -90.585 0" gltf-model={wall} scale="1.35 0.76 1.58"></a-entity>
        <a-entity id="walkdiorema3" position="0.176 0.012 4.835" rotation="0 -90.585 0" gltf-model={wall} scale="1.35 0.76 1.58"></a-entity>
        <a-entity id="walkdiorema4" position="0.142 0.035 9.111" rotation="0 -90.585 0" gltf-model={wall} scale="1.4 0.76 1.58"></a-entity>
        <a-entity id="walkdiorema5" position="0.1 -0.012 12.91" rotation="0 -90.585 0" gltf-model={wall} scale="1.07 0.76 1.58"></a-entity>
      </a-entity>

      <a-entity position="10.397 1.478 -14.098" rotation="0 179.10660675789532 0" gltf-model={chrysanthemums} scale="1.3801 1.64 0.9"></a-entity>
      <a-entity id="bambo11" position="5.677 -0.221 -13.75" rotation="0 45 0" gltf-model={bambo} scale="6.1 5.19 2.82"></a-entity>
      <a-entity id="bambo12" position="6.884 -0.221 -13.75" rotation="0 45 0" gltf-model={bambo} scale="6.1 5.19 2.82"></a-entity>
      <a-entity id="bambo13" position="4.077 0.072 -13.292" rotation="0 45 0" gltf-model={bambo} scale="6.1 5.19 2.82"></a-entity>

      <a-entity id="treetwo">
        <a-entity id="tre1" position="-2.291 -0.121 -2.814" gltf-model={treetwo} scale="0.005 0.007 0.005" rotation="-2.1199438419840457 -177.6169164905552 0.17188733853924698"></a-entity>
        <a-entity id="tre2" position="1.919 -0.121 -2.891" gltf-model={treetwo} scale="0.005 0.007 0.005"></a-entity>
        <a-entity id="tre3" position="-2.176 -0.121 2.379" gltf-model={treetwo} scale="0.005 0.007 0.005" rotation="0 -178.30446584471218 0"></a-entity>
        <a-entity id="tre4" position="1.919 -0.121 2.507" gltf-model={treetwo} scale="0.005 0.007 0.005" rotation="0 177.21584603396363 0"></a-entity>
        <a-entity id="tre5" position="1.919 -0.121 7.061" gltf-model={treetwo} scale="0.005 0.007 0.005" rotation="0 177.21584603396363 0"></a-entity>
        <a-entity id="tre6" position="-2.176 -0.121 6.606" gltf-model={treetwo} scale="0.005 0.007 0.005" rotation="0 -178.304 0"></a-entity>
        <a-entity id="tre7" position="-8.516 -0.121 12.525" gltf-model={treetwo} scale="0.005 0.007 0.005" rotation="0 -80.386 0"></a-entity>
      </a-entity>


      <a-entity position="10.887 0 1.588" rotation="0 64.34316039319145 0" gltf-model={gazebo} scale="1.26 1.27 1.15"></a-entity>
      <a-entity id="walkgazebo1" position="4.884 0.014 1.347" rotation="0 178.82 0" gltf-model={wall} scale="2.5300000000000002 1.13 1.58"></a-entity>
      <a-entity id="walkgazebo2" position="-7.879 0.012 1.274" rotation="0 178.82 0" gltf-model={wall} scale="1 0.76 1.58"></a-entity>


      <a-entity id="treeN7" position="-11.881 -0.008 7.64" rotation="0 45 0" gltf-model={treeN} scale="0.005 0.005 0.005"></a-entity>
      <a-entity id="treeN8" position="-11.881 -0.008 13.561" rotation="0 45 0" gltf-model={treeN} scale="0.005 0.005 0.005"></a-entity>

      <a-entity id="flower1" position="10.238 0.117 -12.266" gltf-model={flowers}></a-entity>
      <a-entity id="flower2" position="10.764 -0.296 -10.719" gltf-model={flowers} rotation="0 176.414 0"></a-entity>
      <a-entity id="flower3" position="-5.958 -0.364 6.749" rotation="0 70.0154425649866 0" gltf-model={flowers}></a-entity>
      <a-entity id="flower4" position="-5.958 -0.364 -3.176" rotation="0 70.015 0" gltf-model={flowers}></a-entity>
      <a-entity id="flowergrass" position="6.531 0.386 -10.797" gltf-model={flowers2} scale="0.690 0.65 0.76"></a-entity>
      <a-entity position="5.338 1.272 -11.575" gltf-model={flowers2} scale="0.610 0.59 0.51" rotation="0 -43.029130414324825 0"></a-entity>

      {/* <a-entity id="thinkito" gltf-model={thinkito} position="0.535 1.18 -9.082" rotation="7.276 13.078 11.575" scale="0.5 0.5 0.5">
        <a-animation attribute="rotation" dur="7000" to="0 360 0" repeat="infinity"></a-animation>
      </a-entity> */}

        <a-entity id="thinkito" gltf-model={thinkito} position="0 1.18 -9.082" rotation="7.276 13.078 11.575" scale="0.5 0.5 0.5">
          <a-animation attribute="position" dur="7000" to="0 1.18 9.082" repeat="infinite" direction="alternate"></a-animation>
          <a-animation attribute="rotation" dur="7000" to="0 360 0" repeat="infinite"></a-animation>
        </a-entity>


      <a-entity id="wallfontain" position="9.6 0 1.531" scale="1.3 1.56 1">
      <a-entity id="walk1" position="-2.109 0.012 9.445" rotation="0 178.82 0" gltf-model={wall} scale="1 0.76 0.81"></a-entity>
      <a-entity id="walk2" position="-5.131 0.012 9.398" rotation="0 178.82 0" gltf-model={wall} scale="1 0.76 0.81"></a-entity>
      </a-entity>
      <a-entity position="-10.913 0.259 10.224" gltf-model={flowerfontain} scale="0.02 0.02 0.02"></a-entity>
      <a-entity position="-10.913 0.259 11.83" gltf-model={flowerfontain} scale="0.02 0.02 0.02"></a-entity>
      <a-entity id="rocar3" position="-0.264 0.253 5.726" rotation="0 45 0" gltf-model={rocar} scale="0.12 0.17 0.12"></a-entity>
      <a-entity id="rocar4" position="1.871 -0.123 10.575" rotation="0 45 0" gltf-model={rocar} scale="0.12 0.17 0.12"></a-entity>
      <a-entity id="roca4" position="0.348 -0.669 11.901" rotation="-17.647 62.051 5.672" gltf-model={roca} scale="0.324 0.547 0.44"></a-entity>
      

      <a-entity id="despedida sescion2" position="3.627 1.57 14.354" rotation="0 -177.789 0" width="3" height="1.7" material="color:#3DB4EB" geometry="primitive:plane;width:3;height:1.7" text="value:Tómate tu tiempo, reflexiona y comparte (solo si te apetece)\n \n
        - ¿ Conoces los valores de tu empresa?\n \n
        - ¿ Cómo crees que pueden impactar en su cultura?;wrapCount:25;width:2.2;yOffset:-5;color:black;shader:msdf;font:https://juancmacias.github.io/alma-thinking-with-you/public/font/normal/normal-msdf.json;align:center" scale="0.58 0.88 0.63">
      </a-entity>
        
     

       
    </Scene >
  )
}
export default Valores