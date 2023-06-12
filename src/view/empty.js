import { createElement } from '../render.js';

const createEmptyTemplate = () => {
    '<p class="trip-events__msg">Click New Event to create your first point</p>'
}

export default class Empty {
    
    #element = null;

  get template() {
    return createEmptyTemplate();
  }

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }
    return this.#element;
  }

  removeElement() {
    this.#element = null;
  }
}