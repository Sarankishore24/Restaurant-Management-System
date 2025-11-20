import React, { useState } from 'react';
function App() {

  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="App">
      <div className="switch-container">
        <h1>{isOn ? 'ON' : 'OFF'}</h1>
        <button className={isOn ? 'on-button' : 'off-button'} onClick={toggleSwitch}>
          {isOn ? 'Turn Off' : 'Turn On'}
        </button>
      </div>
    </div>
  )
}

export default App;
