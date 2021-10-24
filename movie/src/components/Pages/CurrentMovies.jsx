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

const CurrentMovies = ()=>{
    return(
        <MainDiv>
            현재 상영중인 영화 리스트 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        </MainDiv>
    );
};

export default CurrentMovies;