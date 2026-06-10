export class DebugOverlay {
  constructor(element) {
    this.element = element;
  }

  render(data) {
    if (!this.element) return;

    this.element.innerHTML = `
      <strong>ETHEREAL SORT MVP DEBUG</strong><br>
      Objects: ${data.count}<br>
      Safe: ${data.safe}<br>
      Clip Space: ${data.clip}
    `;
  }
}
