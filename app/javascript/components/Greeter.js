// import React, { Component } from 'react';
// import PropTypes from 'prop-types';

// class Greeter extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       name: 'Erica',
//       items: ['item 1', 'item 2']
//     }

//     this.onInputChange = this.onInputChange.bind(this);
//   }

//   onInputChange(event) {
//     var currentItems = this.state.items;
//     currentItems.push(event.target.value);

//     this.setState({
//       name: event.target.value,
//       items: currentItems
//     })
//   }

//   render(){
//     return (
//       <div>
//         <h1>{this.props.greeting} {this.state.name}</h1>
//         <input type="text" onChange={this.onInputChange} />
//         {this.state.items.map(function(item, i){
//           return <p key={i}>{item}</p>;
//         })}
//       </div>
//     )
//   }
// }

// Greeter.propTypes = {
//   greeting: PropTypes.string.isRequired
// }

// Greeter.defaultProps = {
//   greeting: "Hello"
// }

// export default Greeter;
