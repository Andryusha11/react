import React from 'react';
import Spinner from './Spinner';

//									!!!!!!!!!!!!!!
// These are not my decisions, I took their from StackOverflow
// but I disassembled them for a long time and I think that
// in the future I will be able to do a similar task myself
//									!!!!!!!!!!!!!!

// export const withDataLoader = (url) => {
//   return function (Component) {
//     return class Container extends React.Component {
//       state = '';
//       componentDidMount() {
//         this.get();
//       }

//       get = () => {
//         fetch(url)
//           .then((response) => response.json())
//           .then((data) => this.setState(data));
//       };

//       render() {
//         return this.state === '' ? (
//           <Spinner />
//         ) : (
//           <Component data={this.state} />
//         );
//       }
//     };
//   };
// };

export const withDataLoader = (url) => (Component) => {
  class Container extends React.Component {
    state = '';

    componentDidMount() {
      this.get();
    }

    get = () => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => this.setState(data));
    };

    render() {
      return this.state === '' ? <Spinner /> : <Component data={this.state} />;
    }
  }
  return Container;
};
