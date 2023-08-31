import {Entity, Scene} from 'aframe-react';

/* precargar los objetos en 3d */
/* import muromadera from '../obj/construccion/sesioncinco/muro_madera.glb' */
import casademadera from '../obj/construccion/sesioncinco/casademadera.glb'
/* import suelo from '../obj/construccion/sesioncinco/suelo.glb' */
import jardinnocturno from '../obj/construccion/sesioncinco/jardinnocturno.glb' 

function SesionCinco() {
    return (
        <Scene physics="debug: false" canvas="" inspector="" keyboard-shortcuts="" screenshot="" vr-mode-ui="" auto-enter-vr="">
        {/* recursos */}
        <a-assets>
            <img id="imagen-pared" src={require('../resources/piedra_muro.jpg')} alt='' />
            <img id="cesped" src={require('../resources/cesped.jpg')} alt='' />
            <img id="sky" src={require('../resources/cielo-azul.jpg')} alt='' />
        </a-assets>
        
        {/* objetos de la escena */}
        <Entity position="0 0 -9" >
        <a-box gltf-model={casademadera} position="-0.219 -0.007 5.681" rotation="0 1.547 0" scale="1.1 1 1"></a-box>
        <a-box gltf-model={jardinnocturno} position="-0.500 -0.007 5.681" rotation="0 1.547 0" scale="1.1 1 1"></a-box>
        </Entity>
       
        

        
        {/* suelo */}
        <a-plane static-body position="0 0 0"  rotation="-90 0 0" width="30" height="30" material="src: #cesped; repeat: 100 100" radius="10"></a-plane>
        {/* cielo */}
        <a-sky src="#sky" material="" geometry="" scale="-1.31 1 1" rotation="0 0 0"></a-sky>
        {/* CAMARA */}
        <Entity camera kinematic-body="radius:2"  look-controls universal-controls position="0 1.6 0">
            <Entity cursor position="0 0 -0.5" geometry="primitive:ring;radiusInner:0.01;radiusOuter:0.016" material="opacity:0.5;shader:flat;transparent:false;color:blue" scale="0.8 0.8 0.8" raycaster ></Entity>
        </Entity>
        </Scene>
    );
}

export default SesionCinco;