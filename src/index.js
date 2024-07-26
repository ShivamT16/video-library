import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from "react-router-dom"

import App from './App';
import {CategoryContext,CategoryProvider} from "./Contexts/CategoryContext"
import { VideoContext,VideoProvider } from './Contexts/VideoContext';
import { WatchLaterContext, WatchLaterProvider } from './Contexts/WatchLaterContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

export {CategoryContext}
export {VideoContext}
export {WatchLaterContext}

root.render(
  <React.StrictMode>
    <Router>
    <WatchLaterProvider>
    <VideoProvider>
    <CategoryProvider>
      <App />
    </CategoryProvider>
    </VideoProvider>
    </WatchLaterProvider>
    </Router>
  </React.StrictMode>
);