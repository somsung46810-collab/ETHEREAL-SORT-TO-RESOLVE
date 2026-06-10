import * as THREE from 'three';
import { EtherealNode } from '../ethereal/EtherealNode.js';

export class MatrixResolver extends EtherealNode {
  constructor(name, object3D) {
    super(name, object3D);
    this.matrix = new THREE.Matrix4();
  }

  resolve(camera) {
    this.object3D.updateMatrixWorld();
    this.matrix
      .copy(camera.projectionMatrix)
      .multiply(camera.matrixWorldInverse)
      .multiply(this.object3D.matrixWorld);
    this.inClipSpace = true;
    return this.matrix;
  }
}
