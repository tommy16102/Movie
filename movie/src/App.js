import {createGlobalStyle} from 'styled-components';
import SiteTemplate from './components/SiteTemplate';
import Login from './components/Login';
import NaviBar from './components/NaviBar';

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

  .content {
    margin-top : -110px;
    margin-left : 40px;
    margin-bottom : 30px;
    width : 1130px;
    height : 670px;
    border : 1px solid black;
  }

  .footer {
    margin-left : 40px;

    border : 1px solid black;
    width : 1400px;
    height : 50px;
  }
`;


function App(){
  return(
    <>
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

      <div className="content">
      상영 영화?

      </div>
      <div className="footer">
      https://www.kobis.or.kr/kobisopenapi/homepg/main/main.do
      </div>
    </SiteTemplate>
    </>
  )
}

export default App;
