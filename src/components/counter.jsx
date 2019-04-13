import React, { Component } from "react";
import { brotliDecompress } from "zlib";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2"]
  };

  style = {
    fontSize: 20,
    fontWeight: "bold"
  };

  //constructor() {
  //  super();
  //  this.handleIncrement = this.handleIncrement.bind(this);
  //}

  // Event handle in react
  handleIncrement = product => {
    console.log(product);
    //console.log("Increment clicker", this);
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    //let classes = this.getBadgeClasses();

    return (
      <div>
        <span style={this.style} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.handleIncrement()}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
