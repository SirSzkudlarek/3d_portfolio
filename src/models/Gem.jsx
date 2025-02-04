import { useEffect, useRef } from 'react';
import { useAnimations, useGLTF } from '@react-three/drei';
import stoneGemScene from '../assets/3d/gem_stone.glb';
import waterGemScene from '../assets/3d/gem_blue.glb';

const Gem = () => {
  const stoneGemRef = useRef();
  const waterGemRef = useRef();
  const { scene: stone_scene, animations: stone_animations } = useGLTF(stoneGemScene);
  const { scene: water_scene, animations: water_animations } = useGLTF(waterGemScene);
  const { actions } = useAnimations(stone_animations, stoneGemRef);

  useEffect(() => {
    actions['Armature|ArmatureAction.001'].play();
  }, [actions]);

  const adjustGemForScreenSize = () => {
    let stoneGemScale = null;

    if (window.innerWidth < 768) {
      stoneGemScale = [0.9, 0.9, 0.9];
    } else {
      stoneGemScale = [2, 2, 2];
    }
    return [stoneGemScale];
  };

  const [stoneGem] = adjustGemForScreenSize();
  console.log(water_scene);

  useEffect(() => {
    if (water_scene) {
      // Apply emissive properties to all the materials in water_scene
      water_scene.traverse((child) => {
        if (child.material) {
          child.material.emissiveIntensity = 10; // Set emissive intensity
          child.material.toneMapped = false; // Disable tone mapping
        }
      });
    }
  }, [water_scene]);

  return (
    <>
      <mesh position={[60, 45, 5]} rotation={[0, -5.5, 0]} scale={stoneGem} ref={stoneGemRef}>
        <primitive object={stone_scene} />
      </mesh>
      <mesh position={[-60, 55, 5]} rotation={[0, 0, 0]} scale={[100, 100, 100]} ref={waterGemRef}>
        <primitive object={water_scene} />
      </mesh>
    </>
  );
};
export default Gem;
