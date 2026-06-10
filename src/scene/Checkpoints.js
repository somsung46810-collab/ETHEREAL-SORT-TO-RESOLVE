import * as THREE from 'three';

export function createCheckpoints(scene) {
  return [-9, -3, 3, 9, 13].map((x) => {
    const edges = new THREE.EdgesGeometry(new THREE.BoxGeometry(1.4, 1.4, 1.4));
    const material = new THREE.LineDashedMaterial({
      color: 0x00ff66,
      dashSize: 0.25,
      gapSize: 0.15
    });

    const checkpoint = new THREE.LineSegments(edges, material);
    checkpoint.computeLineDistances();
    checkpoint.position.set(x, 1.0, 0);
    checkpoint.rotation.y = Math.PI / 4;

    scene.add(checkpoint);
    return checkpoint;
  });
}
