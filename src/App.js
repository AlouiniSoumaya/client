import './App.css';

import {Route,Routes} from 'react-router-dom'

import Signup from './components/signup/signup'
import Signin from './components/signin/signin'
import Home from './components/home/home'

function App() {
  return (
    <div className="App">
     
      <Routes>
      <Route index element={<Signup/>}/>
      <Route path='/SignIn' element={<Signin/>}/>
      <Route path='/Home' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
