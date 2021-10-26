import React from 'react';
import styled from 'styled-components';
import MovieApi from '../Api/MovieApi';

const MainDiv = styled.div`
    margin-top : -110px;
    margin-left : 40px;
    margin-bottom : 30px;
    width : 1130px;
    height : 670px;
    border : 1px solid black;
`;

const key = '17ff0e926ee7f69a261e4906c7e8d617';
const today = new Date();
const date = `${today.getFullYear()}${today.getMonth()+1}${today.getDate()-1}`;
const query1 = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${key}&targetDt=${date}`;
const query2 = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20120101`;

const CurrentMovies = ()=>{
    return ( 
        <MainDiv>
           <MovieApi query={query1} kind={1}/>
        </MainDiv>
    );
};

export default CurrentMovies;