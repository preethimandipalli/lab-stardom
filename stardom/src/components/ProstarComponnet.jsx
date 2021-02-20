import React, { Component } from 'react'
import prostar from './prostars.json';
export default class NewComponent extends Component {
    constructor() {
        super()
        this.state = {
            array: [prostar[0], prostar[1], prostar[2], prostar[3], prostar[4]],
            arrayLength: 5
        }
    }
   
    display = () => {
        const tempArray = this.state.array;
    
        const mapRows = tempArray.map((item) => (
            <React.Fragment >
                <tr >
                    <td>Id: {item.id}</td>
                    <td>Name : {item.name}</td>
  
                    <td>popularity: {item.popularity}</td>
               </tr>
            </React.Fragment>
        ));
        return mapRows;
    }
    addnewprostar= () => {
        this.setState({arrayLength: this.state.arrayLength + 1})
        const tempArray = this.state.array;
        tempArray.push(prostar[this.state.arrayLength])

        this.setState({array:tempArray})
      
    }
    sortbyname = () =>{
       
       var tempArray= this.state.array;
       tempArray.sort((a, b) => (a.name > b.name) ? 1 : -1)
        
        this.setState({dataset:tempArray});
    }
    sortbypopularity = () =>{
       var tempArray= this.state.array;
       tempArray.sort((a, b) => (a.popularity > b.popularity) ? 1 : -1)
        
        this.setState({array:tempArray});
    }
    
    render (){
        return (
            <tbody>
                
                {this.display()}
                <button onClick={this.sortbypopularity}>sortbypopularity</button>
                <button onClick={this.sortbyname}>sortbyname</button>
                <button onClick={this.addnewprostar}>add</button>
                
            </tbody>
        
          
         
        
                        );
    }
}


