import * as THREE from 'three';

export function createCityShell() {
  const group = new THREE.Group();
  group.name = 'city-wireframe-shell';

  for (let i = 0; i < 12; i += 1) {
    const height = 1 + Math.random() * 4;
    const block = new THREE.Mesh(
      new THREE.BoxGeometry(1.4, height, 1.4),
      new THREE.MeshBasicMaterial({ color: 0x155e75, wireframe: true })
    );

    block.position.set(-14 + i * 2.5, height / 2, i % 2 === 0 ? -7 : 7);
    group.add(block);
  }

  return group;
}
