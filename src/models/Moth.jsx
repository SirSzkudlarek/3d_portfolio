import { useEffect, useRef } from 'react';
import { useAnimations, useGLTF } from '@react-three/drei';
import mothScene from '../assets/3d/moth.glb';

const Moth = ({ isRotating, ...props }) => {
  const ref = useRef();
  const { scene, animations } = useGLTF(mothScene);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    actions['ArmatureLowerWing|ArmatureLowerWingAction'].play();
  }, [actions]);

  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
};
export default Moth;
