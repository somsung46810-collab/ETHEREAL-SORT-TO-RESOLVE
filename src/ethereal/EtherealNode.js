export class EtherealNode {
  constructor(name, object3D = null) {
    this.name = name;
    this.object3D = object3D;
    this.visible = true;
    this.safe = true;
    this.inClipSpace = false;
  }

  boolState() {
    return this.visible && this.safe && this.inClipSpace;
  }
}
