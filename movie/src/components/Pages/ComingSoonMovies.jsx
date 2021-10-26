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
const query = `https://kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=${key}&itemPerPage=30`;

const ComingSoonMovies = ()=>{
    return(
        <MainDiv>
          <MovieApi query={query} kind={2}/>
        </MainDiv>
    );
};

export default ComingSoonMovies;