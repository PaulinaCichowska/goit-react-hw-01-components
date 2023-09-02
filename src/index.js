import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Profile } from './components';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Profile name="DEBIL" location="włochy" tag="xd"/>
  </React.StrictMode>
);
