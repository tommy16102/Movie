import React from 'react'
import styled from 'styled-components';

const FooterComponent = styled.div`
margin : auto;
border : 1px solid black;
width : 1400px;
height : 70px;
text-align : right;
font-size : 15px;
`;

const Footer = () => {
    return (
    <FooterComponent>
        Toy Project Start with Hyemin, Hojun, HwanHoon 2021-10-25 ~ <br/>
        Moive Toy Project with React & Spring <br/>
        Request : cajun7@dgu.ac.kr
    </FooterComponent>
    );
};

export default Footer;