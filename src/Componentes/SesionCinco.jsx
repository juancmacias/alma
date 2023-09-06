
import {Entity, Scene} from 'aframe-react';

/* precargar los objetos en 3d */
import muromadera from '../obj/construccion/sesioncinco/muro_madera.glb'
import sofa from '../obj/construccion/sesioncinco/sofa.glb'
import alfombraama from '../obj/construccion/sesioncinco/alfombraama.glb'
import bonsai from '../obj/construccion/sesioncinco/bonsai.glb'
import puff from '../obj/construccion/sesioncinco/puff.glb'
import cerezojapones from '../obj/construccion/sesioncinco/cerezojapones.glb'
import mesa_centro from '../obj/construccion/sesioncinco/mesa_centro.glb'
import chimenea from '../obj/construccion/sesioncinco/chimenea.glb'
import casajaponesa from '../obj/construccion/sesioncinco/casajaponesa.glb'
import cuadro from '../obj/construccion/sesioncinco/cuadro.glb'
import sofanegro from '../obj/construccion/sesioncinco/sofanegro.glb'












function SesionCinco() {
    return (
        <Scene physics="debug: false" canvas="" inspector="" keyboard-shortcuts="" screenshot="" vr-mode-ui="" auto-enter-vr="">
        {/* recursos */}
        <a-assets>
            <img id="imagen-pared" src={require('../resources/piedra_muro.jpg')} alt='' />
            <img id="suelosesioncinco" src={require('../resources/suelosesioncinco.jpg')} alt='' />
            <img id="sky" src={require('../resources/amanecer.jpg')} alt='' />
            <img id="texturamuro" src={require('../resources/texturamurodibu.png')} alt='' />
        </a-assets>
        
        {/* objetos de la escena */}
        <Entity position="0 0 -9" >
        
        {/* Sofa */}
        <a-box gltf-model={sofa} position="-6.965 0.32 3.965" rotation="0 1.547 0" scale="1.1 1 1" material=""></a-box>
        <a-box gltf-model={sofanegro} position="9.926 0.124 6.892" rotation="0 -93.965078401455 0" scale="0.02 0.02 0.02" material=""></a-box>

        {/* <a-box gltf-model={muromadera} position="-0.200 -0.007 4.3" rotation="0 1.547 0" scale="1.1 1 1"></a-box>
        <a-box gltf-model={muromadera} position="1.423 -0.007 4.3" rotation="0 1.547 0" scale="1.1 1 1"></a-box>
        <a-box gltf-model={muromadera} position="2.981 -0.007 4.3" rotation="0 1.547 0" scale="1.1 1 1"></a-box>
        <a-box gltf-model={muromadera} position="3.743 -0.007 5.128" rotation="0 -93.163 0" scale="1.1 1 1"></a-box>
        <a-box gltf-model={muromadera} position="-1.810 -0.007 4.300" rotation="0 1.547 0" scale="1.1 1 1"></a-box>
        <a-box gltf-model={muromadera} position="-3.390 -0.007 4.300" rotation="0 1.547 0" scale="1.1 1 1"></a-box>
    <a-box gltf-model={muromadera} position="-4.271 -0.007 5.128" rotation="0 -93.163 0" scale="1.1 1 1"></a-box> */}
        
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
        <a-box gltf-model="/static/media/mesa_centro.4b8267e60d7c59835e29.glb" position="5.062 0.146 6.496" rotation="0 -89.782 0" scale="0.005 0.006 0.005" material=""></a-box>
       
        {/* Chimenea */}
        <a-box gltf-model={chimenea} position="4.046 0.028 9.653" rotation="0 -89.782 0" scale="0.01 0.009 0.01" material=""></a-box>
          
        {/* Muro */} 
        <a-box width="30" height="2" depth="0.5" geometry="" position="0 0.854 -5.96" material=""></a-box>
        <a-box width="30" height="2" depth="0.5" geometry="" position="14.692 0.854 8.896" material="" rotation="0 90.1262611740785 0"></a-box>
        <a-box width="30" height="2" depth="0.5" geometry="" position="-14.708 0.854 8.896" material="" rotation="0 90.126 0" material="src= #texturamuro"></a-box>
        
       {/*Casa japonesa*/}
       <a-box gltf-model="/static/media/casajaponesa.6bdb38851237023477c7.glb" position="7.301 0.303 -2.153" rotation="0 1.547 0" scale="1.1 0.89 1" material=""></a-box>

       {/* Cuadro */}
       <a-box gltf-model="/static/media/cuadro.a5a23548bdcaf5cc1eee.glb" position="-5.975 2.758 3.416" rotation="0 -4.354 0" scale="0.005 0.005 0" material=""></a-box>
      
       
        </Entity>
       
        

        
        {/* suelo */}
        <a-plane static-body position="0 0 0"  rotation="-90 0 0" width="30" height="30" material="src: #suelosesioncinco; repeat: 100 100" radius="10"></a-plane>
        {/* cielo */}
        <a-sky src="#sky" material="" geometry="" scale="-1.31 1 1" rotation="0 0 0"></a-sky>
        {/* CAMARA */}
        <a-entity camera="active:false" velocity="" kinematic-body="radius:2" position="0 1.6 14.696" look-controls="" universal-controls="" gamepad-controls="" keyboard-controls="" touch-controls="" hmd-controls="" mouse-controls="" data-aframe-inspector-original-camera=""><a-entity raycaster="" cursor="" position="0 0 -0.5" geometry="primitive:ring;radiusInner:0.01;radiusOuter:0.016" material="opacity:0.5;shader:flat;color:blue" scale="0.8 0.8 0.8"></a-entity></a-entity>
        { /*<a-box gltf-model="/static/media/jardin_kyoto.f56981aff04dcb9e5e13.glb"  position="0.321 1.818 -1.022" rotation="0 1.547 0" scale="0.01 0.01 0.01" material=""></a-box> */}
        </Scene>
        
    );
}

export default SesionCinco;