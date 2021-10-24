import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {createGlobalStyle} from 'styled-components';
import SiteTemplate from './components/SiteTemplate';
import Login from './components/Login';
import NaviBar from './components/NaviBar';
import Footer from './components/Structure/Footer';
import {Main, About, CurrentMovies, ComingSoonMovies, Rank} from './components/Pages'
/**
  import Main from './components/Pages/Main';
  import About from './components/Pages/About';
  import CurrentMovies from './components/Pages/CurrentMovies';
  =>import {Main, About, CurrentMovies} from './components/Pages'
    폴더내 index.js 존재로 해결
  */
const GlobalStyle = createGlobalStyle`
  body {
    background : black;
    height : 1050px;
    min-height : 1050px;
    min-width : 1500px;
  }

  .navBarForm {
    margin-left : 40px;
    display : flex;
    margin-top : 30px;
  }

  .navBar {
    border-radius: 15px;
    width : 1130px;
    height : 70px;
    border : 1px solid black;
    background-color : black;
  }

  .loginForm {
    margin-left : 30px;
    border : 1px solid black;
    width : 240px;
    height : 220px;
    
  }

`;


function App(){
  return(
    <BrowserRouter>
      <GlobalStyle/>
    
        <SiteTemplate>
          <div className="navBarForm">
            <div className="navBar">
              <NaviBar></NaviBar>
             </div>
      
            <div className="loginForm">
              <Login></Login>
            </div>
          </div>
          <div>
            <Route path="/" exact component={Main}/>
            <Route path="/about" component={About}/>
            <Route path="/currentMovies" component = {CurrentMovies}/>
            <Route path="/rank" component = {Rank}/>
            <Route path="/comingSoonMovies" component = {ComingSoonMovies}/>
          </div>
          <Footer/>  
        </SiteTemplate>
    </BrowserRouter>
  )
}

export default App;
