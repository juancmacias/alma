    import {Entity, Scene} from 'aframe-react';
    import arbol from'../obj/plantas/stylized_tree.glb';
    import arbre from '../obj/plantas/maple_tronco.glb';
    import bamboo from '../obj/plantas/bamboo.glb';
    import banco from '../obj/construccion/Section1/banco.glb';
    import farola from '../obj/construccion/farola_2.glb';

    //import columpio from '../obj/construccion/Section1/columpio.glb';

    function SesionUno() {
        return (
        

            <Scene physics="debug: false" canvas="" inspector="" keyboard-shortcuts="" screenshot="" vr-mode-ui="" auto-enter-vr="">
          {/* recursos */}
          <a-assets>
              <img id="imagen-pared" src={require('../resources/piedra_muro.jpg')} alt='' />
              <img id="cesped" src={require('../resources/cesped.jpg')} alt='' />
              <img id="sky" src={require('../resources/cielo-azul.jpg')} alt='' />
              <img id="agua" src={require('../resources/Sesionuna/agua.jpg')} alt='' />
          </a-assets>
          <Entity id="muro_1" position="-15 0 0" rotation="0 0 0">
              {/* Arboles */}
              <a-entity static-body  gltf-model={arbol} position="0.53 0 1" rotation="0 0 0" scale="1.0 1.23 1.0"></a-entity>
              <a-entity static-body  gltf-model={arbol} position="0.7 0 4.6" rotation="0 80 0" scale="1.0 1.23 1.0"></a-entity>
              <a-entity static-body  gltf-model={arbol} position="0.6 -0.5 8" rotation="0 119 0" scale="1.1 1.20 1.1"></a-entity>
              <a-entity static-body  gltf-model={arbol} position="0.66 -0.1 -6.58" rotation="0 39 0" scale="1.2 1.22 1.2"></a-entity>
              <a-entity static-body  gltf-model={arbol} position="0.66 -0.1 -6.58" rotation="0 39 0" scale="1.2 1.22 1.2"></a-entity>
              <a-entity static-body  gltf-model={arbol} position="0.66 -0.1 10.58" rotation="0 39 0" scale="1.2 1.22 1.2"></a-entity>

              <a-entity static-body  gltf-model={arbre} position="0.6 0 -2,22" rotation="0 0 0" scale="1.0 0.80 1.0"></a-entity>
              <a-entity static-body  gltf-model={arbre} position="0.8 0 3.6" rotation="0 80 0" scale="0.60 0.76 0.52 "></a-entity>
              <a-entity static-body  gltf-model={arbre} position="0.5 -0.5 -14" rotation="0 119 0" scale="1.1 0.79 1.1"></a-entity>
              <a-entity static-body  gltf-model={arbre} position="0.77 -0.1 -9.78" rotation="0 39 0" scale="1.2 0.77 1.2"></a-entity>

              <a-entity id="bambu_1" gltf-model={bamboo} position="14.5 0.01 -15" rotation="0 181 0" scale="5.18 6.14 5.02"></a-entity>
              <a-entity id="bambu_2" gltf-model={bamboo} position="16.6 0.01 -12" rotation="0 151 0" scale="5.18 6.14 5.02"></a-entity>
              <a-entity id="bambu_3" gltf-model={bamboo} position="19 0.01 -13" rotation="0 181 0" scale="5.18 6.14 5.02"></a-entity>
              <a-entity id="bambu_4" gltf-model={bamboo} position="-1 0.01 -10.5" rotation="0 151 0" scale="5.18 6.14 5.02"></a-entity>
              <a-entity id="bambu_5" gltf-model={bamboo} position="9.01 0.01 0" rotation="0 181 0" scale="5.18 6.14 5.02"></a-entity>
              <a-entity id="bambu_6" gltf-model={bamboo} position="0.9 0.01 -6.5" rotation="0 151 0" scale="5.18 6.14 5.02"></a-entity>
              <a-entity id="bambu_7" gltf-model={bamboo} position="0.5 0.01 -8.4" rotation="0 181 0" scale="5.18 6.14 5.02"></a-entity>
              <a-entity id="bambu_8" gltf-model={bamboo} position="0.6 0.01 -12.7" rotation="0 151 0" scale="5.18 6.14 5.02"></a-entity>
              <a-entity id="bambu_9" gltf-model={bamboo} position="0.8 0.01 -12.3" rotation="0 181 0" scale="5.18 6.14 5.02"></a-entity>
              <a-entity id="bambu_10" gltf-model={bamboo} position="1 0.01 -10" rotation="0 151 0" scale="5.18 6.14 5.02"></a-entity>

             

          <a-box id="wall_11" color="grey" width="30" height="3" depth="1" position="0 0 0" material="repeat:19 5;color:withe;metalness:0.2;roughness:0.1;src:#imagen-pared" static-body rotation="0 90 0" ></a-box>
          </Entity>

          <Entity id="muro_2" position="15 0 0" rotation="0 0 0">

          <a-entity id="bambu_1" gltf-model={bamboo} position="-1.6 0.01 -6.7" rotation="0 181 0" scale="5.18 5.14 5.02"></a-entity>
            <a-entity id="bambu_2" gltf-model={bamboo} position="-5 0.01 -12.5" rotation="0 151 0" scale="5.18 5.14 5.02"></a-entity>
            <a-entity id="bambu_3" gltf-model={bamboo} position="25 0.01 -12.3" rotation="4.57 120 2.33" scale="1.17 -0.96  1.15"></a-entity>
            
            <a-entity static-body  gltf-model={arbol} position="-3 0.5 -13" rotation="0 0 0" scale="1.0 1.23 1.0"></a-entity>
              <a-entity static-body  gltf-model={arbol} position="-0.7 0 4.6" rotation="0 80 0" scale="1.0 1.23 1.0"></a-entity>
              <a-entity static-body  gltf-model={arbol} position="-0.6 -0.5 8" rotation="0 119 0" scale="1.1 1.20 1.1"></a-entity>
              <a-entity static-body  gltf-model={arbol} position="-0.66 -0.1 -6.58" rotation="0 39 0" scale="1.2 1.22 1.2"></a-entity>
            
            
            <a-entity id="model" gltf-model={banco} position="-27 1 -9 57" rotation="0 90 0" scale="0.5 0.5 0.5"></a-entity>  
            <a-entity id="model" gltf-model={banco} position="-27 1 -1" rotation="0 90 0" scale="0.5 0.5 0.5"></a-entity>
            <a-entity id="model" gltf-model={banco} position="-20 1 -12" rotation="0 0 0" scale="0.5 0.5 0.5"></a-entity>
            <a-entity id="model" gltf-model={farola} position="-20 0.5 -12" rotation="0 0 0" scale="o.1 0.1 0.1"></a-entity>
            
          <a-entity id="model" gltf-model={farola} position="0 0 0" rotation="0 0 0" scale="0.1 0.1 0.1"></a-entity>





          <a-box id="wall_21" color="grey" width="30" height="3" depth="1" material="" static-body="" rotation="0 90 0" geometry=""></a-box><a-box id="wall_21" color="grey" width="30" height="3" depth="1" material="" static-body="" rotation="0 90 0" geometry=""></a-box>


          <a-box id="wall_21" color="grey" width="30" height="3" depth="1" position="0 0 0" material="repeat:19 5;color:withe;metalness:0.2;roughness:0.1;src:#imagen-pared" static-body rotation="0 90 0" ></a-box> 
            </Entity>

            <Entity id="muro_3" position="0 0 -15" rotation="0 90 0"><a-box id="wall_21" color="grey" width="30" height="3" depth="1" position="0 0 0" material="repeat:19 5;color:white;metalness:0.2;roughness:0.1;src:#imagen-pared" static-body rotation="0 90 0" ></a-box>
      

            <a-entity static-body  gltf-model={arbol} position="-0.92 0 1" rotation="0 0 0" scale="1.0 1.23 1.0"></a-entity>
              <a-entity static-body  gltf-model={arbol} position="-0.5 -0.2 4.6" rotation="0 80 0" scale="1.0 1.23 1.0"></a-entity>
              <a-entity static-body  gltf-model={arbol} position="-0.6 -0.5 8" rotation="0 119 0" scale="1.1 1.20 1.1"></a-entity>
              <a-entity static-body  gltf-model={arbol} position="-0.66 -0.1 -6.58" rotation="0 39 0" scale="1.2 1.22 1.2"></a-entity>




            <a-box id="wall_21" color="grey" width="30" height="3" depth="1" position="0 0 0" material="repeat:19 5;color:white;metalness:0.2;roughness:0.1;src:#imagen-pared" static-body rotation="0 90 0" ></a-box>
            </Entity>





            {/* agua */}
            <a-plane static-body id="agua"   color="azul"position="5.50 0.70 1.56 " rotation="-90 0 0" width="0.50" height="30" scale="30 0.50 0.05" material="src: #agua; repeat: 100 100;"></a-plane>

            {/* objetos de la escena */}
            {/* suelo */}
            <a-plane static-body position="0 0.03 0"  rotation="-90 0 0" width="30" height="30" material="src: #cesped; repeat: 100 100" radius="10"></a-plane>
            {/* cielo */}
            <a-sky src="#sky" material="" geometry="" scale="-1.31 1 1" rotation="0 0 0"></a-sky>
            {/* CAMARA */}
            <Entity camera kinematic-body="radius:2"  look-controls universal-controls position="0 1.6 0">
                <Entity cursor position="0 0 -0.5" geometry="primitive:ring;radiusInner:0.01;radiusOuter:0.016" material="opacity:0.5;shader:flat;transparent:false;color:blue" scale="0.8 0.8 0.8" raycaster ></Entity>
            </Entity>
            </Scene>
        );
    }

    export default SesionUno;