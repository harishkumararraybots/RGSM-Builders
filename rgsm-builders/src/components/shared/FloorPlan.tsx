import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { ConstructionModel } from "./ConstructionModel";

export function FloorPlan() {
  return (
    <div className="w-full h-[500px] bg-gray-100 rounded-xl shadow-md">
      <Canvas camera={{ position: [0, 1.5, 4], fov: 40 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />

        <OrbitControls enableZoom={false} />

        <ConstructionModel />
      </Canvas>
    </div>
  );
}
