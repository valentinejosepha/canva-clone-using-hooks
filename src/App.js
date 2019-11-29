import React from 'react';

function App() {
  const canvasRef = React.useRef(null)
  return (
    <canvas 
      width={window.innerWidth}
      height={window.innerHeight}
      onClick={event => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContent('2d');
        // implement draw on ctx here
      }}
    />
  );
}

export default App;
