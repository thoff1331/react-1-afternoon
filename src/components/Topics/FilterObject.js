import React, { Component} from 'react';

export default class  FilterObject extends Component {
    constructor() {
     super();   
    
    this.state = {
       employees: [
           {
               name: 'Jimmy Joe',
               title: 'Hacker',
               age: 12,
           },
           {
               name: 'James Stewart',
               age: 25,
               hairColor: 'brown'
           },
           {
               name: 'Steven Bowen',
               title: 'CEO',
           }
        ],
        userInput: '',
        filteredEmployees: []
    }
}
           handleChange(val) {
               this.setState({ userInput: val });
           }
           filterEmployees(prop) {
               var employees = this.state.employees;
               var filteredEmployees = [];


               for (let i = 0; i < employees.length; i++) {
                   if( employees[i].hasOwnProperty(prop) ) {
                    filteredEmployees.push(employees[i]);
                   }
               }
this.setState({ filteredEmployees: filteredEmployees});
           }
        
    
    render() {
        return (
        <div className='puzzleBox filterObjectPB'>
         <h4> 'Filter Object' </h4>
         <span className="puzzleText"> Original: { JSON.stringify(this.state.employees, null, 10) } </span>
        <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
        <button className="confirmationButton" onClick={ () => this.filterEmployees(this.state.userInput) }> Filter </button>
        <span className="resultsBox filterObjectRB"> Filtered: { JSON.stringify(this.state.filteredEmployees, null, 10) } </span>
      </div>
    )
        }
    } 