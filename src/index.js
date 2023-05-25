import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Root from './Routes/Root';
import HomePage from './Routes/HomePage';
import AboutPage from './Routes/AboutPage';
import EducationPage from './Routes/EducationPage';
import ContactPage from './Routes/ContactPage';
import SkillsPage from './Routes/SkillsPage';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "/about",
    element: <AboutPage/>,
  },
  {
    path: "/education",
    element: <EducationPage/>,
  },
  {
    path: "/skills",
    element: <SkillsPage/>,
  },
  {
    path: "/contact",
    element: <ContactPage/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
