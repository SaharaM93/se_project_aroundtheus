export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._initalArray = items;
    this._renderer = renderer;
    this._container = containerSelector;
  }

  renderItems() {
    this._initalArray.forEach((item) => {
      this._renderer(item);
    });
  }

  addItem(element) {
    this._container.append(element); //prepend instead??
  }
}
