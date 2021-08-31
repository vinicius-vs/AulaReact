import { Component } from "react";

class ListCor extends Component {
    handlerinputCor(event){
        event.stopPropagation();
        if(event.key === "Enter"){
            console.log("gfyu")
            event.preventDefault();
        } 

    }
    render() {
        return (
            <section>
                <form >
                    <label >Cor</label><input type="text" onKeyPress={this.handlerinputCor} />
                </form>

            </section>
        )
    }

}
export default ListCor;