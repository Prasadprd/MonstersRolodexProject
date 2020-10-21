import React ,{Component}from 'react';
import {CardList} from './components/Cardlist/cardlist';
import {SearchBox} from './components/SearchBox/searchbox'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
     monsters :[],
     searchfield:''
    };
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(responce => responce.json())
      .then(users => this.setState({monsters : users}));
  }
  render (){
    const { monsters,searchfield }=this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchfield.toLowerCase())
    )
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder='Search Monster' handlechange={e=>this.setState({searchfield : e.target.value}) }/>
        <CardList  monsters ={ filteredMonsters} /> 
         
       
       
      </div>
  );
  
}
}
export default App;
