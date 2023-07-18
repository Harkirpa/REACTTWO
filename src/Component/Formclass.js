import React, { Component } from "react";
import '../index.css'
class Formclass extends Component {
    state={
        Name:'',
        Dept:'',
        Rate:'',
        EmpData : []
    }

changeHandle=(event)=>{
    this.setState({[event.target.name]:event.target.value})
    // console.log(this.state.Name);
}
clickHandle=(e)=>{
    e.preventDefault();
    const newObj={
        name:this.state.Name,
        dept:this.state.Dept,
         rate:this.state.Rate
    }
    this.state.EmpData.push(newObj)
    this.setState({EmpData:this.state.EmpData})
    
       
}
    render(){
         return (
          <>
          <h1 className="head">EMPLOYEE FEEDBACK FORM</h1>
          <br/>
          <form>
          <label htmlFor="name">Name :</label>
          <input id="name" type="text" placeholder="Enter Name" name="Name" value={this.state.Name} onChange={this.changeHandle} required/>
          <br/>
          <br/>
          <label htmlFor="dept">Department :</label>
          <input id="dept" type="text" placeholder="Enter Department" name="Dept" value={this.state.Dept} onChange={this.changeHandle} required/>
          <br/>
          <br/>
          <label htmlFor="rate">Rating :</label>
          <input id="rate" type="text" placeholder="Enter rating" name="Rate" value={this.state.Rate} onChange={this.changeHandle} required/>
          <br/>
          <br/>
          <br/>
          <button id="submit" onClick={this.clickHandle}>Submit</button>
          </form>
         
            <div className="container">
            {
          this.state.EmpData.map((item,index)=>{
            return (
                <>
                <span>
                <div id="box" key={index}>
                Name:{item.name} | Department:{item.dept} | Rating:{item.rate}
                </div>
                </span>
                </>
          )
        })}
        </div>
            </>
         )
    }
}
     

export default Formclass;