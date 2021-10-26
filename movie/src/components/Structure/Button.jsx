import React from 'react'
import styled from 'styled-components';

const ButtonComponent = styled.button`
border : 1px solid black;
width : 40px;
height : 20px;
font-size : 10px;
cursor : pointer;
`;


function Button({name, onClick}){
    return (
        <ButtonComponent onClick = {onClick}>
            {name}
        </ButtonComponent>
    )
}

export default Button;