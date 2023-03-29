
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { ToastContainer, toast } from 'react-toastify';
import { Zoom } from 'react-toastify';


import 'react-toastify/dist/ReactToastify.css';


import Main from './components/Main/Main'

function App() {

  return (
    <div className="App">
      <Main />

      <ToastContainer position="top-center" transition={Zoom}/>
    </div>
  )
}

export default App
