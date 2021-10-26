import React,{useState} from 'react';
import styled from 'styled-components';
import Button from '../Structure/Button';
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
const date = `${today.getFullYear()}${today.getMonth()+1}${today.getDate()-7}`;

const Rank = ()=>{
    
    const [select, setSelect] = useState(1);

    const query = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=${key}&targetDt=${date}&weekGb=${select}`;

    const setWeek = () => {
        setSelect(0);
    }
    const setWeekday = () =>{
        setSelect(1);
    }
    const setWeekend = () =>{
        setSelect(2);
    }

   

    return(
        <MainDiv>
            <Button name="주간" onClick={setWeek}></Button>
            <Button name="주중" onClick={setWeekday}></Button>
            <Button name="주말" onClick={setWeekend}></Button>
            <MovieApi query={query} kind={3}/>
        </MainDiv>
    );
};

export default Rank;