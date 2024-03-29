import React from 'react';
import logo from './logo.svg';
import axios from 'axios';
import { Users } from './users/users';
import './App.css';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      userList: "User List",
      users: [],
      store : []
    }
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
      this.setState(
        {users: response.data,
        store: response.data}
      )
    })
  }
  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>

      <Users name="Kamlesh Kumar" users = {this.state.users} store = {this.state.users}/>
    );
  }
}

export default App;
