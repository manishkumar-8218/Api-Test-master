
import { Route,Routes } from 'react-router-dom'

import ApiData from './component/Api';
import Summary from './component/Summary-page';


function App() {
  return (
    <div className="App">
    

      <Routes>
        <Route path='/' element={<ApiData/>}/>
        <Route path='/summary' element={<Summary/>}/>
       
      </Routes>  
    </div>
  );
}

export default App;
