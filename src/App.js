import { Component } from "react";
import HatForms from "./components/HatForms";
import HatList from "./components/HatList";
import ListCor from "./components/HatCorList"

class App extends Component {
  list = []
  constructor(){
    super();
    this.state = {
      list : this.list
    }
  }
  deletar(id){
    this.list.splice(this.list.find(c => c.id === id),1);
    this.setState({
      list : this.list
    })
  }
  create(model){
    this.list.push(model);
    this.setState({
      list : this.list
    })
  }
  render (){
    return (
    <section>
      <ListCor />
      <hr />
      <HatForms create={this.create.bind(this)} />
      <hr />
      <HatList list={this.state.list} deletar={this.deletar.bind(this)} />
    </section>
   );
  }
}
export default App;