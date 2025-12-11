import { useGLTF } from "@react-three/drei";
import { useLayoutEffect } from "react";
import * as THREE from "three";

export function ConstructionModelB(props: any) {
  const gltf: any = useGLTF("/model/modern_house.glb");
  const { scene } = gltf;

  // Auto-center model
  useLayoutEffect(() => {
    const box = new THREE.Box3().setFromObject(scene);
    const center = box.getCenter(new THREE.Vector3());
    scene.position.sub(center);
  }, [scene]);

  return (
    <group scale={1.5} position={[0, -0.5, 0]}>
      <primitive object={scene} {...props} />
    </group>
  );
}

useGLTF.preload("/model/apartment.glb");
