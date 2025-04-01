import { useEffect, useRef } from 'react';
import { useAnimations, useGLTF } from '@react-three/drei';
import batScene from '../assets/3d/bat.glb';
import * as THREE from 'three';

const Bat = ({ isRotating, ...props }) => {
  const ref = useRef();
  const { scene, animations } = useGLTF(batScene);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    if (scene) {
      scene.traverse((child) => {
        if (child.material) {
          child.material.emissiveIntensity = 0.75;
          child.material.toneMapped = false;
        }
      });

      let lightBrigther = new THREE.AmbientLight(0xffffff, 1.5);
      scene.add(lightBrigther);

      return () => {
        scene.remove(lightBrigther);
      };
    }
  }, [scene]);

  useEffect(() => {
    actions['Flight'].timeScale = 0.75;
    actions['Flight'].play();
  }, [actions]);

  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
};
export default Bat;
