import React from 'react'
import styled from 'styled-components';

const FormDiv = styled.div`
    display : flex;
    margin-top : 1rem;
`;

const Input = styled.input`
    flex : 1;
    font-size: 1.25rem;
    outline: none;
    border: none;
    border-bottom: 1px solid #c5f6fa;
`;

const Create_Button = styled.div`
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    margin-left: 1rem;
    background: #22b8cf;
    border-radius: 3px;
    color: white;
    font-weight: 600;
    cursor: pointer;
`;

const Form = ({value, onChange, onCreate, onKeyPress, refinfo}) =>{

    return(
        <FormDiv>
            <Input value = {value} onChange={onChange} onKeyPress={onKeyPress} ref={refinfo}/>
            <Create_Button onClick={onCreate}>
                추가
            </Create_Button>
        </FormDiv>
    );
};

export default Form;