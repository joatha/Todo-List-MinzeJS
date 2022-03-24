import Minze, { MinzeElement } from 'minze'

export class MinzeInput extends MinzeElement {
  reactive = [['value', '', true]]

  attrs = ['placeholder', 'type', 'name']

  static observedAttributes = ['placeholder', 'type', 'name']

  testeDeAlert = () => {
    if (this.value === '') {
      alert("Campo não podeficar em branco")
    }
    else {
      alert(this.value)
    }
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
    ['.button', 'click', this.testeDeAlert]
  ]
}

Minze.defineAll([MinzeElement])