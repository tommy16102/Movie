import React from 'react';
import styled from 'styled-components';

const MainDiv = styled.div`
    margin-top : -110px;
    margin-left : 40px;
    margin-bottom : 30px;
    width : 1130px;
    height : 670px;
    border : 1px solid black;
`;

const Text = styled.p`
    margin : auto;
    context-align : center;
    font-size : 30px;
`;

const About = ()=>{
    return(
        <MainDiv>
            <Text>With 동국대 17컴공 갓들..... <br/></Text>
            <Text>Front Master : 갓 혜 민 <br/></Text>
            <Text>Back-End Master : 갓 환 훈 </Text>
            <Text>노예 : 호준....<br/></Text>
        </MainDiv>
    );
};

export default About;