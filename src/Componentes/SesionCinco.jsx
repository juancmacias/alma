
import {Entity, Scene} from 'aframe-react';
import React, {useState} from 'react'
import { urlFont, urlApi, urlVid } from './../services/urls';
import datos from './json/4.json'

import sofa from '../obj/construccion/sesioncinco/sofa.glb'
import alfombraama from '../obj/construccion/sesioncinco/alfombraama.glb'
import bonsai from '../obj/construccion/sesioncinco/bonsai.glb'
import puff from '../obj/construccion/sesioncinco/puff.glb'
import cerezojapones from '../obj/construccion/sesioncinco/cerezojapones.glb'
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
          position="5.5 5.5 -4.8"
          rotation="0 0.34 0"
          width="2"
          height="2"
          material="color:#14B76E;opacity: 0.5;" geometry="primitive:plane; radius:0.4; width: 2; height: 0.6;"
          text={`value:Salida;wrapCount:20;width: 4;yOffset:-4;color:#F7f7f7;shader: msdf; font:${urlFont}/marker/PermanentMarker-Regular-msdf.json;align: center`} />
        
        <Entity
          id={`texto`}
          position={`2.69 4.84 -4.67`}
          rotation="-0 0 0"
          width="3"
          height="1.7"
          material="color:#3DB4EB;" geometry="primitive:plane; radiusBottom: 1; radiusTop: 0.1; width: 3; height: 1.7;"
          text={`value:Consideras que tu entorno de trabajo refleja la cultura de tu organización?;wrapCount:25;width: 2.2;yOffset:-5;color:black;shader: msdf; font:${urlFont}/normal/normal-msdf.json; align: center`} />

        <Entity
          id={`texto`}
          position={`10.41 3.34 -0.02`}
          rotation="-0.68 -88.4 1.77"
          width="3"
          height="1.7"
          material="color:#3DB4EB;" geometry="primitive:plane; radiusBottom: 1; radiusTop: 0.1; width: 3; height: 1.7;"
          text={`value:¿Cómo sería tu entorno de trabajo ideal?;wrapCount:25;width: 2.2;yOffset:-5;color:black;shader: msdf; font:${urlFont}/normal/normal-msdf.json; align: center`} />

        <Entity
          id={`texto`}
          position={`-9.72 3.15 8.21`}
          rotation="-0.68 78.78 1.77"
          width="3"
          height="1.7"
          material="color:#3DB4EB;" geometry="primitive:plane; radiusBottom: 1; radiusTop: 0.1; width: 3; height: 1.7;"
          text={`value::${datos.secciones[0].apartados[0].tituloApartado}\n${datos.secciones[0].apartados[0].contenidoApartado};wrapCount:25;width: 2.2;yOffset:-5;color:black;shader: msdf; font:${urlFont}/normal/normal-msdf.json; align: center`} />
       
       <Entity
          id={`texto`}
          position={`10.63 3.48 6.19`}
          rotation="3.89 -81.58 1.89"
          width="3"
          height="1.7"
          material="color:#3DB4EB;" geometry="primitive:plane; radiusBottom: 1; radiusTop: 0.1; width: 3; height: 1.7;"
          text={`value::${datos.secciones[0].apartados[5].tituloApartado}\n${datos.secciones[0].apartados[5].contenidoApartado};wrapCount:25;width: 2.2;yOffset:-5;color:black;shader: msdf; font:${urlFont}/normal/normal-msdf.json; align: center`} />
       
       <Entity
          id={`texto`}
          position={`11.10 3.56 17.07`}
          rotation="3.89 -81.58 1.89"
          width="3"
          height="1.7"
          material="color:#3DB4EB;" geometry="primitive:plane; radiusBottom: 1; radiusTop: 0.1; width: 3; height: 1.7;"
          text={`value:Con nuestras sincros diárias estoy más cerca cada día del equipo y puedo saber en qué alguien puede necesitar apoyo. (Pepe Vázquez);wrapCount:25;width: 2.2;yOffset:-5;color:black;shader: msdf; font:${urlFont}/normal/normal-msdf.json; align: center`} />
       
       <Entity
          id={`texto`}
          position={`0.629 2.589 13.93`}
          rotation="-0 0 0"
          scale="0.52 0.58 1"
          width="3"
          height="1.7"
          material="color:#3DB4EB;" geometry="primitive:plane; radiusBottom: 1; radiusTop: 0.1; width: 3; height: 1.7;"
          text={`value:Cuidate Cuidanos;wrapCount:25;width: 2.2;yOffset:-5;color:black;shader: msdf; font:${urlFont}/normal/normal-msdf.json; align: center`} />

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
        <a-box gltf-model={cerezojapones} position="6.053 0.303 -2.964" rotation="0 -4.354 0" scale="0.1 0.1 0.1" material=""></a-box>
        <a-box gltf-model={cerezojapones} position="7.364 0.303 -1.873" rotation="0 -4.354 0" scale="0.1 0.1 0.1" material=""></a-box>
    
        {/*Casa japonesa*/}
        <a-box gltf-model={casajaponesa} position="7.301 0.303 -2.153" rotation="0 1.547 0" scale="1.1 0.89 1" material=""></a-box>

        {/* Cuadro */} 
        <a-box gltf-model={cuadro} position="-5.975 2.758 3.416" rotation="0 -4.354 0" scale="0.005 0.005 0" material=""></a-box>
      
        {/* Bonsai */} 
        <a-box gltf-model={bonsai_tree} position="-1.64 1.354 13.356" rotation="0 -4.354 0" material=""></a-box>

        {/* Lampara */}    
        <a-box gltf-model={lampara} position="-2.274 0.328 2.927" rotation="0 -87.26147219842437 0" scale="0.03 0.03 0.03" material=""></a-box>
        
        {/* Mesa cafe */}
        <a-box gltf-model={mesacafe} position="-9.892 0.328 6.939" rotation="0 -87.261 0" scale="0.03 0.02 0.01" material=""></a-box>
         
        {/* Puerta */}
        <a-box gltf-model={puerta} position="0.778 -0.01 21.595" rotation="0 1.432 0" material="" scale="9 7.169 1"></a-box>
        <a-box gltf-model={puerta} position="2.64 0.107 -4.529" scale="5.451 5.601 1" material=""></a-box>
         
        {/* YingYang */} 
        <a-box gltf-model={yingyang} position="-3.317 -0.01 21.922" rotation="0 11.688 0" scale="0.08 0.08 0.03" material=""></a-box>
        <a-box gltf-model={yingyang} position="4.875 -0.01 21.922" rotation="0 -4.927437038125079 0" scale="0.08 0.08 0.03" material=""></a-box>
     
        {/* Esfera */}
        <a-box gltf-model={esfera} position="-1.358 0.525 12.876" rotation="22.039 -58.428 22.039" material="" scale="0.8 0.9 1.3"> 
        <a-animation attribute="rotation" dur="10000" fill="forwards" to="360 360 360" repeat="indefinite"></a-animation></a-box>

        {/* Sol */}   
        <a-box gltf-model={sol} position="4.663 1.245 7.128" rotation="134.66927636937373 81.01904057771259 134.66927636937373" material="" scale="0.8 0.764 0.821">
        <a-animation attribute="rotation" dur="10000" fill="forwards" to="360 360 360" repeat="indefinite"></a-animation></a-box>          

        {/* Thinkito */}
        <a-box gltf-model={thinkito} position="7.201 1.305 17.652" rotation="34.70216595604936 -40.78454184996791 34.70216595604936" material="" scale="0.8 0.9 1.3">
        <a-animation attribute="rotation" dur="10000" fill="forwards" to="0 360 0" repeat="indefinite"></a-animation></a-box>
      
        </Entity>
       
        {/* suelo */}
        <a-plane static-body position="0 0 0"  rotation="-90 0 0" width="30" height="30" material="src: #suelosesioncinco; repeat: 100 100" radius="10"></a-plane>
        
        {/* cielo */}
        <a-sky src="#sky" material="" geometry="" scale="-1.31 1 1" rotation="0 0 0"></a-sky>
        
        {/* CAMARA */}
        <Entity id="cameraRig" camera kinematic-body="radius:1" look-controls universal-controls position="0 1.6 14.696" rotation="16.6 0 0">
          <Entity cursor position="0 0 -0.5" geometry="primitive:ring;radiusInner:0.01;radiusOuter:0.016" material="opacity:0.5;shader:flat;transparent:false;color:blue" scale="0.5 0.5 0.5"></Entity>
          <a-entity controller="hand: left"></a-entity>
          <a-entity controller="hand: right"></a-entity>
        </Entity>
        </Scene>
        
    );
}

export default SesionCinco;