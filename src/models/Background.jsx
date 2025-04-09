import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { EffectComposer, Bloom, DepthOfField, Vignette } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';
import Gem from './Gem';

import backgroundScene from '../assets/3d/lost_robot.glb';

const Background = ({ isRotating, setIsRotating, setCurrentStage, ...props }) => {
  const backgroundRef = useRef();
  const { gl, viewport } = useThree();
  const { nodes, materials, animations } = useGLTF(backgroundScene);
  const { actions } = useAnimations(animations, backgroundRef);

  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.95;

  const materialLight = materials['Material.002'];
  materialLight.transparent = true;
  materialLight.opacity = 0.15;

  const handlePointerDown = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(true);

    const clientX = e.touches ? e.touches[0].clientX : e.clientX;

    lastX.current = clientX;
  };

  const handlePointerUp = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(false);
  };

  const handlePointerMove = (e) => {
    e.stopPropagation();
    e.preventDefault();

    if (isRotating) {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;

      const delta = (clientX - lastX.current) / viewport.width;

      backgroundRef.current.rotation.y += delta * 0.01 * Math.PI;
      lastX.current = clientX;
      rotationSpeed.current = delta * 0.01 * Math.PI;
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      if (!isRotating) setIsRotating(true);
      backgroundRef.current.rotation.y += 0.01 * Math.PI;
      rotationSpeed.current = 0.0125;
    } else if (e.key === 'ArrowRight') {
      if (!isRotating) setIsRotating(true);
      backgroundRef.current.rotation.y -= 0.01 * Math.PI;
    }
  };

  const handleKeyUp = (e) => {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      setIsRotating(false);
    }
  };

  const handleTouchStart = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(true);

    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    lastX.current = clientX;
  };

  const handleTouchEnd = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(false);
  };

  const handleTouchMove = (e) => {
    e.stopPropagation();
    e.preventDefault();

    if (isRotating) {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const delta = (clientX - lastX.current) / viewport.width;

      backgroundRef.current.rotation.y += delta * 0.01 * Math.PI;
      lastX.current = clientX;
      rotationSpeed.current = delta * 0.01 * Math.PI;
    }
  };

  useEffect(() => {
    const canvas = gl.domElement;
    canvas.addEventListener('pointerdown', handlePointerDown);
    canvas.addEventListener('pointerup', handlePointerUp);
    canvas.addEventListener('pointermove', handlePointerMove);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);
    canvas.addEventListener('touchstart', handleTouchStart);
    canvas.addEventListener('touchend', handleTouchEnd);
    canvas.addEventListener('touchmove', handleTouchMove);
    actions['Animation'].play();

    return () => {
      canvas.removeEventListener('pointerdown', handlePointerDown);
      canvas.removeEventListener('pointerup', handlePointerUp);
      canvas.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
      canvas.removeEventListener('touchstart', handleTouchStart);
      canvas.removeEventListener('touchend', handleTouchEnd);
      canvas.removeEventListener('touchmove', handleTouchMove);
    };
  }, [gl, handlePointerDown, handlePointerUp, handlePointerMove]);

  useFrame(() => {
    if (!isRotating) {
      rotationSpeed.current *= dampingFactor;

      if (Math.abs(rotationSpeed.current) < 0.001) {
        rotationSpeed.current = 0;
      }

      backgroundRef.current.rotation.y += rotationSpeed.current;
    } else {
      const rotation = backgroundRef.current.rotation.y;

      const normalizedRotation = ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

      // Set the current stage based on the island's orientation
      switch (true) {
        case normalizedRotation >= 1.2 && normalizedRotation <= 1.6:
          setCurrentStage(4);
          break;
        case normalizedRotation >= 2.8 && normalizedRotation <= 3.4:
          setCurrentStage(3);
          break;
        case normalizedRotation >= 4.49 && normalizedRotation <= 4.88:
          setCurrentStage(2);
          break;
        case (normalizedRotation >= 0 && normalizedRotation <= 0.63) ||
          (normalizedRotation >= 5.5 && normalizedRotation <= 6.3):
          setCurrentStage(1);
          break;
        default:
          setCurrentStage(null);
      }
    }
  });

  return (
    <>
      <group ref={backgroundRef} {...props} dispose={null}>
        <group name="Sketchfab_Scene">
          <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
            <group name="root">
              <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
                <group name="butterfly_6" position={[21.205, 55.192, 34.777]} rotation={[0, -0.853, 0]} scale={6.574}>
                  <group name="GLTF_created_0">
                    <primitive object={nodes.GLTF_created_0_rootJoint} />
                    <skinnedMesh
                      name="Object_7"
                      geometry={nodes.Object_7.geometry}
                      material={materials.butterfly}
                      skeleton={nodes.Object_7.skeleton}
                    />
                    <group name="butterfly__5" />
                  </group>
                </group>
                <group name="Cube_7" position={[-0.481, 59.978, 0.699]} scale={[-174.944, 174.944, 174.944]}>
                  <mesh
                    name="Object_14"
                    castShadow
                    receiveShadow
                    material-toneMapped={false}
                    material-emissiveIntensity={10}
                    geometry={nodes.Object_14.geometry}
                    material={materials.Sphere}
                  />
                </group>
                <group
                  name="Light_8"
                  position={[-76.03, 179.407, 51.884]}
                  rotation={[1.19, 1.055, -1.611]}
                  scale={0.383}
                >
                  <mesh name="Object_16" geometry={nodes.Object_16.geometry} material={materialLight} />
                </group>
                <group name="Tree_main_9" position={[0, 38.153, 0]} scale={0.417}>
                  <mesh
                    name="Object_18"
                    castShadow
                    receiveShadow
                    material-toneMapped={false}
                    material-emissiveIntensity={10}
                    geometry={nodes.Object_18.geometry}
                    material={materials.Tree_main_and_grass_robot}
                  />
                </group>
                <group name="Tree_up_10" position={[-5.915, 116.301, 4.803]} scale={0.082}>
                  <mesh
                    name="Object_20"
                    castShadow
                    receiveShadow
                    material-toneMapped={false}
                    material-emissiveIntensity={10}
                    geometry={nodes.Object_20.geometry}
                    material={materials.Tree_up}
                  />
                </group>
                <group name="Robot_11" rotation={[Math.PI / 2, 0, 0]}>
                  <mesh
                    name="Object_22"
                    castShadow
                    receiveShadow
                    material-toneMapped={false}
                    material-emissiveIntensity={10}
                    geometry={nodes.Object_22.geometry}
                    material={materials.Robot}
                  />
                </group>
                <group name="grass_main_12" position={[0, 38.967, 0]} scale={0.101}>
                  <mesh
                    name="Object_24"
                    castShadow
                    receiveShadow
                    material-toneMapped={false}
                    material-emissiveIntensity={10}
                    geometry={nodes.Object_24.geometry}
                    material={materials.Grass_down}
                  />
                </group>
                <group
                  name="Plane_13"
                  position={[1.739, 63.316, -37.507]}
                  rotation={[0.005, -0.001, -0.003]}
                  scale={0.305}
                >
                  <mesh
                    name="Object_26"
                    castShadow
                    receiveShadow
                    material-toneMapped={false}
                    material-emissiveIntensity={10}
                    geometry={nodes.Object_26.geometry}
                    material={materials['emission.001']}
                  />
                </group>
                <group name="Plane001_14" position={[57.853, 33.041, 73.42]} scale={0.306}>
                  <mesh
                    name="Object_28"
                    castShadow
                    receiveShadow
                    material-toneMapped={false}
                    material-emissiveIntensity={10}
                    geometry={nodes.Object_28.geometry}
                    material={materials['emission.001']}
                  />
                </group>
                <group
                  name="Plane002_15"
                  position={[69.083, 33.247, 19.37]}
                  rotation={[-0.011, 0.006, 0.001]}
                  scale={0.308}
                >
                  <mesh
                    name="Object_30"
                    castShadow
                    receiveShadow
                    material-toneMapped={false}
                    material-emissiveIntensity={10}
                    geometry={nodes.Object_30.geometry}
                    material={materials['emission.001']}
                  />
                </group>
                <group name="Plane003_16" position={[92.863, 32.319, -15.171]} scale={0.306}>
                  <mesh
                    name="Object_32"
                    castShadow
                    receiveShadow
                    material-toneMapped={false}
                    material-emissiveIntensity={10}
                    geometry={nodes.Object_32.geometry}
                    material={materials['emission.001']}
                  />
                </group>
                <group name="Plane004_17" position={[30.67, 65.47, 56.263]} scale={0.305}>
                  <mesh
                    name="Object_34"
                    castShadow
                    receiveShadow
                    material-toneMapped={false}
                    material-emissiveIntensity={10}
                    geometry={nodes.Object_34.geometry}
                    material={materials['emission.001']}
                  />
                </group>
                <group
                  name="Plane005_18"
                  position={[82.241, 58.908, -33.3]}
                  rotation={[-0.006, 0.003, 0]}
                  scale={0.306}
                >
                  <mesh
                    name="Object_36"
                    castShadow
                    receiveShadow
                    material-toneMapped={false}
                    material-emissiveIntensity={10}
                    geometry={nodes.Object_36.geometry}
                    material={materials['emission.001']}
                  />
                </group>
                <group
                  name="Plane006_19"
                  position={[44.661, 70.548, -12.69]}
                  rotation={[-0.006, 0.006, 0.001]}
                  scale={0.305}
                >
                  <mesh
                    name="Object_38"
                    castShadow
                    receiveShadow
                    material-toneMapped={false}
                    material-emissiveIntensity={10}
                    geometry={nodes.Object_38.geometry}
                    material={materials['emission.001']}
                  />
                </group>
                <group
                  name="Plane007_20"
                  position={[47.795, 53.954, -14.125]}
                  rotation={[0.005, -0.003, -0.003]}
                  scale={0.305}
                >
                  <mesh
                    name="Object_40"
                    castShadow
                    receiveShadow
                    material-toneMapped={false}
                    material-emissiveIntensity={10}
                    geometry={nodes.Object_40.geometry}
                    material={materials['emission.001']}
                  />
                </group>
                <group
                  name="Plane008_21"
                  position={[26.726, 62.139, 0.094]}
                  rotation={[0.003, -0.001, -0.006]}
                  scale={0.307}
                >
                  <mesh
                    name="Object_42"
                    castShadow
                    receiveShadow
                    material-toneMapped={false}
                    material-emissiveIntensity={10}
                    geometry={nodes.Object_42.geometry}
                    material={materials['emission.001']}
                  />
                </group>
                <group
                  name="Plane009_22"
                  position={[36.199, 51.669, 4.72]}
                  rotation={[-0.004, 0.004, 0.003]}
                  scale={0.306}
                >
                  <mesh
                    name="Object_44"
                    castShadow
                    receiveShadow
                    material-toneMapped={false}
                    material-emissiveIntensity={10}
                    geometry={nodes.Object_44.geometry}
                    material={materials['emission.001']}
                  />
                </group>
                <group
                  name="Plane010_23"
                  position={[26.152, 58.314, -24.463]}
                  rotation={[-0.006, 0.004, 0.001]}
                  scale={0.306}
                >
                  <mesh
                    name="Object_46"
                    castShadow
                    receiveShadow
                    material-toneMapped={false}
                    material-emissiveIntensity={10}
                    geometry={nodes.Object_46.geometry}
                    material={materials['emission.001']}
                  />
                </group>
                <group
                  name="Plane012_24"
                  position={[-20.865, 83.645, -34.65]}
                  rotation={[-0.008, 0.004, 0.001]}
                  scale={0.305}
                >
                  <mesh
                    name="Object_48"
                    castShadow
                    receiveShadow
                    material-toneMapped={false}
                    material-emissiveIntensity={10}
                    geometry={nodes.Object_48.geometry}
                    material={materials['emission.001']}
                  />
                </group>
                <group
                  name="Plane013_25"
                  position={[-37.308, 67.816, -4.285]}
                  rotation={[-0.004, 0.002, 0.001]}
                  scale={0.305}
                >
                  <mesh
                    name="Object_50"
                    castShadow
                    receiveShadow
                    material-toneMapped={false}
                    material-emissiveIntensity={10}
                    geometry={nodes.Object_50.geometry}
                    material={materials['emission.001']}
                  />
                </group>
                <group
                  name="Plane014_26"
                  position={[-46.179, 50.708, -23.877]}
                  rotation={[-0.002, 0.001, 0.001]}
                  scale={0.305}
                >
                  <mesh
                    name="Object_52"
                    castShadow
                    receiveShadow
                    material-toneMapped={false}
                    material-emissiveIntensity={10}
                    geometry={nodes.Object_52.geometry}
                    material={materials['emission.001']}
                  />
                </group>
                <group
                  name="Plane015_27"
                  position={[-49.394, 62.611, -38.923]}
                  rotation={[0.003, -0.002, -0.002]}
                  scale={0.305}
                >
                  <mesh
                    name="Object_54"
                    castShadow
                    receiveShadow
                    material-toneMapped={false}
                    material-emissiveIntensity={10}
                    geometry={nodes.Object_54.geometry}
                    material={materials['emission.001']}
                  />
                </group>
                <group
                  name="Plane016_28"
                  position={[-58.197, 68.525, -7.572]}
                  rotation={[0.007, -0.001, -0.004]}
                  scale={0.305}
                >
                  <mesh
                    name="Object_56"
                    castShadow
                    receiveShadow
                    material-toneMapped={false}
                    material-emissiveIntensity={10}
                    geometry={nodes.Object_56.geometry}
                    material={materials['emission.001']}
                  />
                </group>
                <group
                  name="Plane017_29"
                  position={[-59.853, 42.106, -37.005]}
                  rotation={[-0.004, 0.003, 0.001]}
                  scale={0.305}
                >
                  <mesh
                    name="Object_58"
                    castShadow
                    receiveShadow
                    material-toneMapped={false}
                    material-emissiveIntensity={10}
                    geometry={nodes.Object_58.geometry}
                    material={materials['emission.001']}
                  />
                </group>
                <group>
                  <Gem />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
      <EffectComposer>
        {/* Bloom Effect */}
        <Bloom intensity={1.8} luminanceThreshold={0.05} luminanceSmoothing={0.1} blendFunction={BlendFunction.ADD} />

        {/* Vignette Effect */}
        <Vignette eskil={false} offset={0.1} darkness={0.8} />
      </EffectComposer>
    </>
  );
};

export default Background;
