import * as THREE from 'three';
import { EtherealSort } from './ethereal/EtherealSort.js';
import { MatrixResolver } from './mvp/MatrixResolver.js';
import { createCityShell } from './scene/CityShell.js';
import { createSafetyBounds } from './scene/SafetyBounds.js';
import { createCheckpoints } from './scene/Checkpoints.js';
import { AnimationSystem } from './systems/AnimationSystem.js';
import { DebugOverlay } from './systems/DebugOverlay.js';

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x030712);

const camera = new THREE.PerspectiveCamera(
  65,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(8, 7, 12);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
document.body.appendChild(renderer.domElement);

scene.add(new THREE.AmbientLight(0x88ccff, 0.5));

const light = new THREE.DirectionalLight(0xffffff, 1.4);
light.position.set(5, 10, 5);
scene.add(light);

const grid = new THREE.GridHelper(44, 44, 0x00aaff, 0x004466);
scene.add(grid);

const road = new THREE.Mesh(
  new THREE.BoxGeometry(30, 0.05, 8),
  new THREE.MeshBasicMaterial({ color: 0x0077ff, wireframe: true })
);
road.position.y = 0.02;
scene.add(road);

function createCar(color, x, z) {
  const group = new THREE.Group();

  const body = new THREE.Mesh(
    new THREE.BoxGeometry(2.2, 0.6, 1.1),
    new THREE.MeshStandardMaterial({ color })
  );
  body.position.y = 0.45;
  group.add(body);

  const cabin = new THREE.Mesh(
    new THREE.BoxGeometry(1.0, 0.45, 0.8),
    new THREE.MeshStandardMaterial({ color: 0x111827 })
  );
  cabin.position.set(0.1, 0.95, 0);
  group.add(cabin);

  const trail = new THREE.Mesh(
    new THREE.BoxGeometry(1.8, 0.08, 0.08),
    new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.35 })
  );
  trail.position.set(-1.9, 0.45, 0);
  group.add(trail);

  group.position.set(x, 0, z);
  scene.add(group);
  return group;
}

const carA = createCar(0x22d3ee, -10, -1.8);
const carB = createCar(0xf97316, -12, 1.8);
const cityShell = createCityShell();
scene.add(cityShell);

const safetyBounds = createSafetyBounds(scene);
const checkpoints = createCheckpoints(scene);

const etherealSort = new EtherealSort();
etherealSort.interlink(new MatrixResolver('fictional-racer-alpha', carA));
etherealSort.interlink(new MatrixResolver('fictional-racer-beta', carB));
etherealSort.interlink(new MatrixResolver('city-wireframe-shell', cityShell));
etherealSort.interlink(new MatrixResolver('route-wireframe-grid', grid));

const animation = new AnimationSystem();
const debug = new DebugOverlay(document.getElementById('overlay'));

function animate() {
  requestAnimationFrame(animate);

  const t = animation.update(0.016);

  carA.position.x = -12 + ((t * 3.0) % 26);
  carB.position.x = -13 + ((t * 2.55) % 26);
  carA.position.z = -1.8 + Math.sin(t * 2.0) * 0.25;
  carB.position.z = 1.8 + Math.cos(t * 2.0) * 0.25;
  carA.rotation.y = Math.sin(t * 1.5) * 0.08;
  carB.rotation.y = Math.cos(t * 1.5) * 0.08;

  cityShell.rotation.y = Math.sin(t * 0.12) * 0.04;

  checkpoints.forEach((checkpoint, index) => {
    checkpoint.rotation.y += 0.01 + index * 0.0015;
    checkpoint.rotation.x = Math.sin(t + index) * 0.2;
  });

  safetyBounds.forEach((bound, index) => {
    bound.scale.y = 1 + Math.sin(t * 1.5 + index) * 0.04;
  });

  const resolved = etherealSort.resolve(camera);
  const allSafe = resolved.every(item => item.bool) && etherealSort.interlock();

  debug.render({
    count: resolved.length,
    safe: allSafe,
    clip: 'active'
  });

  renderer.render(scene, camera);
}

animate();

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
