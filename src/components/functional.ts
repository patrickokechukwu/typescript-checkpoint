
//  import React from 'react';

// interface GreetingProps {
//    name: string;
//  }

//  const Greeting: React.FC<GreetingProps> = ({ name }) => {
//    return <div>Hello, {name}!</div>;
//  };

//  export default Greeting;





//  import React, { Component } from 'react';

// interface CounterState {
//   count: number;
//  }


// interface CounterProps {}

//  state: CounterState = {
//     count: 0
//  };

//  increment = () => {
//      this.setState({ count: this.state.count + 1 });
//   };

//   render() {
//     return (
//       <div>
//         <p>Count: {this.state.count}</p>
//         <button onClick={this.increment}>Increment</button>
//       </div>
//     );
//   }
// }

//  export default Counter;


// ### Detailed Comments on Changes

// #### Code 01: Greeting Component
// 1. *Import Statement*: No changes needed as importing React is the same in TypeScript.
// 2. *Defining Props Type*: 
//    typescript
//    interface GreetingProps {
//      name: string;
//    }
   
//    This defines a type GreetingProps that specifies the structure of the props expected by the Greeting component.
// 3. *Using Props Type in Component*: 
//    typescript
//    const Greeting: React.FC<GreetingProps> = ({ name }) => {
//      return <div>Hello, {name}!</div>;
//    };
   
//    Here, React.FC<GreetingProps> is used to define the component type with the specified props.

// #### Code 02: Counter Component
// 1. *Import Statement*: No changes needed as importing React and Component is the same in TypeScript.
// 2. *Defining State Type*: 
//    typescript
//    interface CounterState {
//      count: number;
//    }
   
//    This defines a type CounterState that specifies the structure of the state.
// 3. *Defining Props Type*: 
//    typescript
//    interface CounterProps {}
   
//    This defines an empty type CounterProps for the props as there are none in this example.
// 4. *Using State and Props Types in Class Component*: 
//    typescript
//    class Counter extends Component<CounterProps, CounterState> {
   
//    This ensures the Counter class component uses the specified props and state types.
// 5. *Type Annotations for State and Methods*:
//    typescript
//    state: CounterState = {
//      count: 0
//    };

//    increment = () => {
//      this.setState({ count: this.state.count + 1 });

   
//    The state is explicitly typed as CounterState, and the increment method is defined to properly update the state.

// These changes ensure type safety and better development experience by catching type-related errors during the development process.