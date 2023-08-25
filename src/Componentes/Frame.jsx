import { Entity, Scene } from 'aframe-react';
import useSound from 'use-sound';
import fuenteUno from '../font/basico/custom-msdf.json'

import React, {useState, useEffect, useRef} from 'react';
function Frame() {
    return (
      <Scene debug="true" physics="debug: true" canvas="" inspector="" keyboard-shortcuts="" screenshot="" vr-mode-ui="" auto-enter-vr="">
        <a-assets>
          <img id="imagen-suelo_Madera" src={require('../resources/madera.jpg')} alt='' />

        </a-assets>


        <Entity position="0 46 -48" >
        <a-entity id="text" position="1 16.3 7.3" text="value: Hola á j;  style: italic; size: 0.5; weight: bold; height: 0; bevelEnabled: true; bevelSize: 0.04; bevelThickness: 0.04; curveSegments: 1" material="shader: flat; color: white; transparent: false; opacity: 0.4"></a-entity>
        <a-entity text={`value:Hello; color:#FFFFFF; shader: msdf; font:https://raw.githubusercontent.com/etiennepinchon/aframe-fonts/master/fonts/creepster/Creepster-Regular.json;`} position="1.3 16.3 7.3"></a-entity>     
        <a-text value="aaa á b é´iñ í ó ú" font={require('../font/basico/custom-msdf.json')}  position="0.4 15.3 7.3" negate="false"></a-text>
        <a-text value="aaa á b é´iñ í ó ú" font="https://juancmacias.github.io/alma-thinking-with-you/public/font/basico/custom-msdf.json"  position="0.4 15 7.3" negate="false"></a-text>
        <a-entity text={`value:Hello ñ ó; color:#FFFFFF; negate:false; shader: msdf; font:https://juancmacias.github.io/alma-thinking-with-you/public/font/basico/custom-msdf.json;`} position="0.9 16.3 7.3" ></a-entity>     




          <Entity
                events={{
                  //click: ()=>_handleClick('puertas') ,
                }}
                obj-model="obj: #puertas-obj; mtl: #puertas-mtl"
                position="3.5 14 -10.2" scale="8 5 5"
                static-body></Entity>
            <Entity      
              events={{
                    //click: ()=>_handleClick('nivel2-display')
                  }}
              obj-model="obj: #display-obj; mtl: #display-mtl"
              position="-5.73 15.5 7" rotation="0 90 0"
              static-body></Entity>
              
              <a-entity position="-5.73 16.2 7.15" rotation="0 90 0" geometry="primitive:plane; width: 2.1; height: 1.5;" text="align:center;value:Listado;width:1;color:#322342"></a-entity>
              <a-box color="grey" width="15" height="5" depth="1" position="-0.215 16.5 10.025" material="src:#imagen-pared" static-body></a-box>
              <a-box  color="grey" width="6" height="5" depth="1" position="1.215 16.5 -10.794" material="src:#imagen-pared" static-body></a-box>
              <a-box color="grey" width="15" height="5" depth="1" position="3.731 16.5 -2.734" material="src:#imagen-pared" rotation="0 90 0" static-body></a-box>
              <a-box color="grey" width="15" height="5" depth="1" position="-0.949 16.5 -2.761" material="src:#imagen-pared" rotation="0 90 0" static-body></a-box>
              <a-box color="grey" width="6" height="5" depth="1" position="-4.465 16.5 4.268" material="src:#imagen-pared" static-body></a-box>
              <a-box color="grey" width="4" height="5" depth="1" position="5.246 16.5 4.268" material="src:#imagen-pared" static-body></a-box>
              <a-box  color="grey" width="7" height="5" depth="1" position="7.545 16.5 6.966" material="src:#imagen-pared"  rotation="0 90 0"></a-box>
              <a-box color="grey" width="7" height="5" depth="1" position="-7.263 16.5 6.966" material="src:#imagen-pared"  rotation="0 90 0"></a-box>
              <a-entity id="floor3" reset="true" static-body position="0 14 0" geometry="depth:30;height:0.2;width:20;" material="repeat:10 5;color:withe;metalness:0.2;roughness:0.1;src:#imagen-suelo_Madera" crossorigin="anonymous" ></a-entity>
            </Entity>


            <a-entity position="1.464 62.572 -48.571" sound="src:#bg_music; autoplay:true; loop:true; volume:0.05" camera id="player" player="health: 200" userHeight="1.6"
              jump-ability
              universal-controls kinematic-body="radius:0.5" >
            <a-entity cursor position="0 0 -0.5" geometry="primitive:ring;radiusInner:0.01;radiusOuter:0.016" material="opacity:0.5;shader:flat;transparent:true;color:#ff9" scale="0.8 0.8 0.8" raycaster ></a-entity>
          </a-entity>
      </Scene>

    );
  }
  
  export default Frame;