import { Component } from "react";

export class Hello extends Component {

    handleChange = (e) => {
        console.log(e.target.value);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted!'); 
    }

    render() { 
        return <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleChange} />
        </form>
    }

}
