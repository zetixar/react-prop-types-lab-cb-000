import React from 'react';
import PropTypes from 'prop-types';

export default class Product extends React.Component{
  render(){
    return(
      <div>
        <h2>Name: {this.props.name}</h2>,
        <p>Producer: {this.props.producer}</p>
        <p>Has watermark? {this.props.hasWatermark ? 'Yes' : 'No'}</p>
        <p>Color: {this.props.color}</p>
        <p>Weight: {this.props.weight}</p>
      </div>
    );
  }
}

Product.defaultProps = {
  hasWatermark: false
}


Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white','eggshell-white','salmon']).isRequired,
  weight: weightCheck
}

function weightCheck(props, propName, componentName) {
  let num = props[propName];
  if(num === undefined)
    return new Error('Not a number.');
  else if (isNaN(num)){
    return new Error
  }
  else if (num < 80 || num > 300){
    return new Error('Too damn fat!')
  }
  else {
    return null;
  }
}

//
// Product.propTypes = {
//   name: PropTypes.string.isRequired,
//   producer: PropTypes.string,
//   hasWatermark: PropTypes.bool,
//   color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
//   weight: betweenEightyAndThreeHundreds
// }
//
// function betweenEightyAndThreeHundreds(props, propName, componentName, location) {
//   componentName = componentName || 'ANONYMOUS';
//   if (props[propName]) {
//     let value = props[propName];
//     if (typeof value === 'string') {
//       if (value.length >= 80 && value.length <= 300) {
//         return null;
//       } else {
//         return new Error(propName + ' in ' + componentName + " is longer than 140 characters")
//       }
//     }
//   }

  // assume all ok
//   return null;
// }
