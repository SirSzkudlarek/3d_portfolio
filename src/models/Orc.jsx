import React, { useEffect, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

import scene from '../assets/3d/orc.glb';

const Orc = ({ currentAnimation, ...props }) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(scene);
  const { actions } = useAnimations(animations, group);

  console.log(animations);

  useEffect(() => {
    Object.values(actions).forEach((action) => action.stop());

    if (actions[currentAnimation]) {
      actions[currentAnimation].play();
    }
  }, [actions, currentAnimation]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, -Math.PI]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="_36">
                <group name="head_8" position={[0, 0.831, 0]}>
                  <group name="cube_0" position={[0, -0.237, 0.031]} rotation={[-0.175, 0, 0]}>
                    <mesh
                      name="Object_6"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_6.geometry}
                      material={materials.material_0}
                    />
                  </group>
                  <group name="cube_1" position={[0, -0.237, 0.031]} rotation={[-0.175, 0, 0]}>
                    <mesh
                      name="Object_8"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_8.geometry}
                      material={materials.material_0}
                    />
                  </group>
                  <group name="cube_2" position={[-0.131, 0.075, -0.069]} rotation={[0, Math.PI / 4, -0.262]}>
                    <mesh
                      name="Object_10"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_10.geometry}
                      material={materials.material_0}
                    />
                  </group>
                  <group name="cube_3" position={[0.144, 0.075, -0.063]} rotation={[0, -Math.PI / 4, 0.262]}>
                    <mesh
                      name="Object_12"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_12.geometry}
                      material={materials.material_0}
                    />
                  </group>
                  <group name="mouth_7" position={[0, 0.038, -0.094]}>
                    <group name="cube_4" position={[0, -0.006, -0.031]} rotation={[-0.175, 0, 0]}>
                      <mesh
                        name="Object_15"
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_15.geometry}
                        material={materials.material_0}
                      />
                    </group>
                    <group name="cube_5" position={[0, -0.006, -0.031]} rotation={[-0.175, 0, 0]}>
                      <mesh
                        name="Object_17"
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_17.geometry}
                        material={materials.material_0}
                      />
                    </group>
                    <group name="cube_6" position={[0, -0.006, -0.031]} rotation={[-0.175, 0, 0]}>
                      <mesh
                        name="Object_19"
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_19.geometry}
                        material={materials.material_0}
                      />
                    </group>
                  </group>
                </group>
                <group name="chest_17" position={[0, 0.688, 0]} rotation={[-0.175, 0, 0]}>
                  <group name="chest_top_10" position={[0, -0.063, 0]}>
                    <group name="cube_9" position={[0, -0.013, 0.031]}>
                      <mesh
                        name="Object_23"
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_23.geometry}
                        material={materials.material_0}
                      />
                    </group>
                  </group>
                  <group name="chest_bottom_16" position={[0, -0.125, 0]}>
                    <group name="cube_11" position={[0, -0.575, 0]}>
                      <mesh
                        name="Object_26"
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_26.geometry}
                        material={materials.material_0}
                      />
                    </group>
                    <group name="cube_12" position={[0, -0.575, -0.031]}>
                      <mesh
                        name="Object_28"
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_28.geometry}
                        material={materials.material_0}
                      />
                    </group>
                    <group name="cube_13" position={[0, -0.575, -0.031]}>
                      <mesh
                        name="Object_30"
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_30.geometry}
                        material={materials.material_0}
                      />
                    </group>
                    <group name="cube_14" position={[0, -0.575, -0.031]}>
                      <mesh
                        name="Object_32"
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_32.geometry}
                        material={materials.material_0}
                      />
                    </group>
                    <group name="cube_15" position={[0, -0.575, -0.031]}>
                      <mesh
                        name="Object_34"
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_34.geometry}
                        material={materials.material_0}
                      />
                    </group>
                  </group>
                </group>
                <group name="right_arm_22" position={[0.244, 0.806, 0.031]} rotation={[0.174, 0.008, 0.043]}>
                  <group name="cube_18" position={[-0.138, -0.256, 0.031]} rotation={[0, 0, 0.087]}>
                    <mesh
                      name="Object_37"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_37.geometry}
                      material={materials.material_0}
                    />
                  </group>
                  <group name="cube_19" position={[-0.138, -0.256, 0.031]} rotation={[0, 0, 0.087]}>
                    <mesh
                      name="Object_39"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_39.geometry}
                      material={materials.material_0}
                    />
                  </group>
                  <group name="cube_20" position={[-0.138, -0.256, 0.031]} rotation={[0, 0, 0.087]}>
                    <mesh
                      name="Object_41"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_41.geometry}
                      material={materials.material_0}
                    />
                  </group>
                  <group name="cube_21" position={[-0.138, -0.256, 0.031]} rotation={[0, 0, 0.087]}>
                    <mesh
                      name="Object_43"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_43.geometry}
                      material={materials.material_0}
                    />
                  </group>
                </group>
                <group name="left_arm_27" position={[-0.244, 0.806, 0.031]} rotation={[0.173, -0.023, -0.129]}>
                  <group name="cube_23" position={[0.16, -0.238, 0.031]}>
                    <mesh
                      name="Object_46"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_46.geometry}
                      material={materials.material_0}
                    />
                  </group>
                  <group name="cube_24" position={[0.16, -0.238, 0.031]}>
                    <mesh
                      name="Object_48"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_48.geometry}
                      material={materials.material_0}
                    />
                  </group>
                  <group name="cube_25" position={[0.16, -0.238, 0.031]}>
                    <mesh
                      name="Object_50"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_50.geometry}
                      material={materials.material_0}
                    />
                  </group>
                  <group name="cube_26" position={[0.16, -0.238, 0.031]}>
                    <mesh
                      name="Object_52"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_52.geometry}
                      material={materials.material_0}
                    />
                  </group>
                </group>
                <group name="right_leg_31" position={[0.106, 0.375, 0]} rotation={[-0.006, 0.043, 0.131]}>
                  <group name="cube_28" position={[-0.021, -0.156, 0]} rotation={[-0.006, -0.043, -0.131]}>
                    <mesh
                      name="Object_55"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_55.geometry}
                      material={materials.material_0}
                    />
                  </group>
                  <group name="cube_29" position={[-0.033, 0.001, 0]} rotation={[-0.006, -0.043, -0.131]}>
                    <mesh
                      name="Object_57"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_57.geometry}
                      material={materials.material_0}
                    />
                  </group>
                  <group name="cube_30" position={[-0.021, -0.156, 0]} rotation={[-0.006, -0.043, -0.131]}>
                    <mesh
                      name="Object_59"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_59.geometry}
                      material={materials.material_0}
                    />
                  </group>
                </group>
                <group name="left_leg_35" position={[-0.1, 0.375, 0]} rotation={[-0.011, -0.087, -0.131]}>
                  <group name="cube_32" position={[0.039, -0.198, 0]} rotation={[-0.011, 0.087, 0.131]}>
                    <mesh
                      name="Object_62"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_62.geometry}
                      material={materials.material_0}
                    />
                  </group>
                  <group name="cube_33" position={[0.027, 0.002, 0]} rotation={[-0.011, 0.087, 0.131]}>
                    <mesh
                      name="Object_64"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_64.geometry}
                      material={materials.material_0}
                    />
                  </group>
                  <group name="cube_34" position={[0.039, -0.198, 0]} rotation={[-0.011, 0.087, 0.131]}>
                    <mesh
                      name="Object_66"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_66.geometry}
                      material={materials.material_0}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

export default Orc;

/* import React, { useEffect, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

import scene from '../assets/3d/fox.glb';

const Fox = ({ currentAnimation, ...props }) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(scene);
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    Object.values(actions).forEach((action) => action.stop());

    if (actions[currentAnimation]) {
      actions[currentAnimation].play();
    }
  }, [actions, currentAnimation]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <primitive object={nodes.GLTF_created_0_rootJoint} />
        <skinnedMesh
          name="Object_7"
          geometry={nodes.Object_7.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_7.skeleton}
        />
        <skinnedMesh
          name="Object_8"
          geometry={nodes.Object_8.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_8.skeleton}
        />
        <skinnedMesh
          name="Object_9"
          geometry={nodes.Object_9.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_9.skeleton}
        />
        <skinnedMesh
          name="Object_10"
          geometry={nodes.Object_10.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_10.skeleton}
        />
        <skinnedMesh
          name="Object_11"
          geometry={nodes.Object_11.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_11.skeleton}
        />
      </group>
    </group>
  );
};

export default Fox;
*/
