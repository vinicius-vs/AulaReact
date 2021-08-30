import { Component } from "react";

class HatForms extends Component{
   render (){
        return(
            <section>
                <label htmlFor="id">Id:</label><input type="number" id="id"></input>
                <label htmlFor="estilo">Estilo:</label><input type="text" id="estilo"></input>
                <label htmlFor="cor">Cor</label><input type="text" id="cor"></input>
                <button id="btSalvar">Salvar</button>
            </section>
        );
    }
}
export default HatForms;