
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter , Route, Routes} from "react-router-dom"

import React from 'react'

import Products from './product'

// const root = ReactDOM.createRoot(
//   document.getElementById("root")
// );
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
// );


function App() {
  return (
    <div>


<Products/>
    </div>
  )
}

export default App
