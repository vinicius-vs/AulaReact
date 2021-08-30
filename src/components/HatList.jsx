import { Component } from "react";
class HatList extends Component {
    list;
    constructor(props) {
        super(props);
        this.list = props.list;
        console.log(this.list)
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
                        </tr>
                    </thead>
                    <tbody>
                        {this.list.map((e,k) =>

                            <tr key={k}>
                                <td>{e.id}</td>
                                <td>{e.estilo}</td>
                                <td>{e.cor}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </section>
        )
    }
}
export default HatList