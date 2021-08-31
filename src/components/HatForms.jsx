import { Component } from "react";

class HatForms extends Component {
    id;
    estilo;
    cor;
    listCor;
    constructor(props){
        super(props);
        this.listCor = props.listaCor
    }
    handlerInputId(event) {
        this.id = event.target.value;
        event.stopPropagation();
    }
    handlerInputEstilo(event) {
        this.estilo = event.target.value;
        event.stopPropagation();
    }
    handlerInputCor(event) {
        this.cor = event.target.value;

        event.stopPropagation();
    }
    handlerSalvar(event) {
        if(this.cor == null && this.listCor[0]!=null){
            this.cor = this.listCor[0];
        }
        let hat = { "id": this.id, "estilo": this.estilo, "cor": this.cor }
        event.stopPropagation();
        event.preventDefault();
        this.props.create(hat);
        document.getElementById("secId").value = document.getElementById("opId").value;
       
    }
    render() {
        return (

            <section>
                <form onSubmit={this.handlerSalvar.bind(this)}>
                    <label htmlFor="id" >Id:</label><input
                        type="number"
                        id="id"
                        onChange={this.handlerInputId.bind(this)
                        }></input>
                    <label htmlFor="estilo">Estilo:</label><input
                        type="text"
                        id="estilo"
                        onChange={this.handlerInputEstilo.bind(this)}></input>
                    {/* <label htmlFor="cor">Cor</label><input
                        type=""
                        id="cor"
                        onChange={this.handlerInputCor.bind(this)}
                    ></input> */}
                    <select id="secId" defaultValue="default" onChange={this.handlerInputCor.bind(this)} >
                        <option id="opId" value="default" disabled>Selecione um valor</option>
                        {this.listCor.map((e,k) =>
                        <option  key={k} value={e}>{e}</option>
                        )}
                    </select>
                    <button id="btSalvar">Salvar</button>
                </form>
            </section>
        );
    }
}
export default HatForms;