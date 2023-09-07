import {Entity, Scene} from 'aframe-react';
import React, {useState, useEffect} from 'react';
import suelo from './json/camino.json'
import { urlFont } from './../services/urls';

/* precargar los objetos en 3d */
import bamboo from '../obj/plantas/bamboo.glb'
import arbol from '../obj/plantas/tronco.glb'
import hojas from '../obj/plantas/hojas.glb'
import maple_tronco from '../obj/plantas/maple_tronco.glb'
import maple_hojas from '../obj/plantas/maple_hojas.glb'
import molinillo from '../obj/plantas/molinillo.glb'
import tumbona from '../obj/props/tumbona.glb'
import atomico from '../obj/thinkito/thinkito_version.glb'
import plantdandeli from '../obj/plantas/plants-dandelion.glb'
import buda from '../obj/construccion/garden_buddha.glb'
import mono from '../obj/construccion/mesh_garden_gnome.glb'
import tori from '../obj/construccion/japanese_tori_gate.glb'
import nubecumulo from '../obj/nubes/CumulusClouds.glb'
import portalValores from '../obj/construccion/gate_wood.glb'


function Frame() {
  const [sonido] = useState(localStorage.getItem('sonido'));
  const start = () => {
    /* carga de sonido */

    if (sonido === "on") {
      //playP()
    }

  }

  useEffect(() => {
    start();
  })
  const cargarObjetos = (tipo1, tipo2, cantidad, p, max, min, x, y, z, escala) => {
    let objetos = []
    for (let i = 1; i <= cantidad; i++) {
      let rot = 180 / i + 5
      let scala = escala + Math.random()
      let XX = x + Math.random()
      let ZZ = 1 + Math.floor(Math.random() * (max - min + 1) + min);
      objetos.push(<a-gltf-model key={`1${i}`} static-body id={`arbol_5${i}`} src={tipo1} position={`${XX} ${y} ${ZZ}`} rotation={`0 ${rot} 0`} scale={`${scala} ${scala} ${scala}`}></a-gltf-model>)
      objetos.push(<a-gltf-model key={`2${i}`} id={`hoja_5${i}`} src={tipo2} position={`${XX} ${y} ${ZZ}`} rotation={`0 ${rot}) 0`} scale={`${scala} ${scala} ${scala}`}></a-gltf-model>)
    }
    return (objetos)
  }
  const portalSeleccion = (ir) => {
    var pos = document.querySelector('#cameraRig').getAttribute('position');
    var position = pos.x + ' ' + pos.y + ' ' + pos.z
    localStorage.setItem("position", position);
    //stopP();
    window.location.href = ir;
  }


  return (

    <Scene preloader="title: Cargando objetos...;slowLoad:true;" id="Scene_1" physics="friction:10;restitution:10" canvas="" inspector="" keyboard-shortcuts="" screenshot="" vr-mode-ui="true" auto-enter-vr="">


      {/* recursos xrextras-loading */}
      <a-assets>
        <sound id="jardin" src="sound/jardin.ogg"></sound>
        <img id="imagen-pared" src={require('../resources/piedra_muro_1.jpg')} alt='' />
        <img id="cesped" src={require('../resources/cesped.jpg')} alt='' />
        <img id="sky" src={require('../resources/cielo-azul.jpg')} alt='' />
        <img id="camino_piedra" src={require('../resources/piedra_suelo_1.jpg')} alt='' />
        <img id="suelo-seco" src={require('../resources/suelo-seco.jpg')} alt='' />
        <a-asset-item id="plantdandeli" src={plantdandeli} preload='auto'></a-asset-item>
        <a-asset-item id="tori" src={tori} preload='auto'></a-asset-item>
        <a-asset-item id="buda" src={buda} preload='auto'></a-asset-item>
        <a-asset-item id="mono" src={mono} preload='auto'></a-asset-item>
        <a-asset-item id="nube" src={nubecumulo} preload='auto'></a-asset-item>
        <a-asset-item id="arbol" src={arbol} preload='auto'></a-asset-item>
        <a-asset-item id="hojas" src={hojas} preload='auto'></a-asset-item>
        <a-asset-item id="maple_tronco" src={maple_tronco} preload='auto'></a-asset-item>
        <a-asset-item id="maple_hojas" src={maple_hojas} preload='auto'></a-asset-item>
        <a-asset-item id="molinillo" src={molinillo} preload='auto'></a-asset-item>
        <a-asset-item id="bambu" src={bamboo} preload='auto'></a-asset-item>
        <a-asset-item id="tumbona" src={tumbona} preload='auto'></a-asset-item>
        <a-asset-item id="atomico" src={atomico} preload='auto'></a-asset-item>

      </a-assets>

      {/* CARGAR SONIDO */
        sonido === 'on' ? <a-sound src="#jardin" volumen="7" autoplay="true" position="-3 1 -4" sound="" loop="true"></a-sound> : ''
      }


      {/* OBJETOS ANIMADOS */}
      <Entity geometry="height: 3;segmentsHeight:30;segmentsRadial:30; primitive:cylinder; buffer: false" material="repeat:19 5;color:withe;metalness:0.2;roughness:0.1;src:#imagen-pared" static-body="shape: cylinder" position="1.9 0 0" rotation="0 -11 0" scale="4.5 1 6.3" shadow>
        <a-entity  id="atomico" gltf-model={atomico}  position="0 3 0" rotation="0 0 0" scale="0.3 1.3 0.3" shadow>
          <a-animation id="animacion_3" attribute="rotation" dur="17000" from="0 0 0 " to="0 360 0" repeat="indefinite">
          </a-animation>
          <a-animation id="animacion_4" attribute="position" dur="1000" from="0 3 0 " to="0 3.01 0" repeat="indefinite">
          </a-animation>

        </a-entity>
      </Entity>

      <Entity key="1" id="muro_1" position="-15 0 0" rotation="0 0 0">
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
        <a-gltf-model id="bambu_11" src="#bambu" position="0.5 0.01 -10.4" rotation="0 181 0" scale="1.1 1 1"></a-gltf-model>
        <a-gltf-model id="bambu_12" src="#bambu" position="0.6 0.01 -13.5" rotation="0 151 0" scale="1 1.1 1"></a-gltf-model>
        <a-gltf-model id="bambu_13" src="#bambu" position="0.8 0.01 -12.3" rotation="0 181 0" scale="1 1 1.1"></a-gltf-model>
        <a-gltf-model id="bambu_14" src="#bambu" position="1 0.01 -13.6" rotation="0 151 0" scale="1 1.1 1.1"></a-gltf-model>
        <a-gltf-model id="bambu_16" src="#bambu" position="0.9 0.01 -9.5" rotation="0 151 0" scale="1 1.1 1"></a-gltf-model>
        <a-gltf-model id="bambu_17" src="#bambu" position="0.7 0.0 -7.3" rotation="0 181 0" scale="1 1 1.1"></a-gltf-model>
        <a-gltf-model id="bambu_18" src="#bambu" position="0.6 0.0 -1.6" rotation="0 151 0" scale="1 1.1 1.1"></a-gltf-model>
        {/* varias plantas */}
        <a-gltf-model id="varios_11" src="#molinillo" position="0.61 0.0 -1.6" rotation="0 152 0" scale="1 1.1 1.1"></a-gltf-model>
        <a-gltf-model id="varios_12" src="#molinillo" position="0.72 0.0 -1.5" rotation="0 151 0" scale="1 1.1 1.1"></a-gltf-model>
        <a-gltf-model id="varios_13" src="#molinillo" position="0.53 0.0 -1.7" rotation="0 155 0" scale="1 1.1 1.1"></a-gltf-model>
        <a-gltf-model id="varios_14" src="#molinillo" position="0.84 0.0 -1.55" rotation="0 154 0" scale="1 1.1 1.1"></a-gltf-model>
        <a-gltf-model id="varios_15" src="#molinillo" position="0.75 0.0 -1.6" rotation="0 156 0" scale="1 1.1 1.1"></a-gltf-model>
        <a-gltf-model id="varios_16" src="#molinillo" position="0.81 0.0 -1.5" rotation="0 153 0" scale="1 1.1 1.1"></a-gltf-model>
        <a-gltf-model id="varios_17" src="#molinillo" position="0.92 0.0 -1.7" rotation="0 151 0" scale="1 1.1 1.1"></a-gltf-model>
        <a-gltf-model id="varios_18" src="#molinillo" position="0.62 0.0 -1.55" rotation="0 151 0" scale="1 1.1 1.1"></a-gltf-model>
        {/* muro  */}
        <a-box id="wall_11" color="grey" width="30" height="3" depth="1" position="0 0 0" material="repeat:19 5;color:withe;metalness:0.2;roughness:0.1;src:#imagen-pared" static-body rotation="0 90 0" ></a-box>
      </Entity>

      <Entity id="muro_2" position="15 0 0" rotation="0 0 0">
        {/* Arboles del perimetro  "dynamic-body="mass: 5"*/}
        <a-gltf-model static-body="true" id="arbol_21" src="#arbol" position="-0.67 0 1" rotation="0 0 0" scale="1.0 1.0 1.0"></a-gltf-model>
        <a-gltf-model id="hojas_21" src="#hojas" position="-0.67 0 1" rotation="0 0 0" scale="1.0 1.0 1.0"></a-gltf-model>
        <a-gltf-model static-body="true" id="arbol_22" src="#arbol" position="-0.7 0 4.6" rotation="0 80 0" scale="1.0 1.0 1.0"></a-gltf-model>
        <a-gltf-model id="hojas_22" src="#hojas" position="-0.7 0 4.6" rotation="0 80 0" scale="1.0 1.0 1.0"></a-gltf-model>
        <a-gltf-model static-body="true" id="arbol_23" src="#arbol" position="-0.9 -0.5 8" rotation="0 119 0" scale="1.1 1.1 1.1"></a-gltf-model>
        <a-gltf-model id="hojas_23" src="#hojas" position="-0.9 -0.5 8" rotation="0 119 0" scale="1.1 1.1 1.1"></a-gltf-model>
        <a-gltf-model static-body="true" id="arbol_24" src="#arbol" position="-0.66 -0.1 -6.58" rotation="0 39 0" scale="1.2 1.2 1.2"></a-gltf-model>
        <a-gltf-model id="hojas_24" src="#hojas" position="-0.66 -0.1 -6.58" rotation="0 39 0" scale="1.2 1.2 1.2"></a-gltf-model>
        <a-gltf-model static-body="true" id="arbol_27" src="#arbol" position="-0.7 -0.5 -2.4" rotation="0 15 0" scale="1.6 1.6 1.6"></a-gltf-model>
        <a-gltf-model id="hojas_27" src="#hojas" position="-0.7 -0.5 -2.4" rotation="0 15 0" scale="1.6 1.6 1.6"></a-gltf-model>
        <a-gltf-model static-body="true" id="arbol_28" src="#arbol" position="-1 -0.05 -12.4" rotation="0 181 0" scale="1.2 1.2 1.2"></a-gltf-model>
        <a-gltf-model id="hojas_28" src="#hojas" position="-1 -0.05 -12.4" rotation="0 181 0" scale="1.2 1.2 1.2"></a-gltf-model>



        {/* bambu */}
        <a-gltf-model id="bambu_21" src="#bambu" position="-0.5 0.01 -10.4" rotation="0 181 0" scale="1.1 1 1"></a-gltf-model>
        <a-gltf-model id="bambu_22" src="#bambu" position="-0.6 0.01 -13.5" rotation="0 151 0" scale="1 1.1 1"></a-gltf-model>
        <a-gltf-model id="bambu_23" src="#bambu" position="-0.8 0.01 -12.3" rotation="0 181 0" scale="1 1 1.1"></a-gltf-model>
        <a-gltf-model id="bambu_24" src="#bambu" position="-1 0.01 -13.6" rotation="0 151 0" scale="1 1.1 1.1"></a-gltf-model>
        <a-gltf-model id="bambu_25" src="#bambu" position="-0.9 0.01 -14.4" rotation="0 181 0" scale="1.1 1 1"></a-gltf-model>
        <a-gltf-model id="bambu_26" src="#bambu" position="-0.9 0.01 -9.5" rotation="0 151 0" scale="1 1.1 1"></a-gltf-model>
        <a-gltf-model id="bambu_28" src="#bambu" position="-0.6 0.0 -1.6" rotation="0 151 0" scale="1 1.1 1.1"></a-gltf-model>
        {/* varias plantas */}
        <a-gltf-model id="varios_21" src="#plantdandeli" position="-5.92 1.7 2.1" rotation="0 152 0" scale="6 6 6" ></a-gltf-model>
        <a-gltf-model id="varios_22" src="#plantdandeli" position="-5.9 1.7 2.5" rotation="0 153 0" scale="6 6 6" ></a-gltf-model>
        <a-gltf-model id="varios_23" src="#plantdandeli" position="-4.6 1.7 3.1" rotation="0 180 0" scale="6 6 6" ></a-gltf-model>
        {/* muro  */}
        <a-box id="wall_21" color="grey" width="30" height="3" depth="1" position="0 0 0" material="repeat:19 5;color:withe;metalness:0.2;roughness:0.1;src:#imagen-pared" static-body rotation="0 90 0" ></a-box>
      </Entity>

      <Entity id="muro_3" position="0 0 -15" rotation="0 90 0">
        {/* Arboles del perimetro */}
        <a-gltf-model static-body="true" id="arbol_31" src="#arbol" position="-0.67 0 1" rotation="0 0 0" scale="1 1 1"></a-gltf-model>
        <a-gltf-model id="hojas_31" src="#hojas" position="-0.67 0 1" rotation="0 0 0" scale="1 1 1"></a-gltf-model>
        <a-gltf-model static-body="true" id="arbol_33" src="#arbol" position="-0.9 -0.5 8" rotation="0 119 0" scale="1.1 1. 1.1"></a-gltf-model>
        <a-gltf-model id="hojas_33" src="#hojas" position="-0.9 -0.5 8" rotation="0 119 0" scale="1.1 1. 1.1"></a-gltf-model>

        <a-gltf-model static-body id="arbol_37" src="#arbol" position="-0.7 -0.5 -2.4" rotation="0 15 0" scale="1.6 1.6 1.6"></a-gltf-model>
        <a-gltf-model id="hojas_37" src="#hojas" position="-0.7 -0.5 -2.4" rotation="0 15 0" scale="1.6 1.6 1.6"></a-gltf-model>
        <a-gltf-model static-body="true" id="arbol_38" src="#arbol" position="-1 -0.05 -12.4" rotation="0 181 0" scale="1.2 1.2 1.2"></a-gltf-model>
        <a-gltf-model id="hojas_38" src="#hojas" position="-1 -0.05 -12.4" rotation="0 181 0" scale="1.2 1.2 1.2"></a-gltf-model>


        {/* bambu */}
        <a-gltf-model id="bambu_31" src="#bambu" position="-0.5 0.01 -10.4" rotation="0 181 0" scale="1.1 1 1"></a-gltf-model>
        <a-gltf-model id="bambu_33" src="#bambu" position="-0.8 0.01 -12.3" rotation="0 181 0" scale="1 1 1.1"></a-gltf-model>
        <a-gltf-model id="bambu_34" src="#bambu" position="-1 0.01 -13.6" rotation="0 151 0" scale="1 1.1 1.1"></a-gltf-model>
        <a-gltf-model id="bambu_35" src="#bambu" position="-0.9 0.01 -14.4" rotation="0 181 0" scale="1.1 1 1"></a-gltf-model>
        <a-gltf-model id="bambu_36" src="#bambu" position="-0.9 0.01 -9.5" rotation="0 151 0" scale="1 1.1 1"></a-gltf-model>
        <a-gltf-model id="bambu_38" src="#bambu" position="-0.6 0.0 -1.6" rotation="0 151 0" scale="1 1.1 1.1"></a-gltf-model>
        {/* muro  */}
        <a-box id="wall_21" color="grey" width="30" height="3" depth="1" position="0 0 0" material="repeat:10 2;color:withe;metalness:0.2;roughness:0.1;src:#imagen-pared" static-body rotation="0 90 0" ></a-box>
      </Entity>


      {/* PORTALES */}
      <a-entity id="portalvalores" gltf-model={portalValores} position="8.3 -0.25 -11.6" rotation="0 88 0" scale="0.5 0.5 0.5">
        <Entity
          visible="true"
          id="portalvalores_texto"
          events={{
            click: () => portalSeleccion('valores')
          }}
          position="0 3 2.5"
          rotation="0 -85 0"
          width="2"
          height="2"
          material="shader: flat;color:#c6c6c6;opacity: 0.5;" geometry="primitive:plane; radius:10; width: 3.7; height: 0.6;"
          text={`value:Valores y Principios;wrapCount:20;width: 4;yOffset:-4;color:#F7f7f7;shader: msdf; font:${urlFont}/marker/PermanentMarker-Regular-msdf.json;align: center`} />
      </a-entity>
      
      <a-entity id="desarrollo" gltf-model={portalValores} position="-5.60 -0.25 -10" rotation="0 129 0" scale="0.5 0.5 0.5">
        <Entity
          visible="true"
          id="desarrollo_texto"
          events={{
            click: () => portalSeleccion('sesiontres')
          }}
          position="0 3 2.5"
          rotation="0 -85 0"
          width="2"
          height="2"
          material="shader: flat;color:#c6c6c6;opacity: 0.5;" geometry="primitive:plane; radius:10; width: 4.7; height: 1.2;"
          text={`value:Desarrollo personal y profesional\n Crecimiento y aprendizaje;wrapCount:20;width: 4;yOffset:-4;color:#F7f7f7;shader: msdf; font:${urlFont}/marker/PermanentMarker-Regular-msdf.json;align: center`} />
      </a-entity>
      <a-entity id="tomadedecisiones" gltf-model={portalValores} position="-9.75 -0.25 -1.85" rotation="0 178 0" scale="0.5 0.5 0.5">
        <Entity
          visible="true"
          id="tomadedecisiones_texto"
          events={{
            click: () => portalSeleccion('valores')
          }}
          position="0 3 2.5"
          rotation="0 -85 0"
          width="2"
          height="2"
          material="shader: flat;color:#c6c6c6;opacity: 0.5;" geometry="primitive:plane; radius:10; width: 4.1; height: 0.6;"
          text={`value:Estructura y toma de decisiones;wrapCount:20;width: 4;yOffset:-4;color:#F7f7f7;shader: msdf; font:${urlFont}/marker/PermanentMarker-Regular-msdf.json;align: center`} />
      </a-entity>
      <a-entity id="espacios" gltf-model={portalValores} position="-9.5 -0.25 8.8" rotation="0 -175 0" scale="0.5 0.5 0.5">
        <Entity
          visible="true"
          id="espacios_texto"
          events={{
            click: () => portalSeleccion('sesioncinco')
          }}
          position="0 3 2.5"
          rotation="0 -85 0"
          width="2"
          height="2"
          material="shader: flat;color:#c6c6c6;opacity: 0.5;" geometry="primitive:plane; radius:10; width: 4.1; height: 0.6;"
          text={`value:Espacion / dinámicas de trabajo;wrapCount:20;width: 4;yOffset:-4;color:#F7f7f7;shader: msdf; font:${urlFont}/marker/PermanentMarker-Regular-msdf.json;align: center`} />
      </a-entity>
      {/* CARTELES */}
      <Entity
        id="bienvenida"
        position="0.5 2.9 14.2"
        rotation="-16 0 0"
        width="2"
        height="2"
        material="color:#c6c6c6;opacity: 0.6;" geometry="primitive:plane; radiusBottom: 1; radiusTop: 0.1; width: 2; height: 2.1;"
        text={`value:¡Hola! Te doy la bienvenida a este viaje que te propongo. Me gustaría que te
          sintieras como en casa. ¡Abre tus sentidos y disfruta de la experiencia!;wrapCount:20;width: 2;yOffset:-4;color:black;shader: msdf; font:${urlFont}/normal/normal-msdf.json; align: center`} />
      <Entity
        id="despedida"
        sound="src:#jardin; on:click; loop:true; volume:0.75"
        position="-0.48 2.57 14.2"
        rotation="4 180 0"
        width="2"
        height="2"
        material="color:#c6c6c6;opacity: 0.6;" geometry="primitive:plane; radius:0.4; width: 3; height: 1.7;"
        text={`value:¡Gracias por tu generosidad! Para terminar, te lanzo estas preguntas para que reflexiones\n
          - ¿Qué te llevas de este viaje?\n
          - ¿Qué mejorarías?;wrapCount:30;width:1.9;yOffset:-4;color:black;shader: msdf; font:${urlFont}/normal/normal-msdf.json; align: center`} />

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
        position="-0.43 0.9 14.8"
        rotation="0 -180 0"
        width="2"
        height="2"
        material="color:#14B76E;opacity: 0.5;" geometry="primitive:plane; radius:0.4; width: 2; height: 0.6;"
        text={`value:Salida;wrapCount:20;width: 4;yOffset:-4;color:#F7f7f7;shader: msdf; font:${urlFont}/marker/PermanentMarker-Regular-msdf.json;align: center`} />
      {/* cosas varias */}

      <a-gltf-model id="buda" src="#buda" position="-0.5 -0.25 -14" rotation="0 29 0" scale="1 1 1"></a-gltf-model>
      <a-gltf-model id="nomo_1" src="#mono" position="-14 0.01 -14" rotation="0 29 0" scale="1.2 1.2 1.2"></a-gltf-model>
      <a-gltf-model id="nomo_2" src="#mono" position="14 0.01 14" rotation="0 -100 0" scale="1.2 1.2 1.2"></a-gltf-model>
      <a-gltf-model id="nomo_4" src="#mono" position="14 0.01 -14" rotation="0 -29 0" scale="1.2 1.2 1.2"></a-gltf-model>
      <a-gltf-model static-body shadow id="tumbona" src="#tumbona" position="-11.7 -0.88 11.5" rotation="0 29 0" scale="1 1 1"></a-gltf-model>
      {/* ENTRADA */}
      <Entity id="frontal">
        <a-box id="wall_seguro_1" width="30" height="3" depth="0.01" position="0 0 20" material="opacity:0.1" static-body="true" rotation="0 180 0" ></a-box>
        <a-box id="wall_seguro_2" width="10" height="3" depth="0.01" position="15 0 15" material="opacity:0.1" static-body="true" rotation="0 90 0" ></a-box>
        <a-box id="wall_seguro_3" width="10" height="3" depth="0.01" position="-15 0 15" material="opacity:0.1" static-body="true" rotation="0 -90 0" ></a-box>
        <a-box id="wall_tory_1" color="grey" width="13.1" height="3" depth="0.5" position="9.26 0 15" material="repeat:19 5;color:withe;metalness:0.2;roughness:0.1;src:#imagen-pared" static-body rotation="0 180 0" ></a-box>
        <a-box id="wall_tory_2" color="grey" width="13.1" height="3" depth="0.5" position="-9.26 0 15" material="repeat:19 5;color:withe;metalness:0.2;roughness:0.1;src:#imagen-pared" static-body rotation="0 180 0" ></a-box>
        <a-gltf-model id="tori" src="#tori" position="0 0 15" rotation="0 0 0" scale="0.7 0.7 0.7" shadow></a-gltf-model>
      </Entity>
      {/* camino */}
      <Entity key="6" id="camino">
        {suelo.camino.map(function (data, i) {
          return <a-box key={`3${i}`} id={`camino_${i}`} width="2" height="3" depth="0.5" material="src:#camino_piedra" position={`${data.position}`} rotation={`${data.rotation}`}></a-box>
        })}
      </Entity>
      {/* suelo */}
      <a-entity id="ocean" position="0 -3.9 0" ocean="density: 150; width: 550; depth: 150; speed:3" material="color: #9CE3F9; opacity: 0.75; metalness: 0; roughness: 1" rotation="-90 0 0" scale="10 10 10"></a-entity>
      <a-plane id="plano_1" static-body="true" position="0 0 0" rotation="-90 0 0" width="30" height="40" material="src: #cesped; repeat: 100 100" radius="10"></a-plane>

      {/* cielo */}
      <a-sky id="cielo" sound="src:#jardin; on:click; loop:true; volume:0.75" color="#87CEEB" material="" geometry="" scale="-1.31 1 1" rotation="0 0 0"></a-sky>
      {/* nubes */}
      <a-gltf-model id="nube_1" src="#nube" position="-1.2 50 100.5" rotation="0 151 0" scale="6 6 6">
        <a-animation id="animacion_1" attribute="position" dur="300000" from="-1.2 50 100.5" to="-1.2 50 -200.0" repeat="indefinite">
        </a-animation>
      </a-gltf-model>
      <a-gltf-model id="nube_2" src="#nube" position="-1.2 50 399.5" rotation="0 76 0" scale="10 10 10">
        <a-animation id="animacion_2" attribute="position" dur="300800" from="70 50 399.5" to="40 50 -500.0" repeat="indefinite">
        </a-animation>
      </a-gltf-model>
      {/* cámara */}
      {/*cargarCamara*/}

        <Entity id="cameraRig" camera kinematic-body="radius:1" universal-controls look-controls position={localStorage.getItem('position') === null ? "0 1.6 19.5" : localStorage.getItem('position')} rotation="16.6 0 0">
          <Entity cursor position="0 0 -0.5" geometry="primitive:ring;radiusInner:0.01;radiusOuter:0.016" material="opacity:0.5;shader:flat;transparent:false;color:blue" scale="0.5 0.5 0.5"></Entity>
          <a-entity controller="hand: left">
            <a-entity stats-in-vr position="0.47 0 0.08"></a-entity>
          </a-entity>
          <a-entity controller="hand: right"></a-entity>
        </Entity>
      
      {/* ILUMINACIÓN */}
      <a-light type="ambient" color="#445451"></a-light>
      <a-entity light="type:directional; castShadow:true; type: spot; castShadow: true" intensity="1" position="2 50 40" rotation="-43 0 0"></a-entity>
    </Scene>


  );
}

export default Frame;