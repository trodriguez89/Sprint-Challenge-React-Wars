import React from 'react';
import StarWarsParent from "./components/StarWarsParent";
import styled from "styled-components";
// import './App.css';

const MainDivStyle = styled.div`
margin: 0;
padding: 0;
font-family: sans-serif;
background-image: url('./sw-bg.jpg');
background-size: cover;
`;

const NavBarStyle = styled.nav`
  text-align: center;
  
`;

const AppH1Style = styled.h1`
font-family: 'McLaren', cursive;
font-weight: bold;
font-size: 55px;
`;


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <MainDivStyle>
      <NavBarStyle>
      <AppH1Style>React Wars</AppH1Style>
      </NavBarStyle>
      <StarWarsParent/>
    </MainDivStyle>
  );
}

export default App;
