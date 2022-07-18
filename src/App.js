import React from "react";
import { HashRouter as Router} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

//Components
import NavBar from "./layout/NavBar";
import Routes from './Routes';

//Styled
import {Wrapper, Background} from './App.styled';

function App() {
  return (
    <Router>
      <Background>
        <Wrapper className="container">
          <NavBar />
          <Routes />
        </Wrapper>
      </Background>
    </Router>
    
  );
}

export default App;