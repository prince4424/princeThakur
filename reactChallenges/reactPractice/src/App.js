

import './App.css';


import Details from './home.js'
import Challange2 from './challange2'
import Form from "./form";
import Secret from './challange4'
import Calc from './calculator'
import Movin from './movingob.js'

function App() {
 
  return (
   <>
   {Challange2.map((prince) => {
    return ( <div className='app'>
      {prince.name}
      {prince.location}
      {prince.car}
    </div>
    )
   }
   )}
 
   <Details/>
   <Form/>
   <Secret/>
   <Calc/>
   <Movin/>

   </>
  );
}

export default App;

