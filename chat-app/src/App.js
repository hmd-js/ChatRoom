import './App.css';
import { Routes , Route } from 'react-router-dom';
import Login from './Components/Login';
import AuthContextProvider from './contexts/AuthContextProvider';

import Chats from './Components/Chats';


function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Routes>
              <Route path='/chats' Component={Chats} />
             <Route path='/' Component={Login}/>

        </Routes>

      </AuthContextProvider>
    </div>
  );
}

export default App;
