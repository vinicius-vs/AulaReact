import { Component } from "react";
import {ReactComponent as DeleteIcom} from "../Assets/img/delete.svg"

class HatList extends Component {
    list;
    constructor(props) {
        super(props);
        this.list = props.list;
        console.log(this.list)
    }

    handlerDelete(id, event){
        event.stopPropagation();
        event.preventDefault();
        this.props.deletar(id);

    }

    render() {
        return (
            <section>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Estilos</th>
                            <th>Cor</th>
                            <th> </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.list.map((e,k) =>

                            <tr key={k}>
                                <td>{e.id}</td>
                                <td>{e.estilo}</td>
                                <td>{e.cor}</td>
                                <td><DeleteIcom onClick={this.handlerDelete.bind(this,e.id)} /></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </section>
        )
    }
}
export default HatList