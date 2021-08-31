import { Component } from "react";

class ListCor extends Component {

    handlerinputCor(event){
        event.stopPropagation();
        if(event.key === "Enter"){
            let cor = event.target.value;
            event.preventDefault();
            this.props.inserirCor(cor);
        } 
    }
    render() {
        return (
            <section >
                <form >
                    <label >Cor</label><input type="text" onKeyDown={this.handlerinputCor.bind(this)} />
                </form>
            </section>
        )
    }
}
export default ListCor;