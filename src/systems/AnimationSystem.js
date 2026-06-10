export class AnimationSystem {
  constructor() {
    this.time = 0;
  }

  update(delta) {
    this.time += delta;
    return this.time;
  }
}
