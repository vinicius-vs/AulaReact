import { Component } from "react";
const list = [{"id":1,"estilo":"cowboy","cor":"black"},
              {"id":2,"estilo":"test","cor":"blue"}]
class HatList extends Component{
    render(){
        return(
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Estilos</th>
                        <th>Cor</th>
                    </tr>
                </thead>
                <tbody>
                    { list.map(l =>
                        <tr>
                            <td>{l.id}</td>
                            <td>{l.estilo}</td>
                            <td>{l.cor}</td>
                        </tr>
                        )}
                </tbody>
            </table>
        )
    }
}
export default HatList