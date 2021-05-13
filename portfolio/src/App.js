import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Projects from './Projects';

import 'bootstrap/dist/css/bootstrap.min.css';
import { render } from '@testing-library/react';

function App() {

  return (
    <div className="App">
      <NavBar/>
      <h1 className= "Title">
        Destiny Luong
      </h1>
      <div class="card mb-3" style={{maxWidth: 540 + "px"}}>
      <div class="row no-gutters">
        <div class="col-md-4">
          <img src={logo} alt="logo"/>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>
    <Projects/>
    <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    </div>
    
  );
}

export default App;
