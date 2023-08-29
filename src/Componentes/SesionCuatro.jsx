import {Entity, Scene} from 'aframe-react';
function SesionCuatro() {
    return (
        <Scene physics="debug: false" canvas="" inspector="" keyboard-shortcuts="" screenshot="" vr-mode-ui="" auto-enter-vr="">
        
        {/* CAMARA */}
        <Entity camera kinematic-body="radius:2"  look-controls universal-controls position="0 1.6 0">
            <Entity cursor position="0 0 -0.5" geometry="primitive:ring;radiusInner:0.01;radiusOuter:0.016" material="opacity:0.5;shader:flat;transparent:false;color:blue" scale="0.8 0.8 0.8" raycaster ></Entity>
        </Entity>
        </Scene>
    );
}

export default SesionCuatro;