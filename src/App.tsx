import React from 'react';
import './App.css';
import { Header } from '@atoms';
import { UploadPage } from '@pages';

function App() {
  return (
    <div className="App">
      <Header />
      <UploadPage />
    </div>
  );
}

export default App;
