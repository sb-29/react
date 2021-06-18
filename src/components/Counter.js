import React, { Component } from 'react';

class Counter extends Component {

    state = { 
        count: 1,
       // imageUrl: 'https://picsum.photos/200'
       tags: ["tag1","tag2","tag3"]
     };

    //  styles = {
    //     fontSize: 10,
    //     fontWeight: "bold"
    //  };

    // constructor(){
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }
    //otherwise make use of arrow function
    handleIncrement = () =>{
        //console.log("Increment Clicked",this); //before adding the constructor we cannot access this
       // this.state.count++; this won't work as react will not understand its use
        this.setState({count: this.state.count + 1});
    }
    render() { 
        //let classes = this.getBadgeClasses();
        return (
        <div>
            {/* <img src={this.state.imageUrl} alt="" /> */}
            <span  className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
            {/* <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul> */}
            </div>);
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {count} = this.state;
        return count === 0 ? 'Zero' : count;
    }
}
 
export default Counter;