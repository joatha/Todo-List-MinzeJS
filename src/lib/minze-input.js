import Minze, { MinzeElement } from 'minze'

export class MinzeInput extends MinzeElement {
  reactive = [['value', '', true]]

  attrs = ['placeholder', 'type', 'name']

  static observedAttributes = ['placeholder', 'type', 'name']

  html = () => `
   <input
   ${this.attrs
      .map((attr) => (this[attr] ? `${attr}="${this[attr]}"` : ''))
      .join(' ')}
    value="${this.value}"
   />
   `
  handleInput = (event) => {
    this.value = event.target.value

    console.log(this.value)
  }
  eventListeners = [['input', 'keyup', this.handleInput]]

}

Minze.defineAll([MinzeElement])