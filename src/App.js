import { Component } from "react";
import HatForms from "./components/HatForms";
import HatList from "./components/HatList";
import ListCor from "./components/HatCorList"

class App extends Component {
  list = []
  corList = []
  constructor(){
    super();
    this.state = {
      list : this.list,
      listCor : this.corList
    }
  }
  inserirCor(cor){
    this.corList.push(cor);
    this.setState({
      listCor : this.corList
    })

  }
  deletar(id){
    this.list.splice(this.list.findIndex(c => c.id === id),1);
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
      <ListCor inserirCor={this.inserirCor.bind(this)}/>
      <hr />
      <HatForms create={this.create.bind(this)} listaCor={this.state.listCor} />
      <hr />
      <HatList list={this.state.list} deletar={this.deletar.bind(this)} />
    </section>
   );
  }
}
export default App;