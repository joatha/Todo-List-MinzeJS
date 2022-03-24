import { MinzeElement } from 'minze'

export class MinzeMain extends MinzeElement {

    // reactive = [['teste', 'Deu certo']]
    reactive = [
        ['textInput', `${document.getElementById("inputText")}`]
    ]


    testeDeAlert = () => {
        alert(this.textInput)
    }

    /*testeDeAlert = () => {
        const myInputContent = document.querySelector("#inputText")
        const text = myInputContent.value
        console.log(text)
    }*/


    html = () => `
    <div class="container">        
    <div class="container2">
    <h1>Todo-List</h1>
    <minze-input
    placeholder="Sua tarefa"
    type="text"
    name="my-input">
    </minze-input>     
    </div>                 
    </div> 
    `
    css = () => `
    .container{
        display:flex;   
        align-items: center;
        justify-content: center;
    },
    .container2{
       
    }

    `


}