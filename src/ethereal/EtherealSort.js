export class EtherealSort {
  constructor() {
    this.nodes = [];
  }

  interlink(node) {
    this.nodes.push(node);
  }

  interlock() {
    return this.nodes.every(node => node.safe);
  }

  resolve(camera) {
    return this.nodes.map(node => ({
      name: node.name,
      bool: node.boolState(),
      mvp: node.resolve ? node.resolve(camera) : null
    }));
  }
}
