import React from 'react';

let printsToConsole = () => {
  console.log('Button Clicked');
};

const App = () => (
  <div>
    <button onClick={() => console.log('Button Clicked')}>Click Me!</button>
  </div>
);

export const AppDescription = 'App says hi';

export default App;
