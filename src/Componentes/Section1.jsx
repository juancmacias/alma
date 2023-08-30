
      import {Entity, Scene} from 'aframe-react'
      import bamboo from '../obj/plantas/bamboo.glb';
      import arbol from '../obj/plantas/stylized_tree.glb';
      import watter from'../obj/construccion/Section1/watter blend.glb';
      import walkway_stones from'../obj/construccion/Section1/walkway_stones.glb';
      import Flora_Rose from'../obj/construccion/Section1/Flora_Rose.gltf';
      import Flora_Tulip from'../obj/construccion/Section1/Flora_Tulip.gltf';
      import Arbustos from'../obj/construccion/Section1/Arbustos.gltf';
      function Sesion1() {
        return (
          
            <Scene physics="debug: false" canvas="" inspector="" keyboard-shortcuts="" screenshot="" vr-mode-ui="" auto-enter-vr="">
            {/* recursos */}
            <a-assets>
                <img id="imagen-pared" src={require('../resources/piedra_muro.jpg')} alt='' />
                <img id="cesped" src={require('../resources/cesped.jpg')} alt='' />
                <img id="sky" src={require('../resources/cielo-azul.jpg')} alt='' />
            </a-assets>
            <Entity>
              {/* Arboles */}
              <a-entity static-body id="arbol_1" gltf-model={arbol} position="0.5 0 1" rotation="0 0 0" scale="1.0 1.0 1.0"></a-entity>
              <a-entity static-body id="arbol_2" gltf-model={arbol} position="0.7 0 4.6" rotation="0 80 0" scale="1.0 1.0 1.0"></a-entity>
              <a-entity static-body id="arbol_3" gltf-model={arbol} position="0.4 -0.5 8" rotation="0 119 0" scale="1.1 1.1 1.1"></a-entity>
              <a-entity static-body id="arbol_4" gltf-model={arbol} position="0.66 -0.1 -6.58" rotation="0 39 0" scale="1.2 1.2 1.2"></a-entity>
              
              {/* bambu */}
              <a-entity id="bambu_1" gltf-model={bamboo} position="0.5 0.01 -10.4" rotation="0 181 0" scale="1.1 1 1"></a-entity>
              <a-entity id="bambu_2" gltf-model={bamboo} position="0.6 0.01 -13.5" rotation="0 151 0" scale="1 1.1 1"></a-entity>
              <a-entity id="bambu_3" gltf-model={bamboo} position="0.8 0.01 -12.3" rotation="0 181 0" scale="1 1 1.1"></a-entity>
              <a-entity id="bambu_4" gltf-model={bamboo} position="1 0.01 -13.6" rotation="0 151 0" scale="1 1.1 1.1"></a-entity>
              <a-entity id="bambu_5" gltf-model={bamboo} position="0.9 0.01 -14.4" rotation="0 181 0" scale="1.1 1 1"></a-entity>
              <a-entity id="bambu_6" gltf-model={bamboo} position="0.9 0.01 -9.5" rotation="0 151 0" scale="1 1.1 1"></a-entity>
              
              {/* Arbustos y Flores */}
              <a-entity id="Arbustos_1" gltf-model={Arbustos} position="0.61 0.0 -1.6" rotation="0 152 0" scale="1 1.1 1.1"></a-entity>
              <a-entity id="Flores_1" gltf-model={Flora_Rose} position="0.72 0.0 -1.5" rotation="0 151 0" scale="1 1.1 1.1"></a-entity>
              <a-entity id="Flores_2" gltf-model={Flora_Tulip} position="0.53 0.0 -1.7" rotation="0 155 0" scale="1 1.1 1.1"></a-entity>
              <a-entity id="Flores_3" gltf-model={Flora_Rose} position="0.84 0.0 -1.55" rotation="0 154 0" scale="1 1.1 1.1"></a-entity>
              <a-entity id="varios_4" gltf-model={Flora_Tulip} position="0.75 0.0 -1.6" rotation="0 156 0" scale="1 1.1 1.1"></a-entity>
              <a-entity id="varios_5" gltf-model={Flora_Rose} position="0.81 0.0 -1.5" rotation="0 153 0" scale="1 1.1 1.1"></a-entity>
              <a-entity id="varios_6" gltf-model={Flora_Tulip} position="0.92 0.0 -1.7" rotation="0 151 0" scale="1 1.1 1.1"></a-entity>
              <a-entity id="varios_7" gltf-model={Flora_Rose} position="0.62 0.0 -1.55" rotation="0 151 0" scale="1 1.1 1.1"></a-entity>
              {/* muro  */}
              <a-box id="wall_11" color="grey" width="30" height="3" depth="1" position="0 0 0" material="repeat:19 5;color:white;metalness:0.2;roughness:0.1;src:#imagen-pared" static-body rotation="0 90 0" ></a-box>
            </Entity>
            <Entity id="muro_2" position="15 0 0" rotation="0 0 0">
              {/* Arboles */}
              <a-entity static-body id="arbol_5" type="model" gltf-model={arbol} position="-0.67 0 1" rotation="0 0 0" scale="1.0 1.0 1.0"></a-entity>
              <a-entity static-body id="arbol_6" type="model" gltf-model={arbol} position="-0.7 0 4.6" rotation="0 80 0" scale="1.0 1.0 1.0"></a-entity>
              <a-entity static-body id="arbol_7" type="model" gltf-model={arbol} position="-0.9 -0.5 8" rotation="0 119 0" scale="1.1 1.1 1.1"></a-entity>
              <a-entity static-body id="arbol_8" type="model" gltf-model={arbol} position="-0.66 -0.1 -6.58" rotation="0 39 0" scale="1.2 1.2 1.2"></a-entity>
              
              {/* Flores */}
              <a-entity id="Flores_1" gltf-model={bamboo} position="-0.5 0.01 -10.4" rotation="0 181 0" scale="1.1 1 1"></a-entity>
              <a-entity id="Flores_2" gltf-model={bamboo} position="-0.6 0.01 -13.5" rotation="0 151 0" scale="1 1.1 1"></a-entity>
              <a-entity id="Flores_3" gltf-model={bamboo} position="-0.8 0.01 -12.3" rotation="0 181 0" scale="1 1 1.1"></a-entity>
              <a-entity id="Flores_4" gltf-model={bamboo} position="-1 0.01 -13.6" rotation="0 151 0" scale="1 1.1 1.1"></a-entity>
              <a-entity id="Flores_5" gltf-model={bamboo} position="-0.9 0.01 -14.4" rotation="0 181 0" scale="1.1 1 1"></a-entity>
              <a-entity id="Flores_6" gltf-model={bamboo} position="-0.9 0.01 -9.5" rotation="0 151 0" scale="1 1.1 1"></a-entity>
              <a-entity id="Flores_7" gltf-model={bamboo} position="-0.7 0.0 -7.3" rotation="0 181 0" scale="1 1 1.1"></a-entity>
              <a-entity id="Flores_8" gltf-model={bamboo} position="-0.6 0.0 -1.6" rotation="0 151 0" scale="1 1.1 1.1"></a-entity>
              {/* muro  */}
              <a-box id="wall_21" color="grey" width="30" height="3" depth="1" position="0 0 0" material="repeat:19 5;color:withe;metalness:0.2;roughness:0.1;src:#imagen-pared" static-body rotation="0 90 0" ></a-box>
            </Entity>

            <Entity id="muro_3" position="0 0 -15" rotation="0 90 0">
              {/*banco y farola, arbustos  */}
              <a-entity static-body id="" type="model" gltf-model={arbol} position="-0.67 0 1" rotation="0 0 0" scale="1 1 1"></a-entity>
              <a-entity static-body id="" type="model" gltf-model={arbol} position="-0.7 0 4.6" rotation="0 80 0" scale="1 1 1"></a-entity>
              <a-entity static-body id="" type="model" gltf-model={arbol} position="-0.9 -0.5 8" rotation="0 119 0" scale="1.1 1. 1.1"></a-entity>
              <a-entity static-body id="" type="model" gltf-model={arbol} position="-0.66 -0.1 -6.58" rotation="0 39 0" scale="1.2 1.2 1.2"></a-entity>
              <a-entity static-body id="" type="model" gltf-model={arbol} position="-0.6 -0.0 10.4" rotation="0 119 0" scale="1.4 1.4 1.4"></a-entity>
              <a-entity static-body id="" type="model" gltf-model={arbol} position="-0.5 -0.2 14.4" rotation="0 101 0" scale="1.7 1.7 1.7"></a-entity>
              <a-entity static-body id="" type="model" gltf-model={arbol} position="-0.7 -0.5 -2.4" rotation="0 15 0" scale="1.6 1.6 1.6"></a-entity>
              <a-entity static-body id="" type="model" gltf-model={arbol} position="-1 -0.05 -12.4" rotation="0 181 0" scale="1.2 1.2 1.2"></a-entity>
              <a-entity static-body id="" type="model" gltf-model={arbol} position="-1.2 -0.05 -14.5" rotation="0 151 0" scale="1.2 1.2 1.2"></a-entity>
           
              {/* muro  */}
              <a-box id="wall_21" color="grey" width="30" height="3" depth="1" position="0 0 0" material="repeat:19 5;color:white;metalness:0.2;roughness:0.1;src:#imagen-pared" static-body rotation="0 90 0" ></a-box>
              </Entity>
            {/* agua */}
            <a-entity id="watter blend" glb-model={watter} scale="0.53 0.4 0.51" position="2.44 0.02 0.25"></a-entity>
            {/* camino de piedras */}
            <a-entity glb-model={walkway_stones.glb} scale="0.24 0.16 0.35" position="-2.58 -0.02 3.66" rotation="0 59.99999999999999 0"></a-entity>

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
        
        export default Section1;