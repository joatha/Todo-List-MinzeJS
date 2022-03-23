import { MinzeElement } from 'minze'

export class MinzeMain extends MinzeElement {

    html = () => `
        <minze-input
        placeholder="Digite seu nome"
        type="text"
        name="my-input"
        ></minze-input>
       
    `
}