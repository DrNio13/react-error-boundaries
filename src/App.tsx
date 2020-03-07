import React from 'react';
import './App.css';
import { AComponent } from './components/AComponent';
import { BComponent } from './components/BComponent';
import { CComponent } from './components/CComponent';
import { ErrorBoundary } from './components/ErrorBoundary';




function App() {
  return (
    <div className="App">
      {/* One ErrorBoundary with multiple children */}
      <ErrorBoundary hasMultipleChildren>
        <AComponent></AComponent>
        <BComponent>
          <CComponent></CComponent>
        </BComponent>
      </ErrorBoundary>

      <hr />

      <ErrorBoundary>
        <AComponent></AComponent>
      </ErrorBoundary>
      <ErrorBoundary>
        <BComponent></BComponent>
      </ErrorBoundary>
      <ErrorBoundary>
        <CComponent></CComponent>
      </ErrorBoundary>
    </div>
  );
}

export default App;
