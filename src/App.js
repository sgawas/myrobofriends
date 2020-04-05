import React from 'react';

import CardList from './CardList';
import SearchRobos from './SearchRobos';
//import { robots } from './robots';
import Scroll from './Scroll'
import ErrorBoundry from './ErrorBoundry'


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      robots: [],
      searchField: ''
    };
  }

  componentDidMount() {
    console.log(this.state.robots.length);
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({robots : users}));
  }

  onSearch = (event) => {
    this.setState({searchField: event.target.value});
  }

  render(){
    const { robots, searchField} = this.state;
    console.log(robots.length);
    const filteredRobos = robots.filter(robo=> {
     return robo.name.toLowerCase().includes(searchField.toLowerCase());
    })
    
    if(!robots.length){
       return <h1>Loading</h1>
    } else{
      return (
        <div className="tc">
          <h1 className="f2">My Robo Friends App</h1>
          <SearchRobos searchRobo={this.onSearch}/>
          <Scroll>
            <ErrorBoundry>
              <CardList  robots={filteredRobos}/>
            </ErrorBoundry>
          </Scroll> 
        </div>
      );
    }  
  } 
}

export default App;
