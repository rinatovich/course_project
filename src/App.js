
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Chats from './components/Chats/Chats.jsx';
import Music from './components/Music/Music.jsx';
import News from './components/News/News.jsx';
import Settings from './components/Settings/Settings.jsx';
import './fontawesome-free-5.15.1-web/css/all.min.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Signup from "./components/Signup/Signup";

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="app_body">
          <div className="container">
            <div className="main_content">
              <Route path='/signup' render={()=><Signup/>}/>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
