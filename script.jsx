import React from 'react';

function MyComponent() {
  const handleClick = (event) => {
    console.log('Button clicked!', event); // Log the event object for debugging
    // Perform actions based on the button click (e.g., update state, make API calls)
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default MyComponent;
