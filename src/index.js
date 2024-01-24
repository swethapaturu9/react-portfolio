import React from 'react';
import { createRoot } from 'react-dom/client'; // import createRoot
import App from './App';
import './index.css';

const container = document.querySelector('#root'); // get the container
const root = createRoot(container); // create a root
root.render(<App />); // use the render method from root
