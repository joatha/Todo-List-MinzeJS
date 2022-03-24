import Minze, { MinzeElement } from 'minze'

export class MinzeInput extends MinzeElement {
  reactive = [['value', '', true]]
  attrs = ['placeholder', 'type', 'name']
  static observedAttributes = ['placeholder', 'type', 'name']


  onStart = () => {
    localStorage.setItem('msg', `${this.value}`)

  }

  html = () => `
   <input
   ${this.attrs
      .map((attr) => (this[attr] ? `${attr}="${this[attr]}"` : ''))
      .join(' ')}
    value="${this.value}"/>   
   <button 
   class="button" 
   type="submit">
   Salvar
   </button>
   `
  handleInput = (event) => {
    this.value = event.target.value
  }

  eventListeners = [
    ['input', 'keyup', this.handleInput],
    ['.button', 'click', this.onStart]
  ]
}

Minze.defineAll([MinzeElement])