import React from 'react';
import './users.css'

export class Users extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          users: this.props.users,
          filteredList: []
        }
        console.log(this.state.users);
      }

      componentDidMount(){
        this.setState({users: this.props.users,});
      }
      componentWillMount(){
        this.setState({users: this.props.users,});
      }
    filterList = (event) => {
       this.filteredList = this.props.users;
        this.filteredList = this.filteredList.filter((item) => {
            return item.name.toLowerCase().search(
                event.target.value.toLowerCase()) !== -1;
        })
        this.setState({users: this.filteredList});
        console.log(this.filteredList.length);

    }
    render() {
        // console.log(this.state.users);
        return (
            <div>
                <p>This is Users Component</p>
                {/* <p>{this.props.name}</p> */}
                <p>Total no of users is {this.props.users.length}</p>
                <input type="text" className="form-control form-control-lg" placeholder="Search" onChange={this.filterList}/>

                <table>
                    <tbody>
                    <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    </tr>
                    {
                        this.state.users.map((user) => {
                            return (
                                <tr key= {user.email}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                </tr>
                            );
                        })
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}