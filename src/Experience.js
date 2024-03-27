import { Float, Environment, useGLTF, OrbitControls } from "@react-three/drei";

export default function Experience() {
  const model = useGLTF("/model.gltf");

  return (
    <>
      <Environment files={"/potsdamer_platz_1k.hdr"} />

      <color args={["#695b5b"]} attach={"background"} />

      <OrbitControls makeDefault />
      <Float>
        <primitive object={model.scene} position-y={-1.2} />
      </Float>
    </>
  );
}
