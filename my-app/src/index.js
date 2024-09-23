import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MatchPage from './Match';
import ActivitesPage from './Activities';
import SimonPage from './Simon';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "activities",
    element: <ActivitesPage />,
  },
  {
    path: "matching",
    element: <MatchPage/>,
  },
  {
    path: "simon",
    element: <SimonPage />,
  },
  {
      path: "puzzle",
      //element: <PuzzlePage />
  },
  {
      path: "reactionary",
      //element: <ReactPage />
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);
