import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, Router, RouterProvider} from 'react-router-dom';

// Imports For Admin Dashboard
import AdminDashboard from './components/dashboard/Admin.tsx';
import AddItemCard from './components/dashboard/dashbaord-sub/addItemCard.tsx';
import SalesAnalytics from './components/dashboard/dashbaord-sub/analytics.tsx';

const router = createBrowserRouter([
  {path: "/", element: <App/>},
  {path: "/admin", element: <AdminDashboard/>,
    children: [{
      // Route for Add Item
      path: 'add', element: <AddItemCard/>},
      // Route for Sales Analytics
      {path: 'sales', element: <SalesAnalytics/>}
    
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
