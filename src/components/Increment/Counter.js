import React from "react";
// import ImageCard from "../ImageCard/ImageCard";

// By extending the React.Component class, Counter inherits functionality from it

const Counter = props => (
  <div>
    <p className="card-text">{props.count}</p>
  </div>
)
// class Counter extends React.Component {
//   // Setting the initial state of the Counter component
//   state = {
//     count: 0
//   };

//   // handleIncrement increments this.state.count by 1
//   handleIncrement = () => {
//     // We always use the setState method to update a component's state
//     this.setState({ count: this.state.count + 1 });
//   };

//   // The render method returns the JSX that should be rendered
//   render() {
//     return (
//         <div>
//             <p className="card-text">{this.props.count}</p>
//              <a onClick={this.handleIncrement}><ImageCard/></a>
//         </div>

//     );
//   }
// }

export default Counter;
