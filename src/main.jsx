import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { Home } from './assets/pages/Home/index.jsx';
import { Sobre } from './assets/pages/Sobre/index.jsx'
import { Especialidades } from './assets/pages/Especialidades/index.jsx'
import { Contato } from './assets/pages/Contato/index.jsx'



const router = createBrowserRouter([
  {
    path: "/OdontoCare-Plus",
    element: <Home/>
  },
  {
    path:"/OdontoCare-Plus/sobre",
    element:<Sobre/>
  },
  {
    path:"/OdontoCare-Plus/especialidades",
    element:<Especialidades/>
  },
  {
    path:"/OdontoCare-Plus/contato",
    element:<Contato/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
