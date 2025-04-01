import { useEffect, useRef } from 'react';
import { useAnimations, useGLTF } from '@react-three/drei';
import stoneGemScene from '../assets/3d/gem_stone.glb';
import waterGemScene from '../assets/3d/gem_blue.glb';
import fireGemScene from '../assets/3d/gem_red.glb';

const Gem = () => {
  const stoneGemRef = useRef();
  const waterGemRef = useRef();
  const fireGemRef = useRef();
  const { scene: stone_scene, animations: stone_animations } = useGLTF(stoneGemScene);
  const { scene: water_scene } = useGLTF(waterGemScene);
  const { scene: fire_scene, animations: fire_animations } = useGLTF(fireGemScene);
  const { actions: stone_actions } = useAnimations(stone_animations, stoneGemRef);
  const { actions: fire_actions } = useAnimations(fire_animations, fireGemRef);

  useEffect(() => {
    stone_actions['Armature|ArmatureAction.001'].play();
    fire_actions['Take 001'].play();
  }, [stone_actions, fire_actions]);

  const stoneGemScale = [2, 2, 2];
  const waterGemScale = [100, 100, 100];
  const fireGemScale = [15, 15, 15];

  useEffect(() => {
    if (water_scene) {
      water_scene.traverse((child) => {
        if (child.material) {
          child.material.emissiveIntensity = 3;
          child.material.toneMapped = false;
        }
      });
    }
  }, [water_scene]);

  return (
    <>
      <mesh position={[60, 45, 0]} rotation={[0, -5.5, 0]} scale={stoneGemScale} ref={stoneGemRef}>
        <primitive object={stone_scene} />
      </mesh>
      <mesh position={[0, 55, -50]} rotation={[0, 0, 0]} scale={waterGemScale} ref={waterGemRef}>
        <primitive object={water_scene} />
      </mesh>
      <mesh position={[-92.5, 55, -20]} rotation={[0, 0, 0]} scale={fireGemScale} ref={fireGemRef}>
        <primitive object={fire_scene} />
      </mesh>
    </>
  );
};
export default Gem;
