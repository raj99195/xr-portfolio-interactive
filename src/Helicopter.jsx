import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function Helicopter({ active }) {
  const mount = useRef();

  useEffect(() => {
    if (!active) return;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
    camera.position.set(0, 0.3, 6);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(mount.current.clientWidth, mount.current.clientHeight);
    mount.current.appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight(0x00bfff, 1.4));

    new GLTFLoader().load("/models/helicopter.glb", (gltf) => {
      const heli = gltf.scene;
      heli.traverse((m) => {
        if (m.isMesh) {
          m.material = new THREE.MeshBasicMaterial({
            color: 0x00bfff,
            wireframe: true
          });
        }
      });

      heli.scale.set(0.3, 0.3, 0.3);
      scene.add(heli);

      const animate = () => {
        requestAnimationFrame(animate);
        heli.rotation.y -= 0.0015;
        renderer.render(scene, camera);
      };
      animate();
    });

    return () => (mount.current.innerHTML = "");
  }, [active]);

  return <div ref={mount} className="three-container" />;
}
