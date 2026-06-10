import * as THREE from 'three';

export function createSafetyBounds(scene) {
  const bounds = [];

  const defs = [
    [-15, 0, 2, 8],
    [15, 0, 2, 8],
    [0, -5, 30, 1],
    [0, 5, 30, 1]
  ];

  defs.forEach(([x, z, sx, sz]) => {
    const mesh = new THREE.Mesh(
      new THREE.BoxGeometry(sx, 1.2, sz),
      new THREE.MeshBasicMaterial({ color: 0xff0000, transparent: true, opacity: 0.42 })
    );

    mesh.position.set(x, 0.6, z);
    scene.add(mesh);
    bounds.push(mesh);
  });

  return bounds;
}
