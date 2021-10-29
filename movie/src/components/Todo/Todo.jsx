import React from "react";
import styled from "styled-components";


const TodoDiv = styled.div`
    display : flex;
    justify-content : space-between;
    margin-top : 1rem;
`;

const DeleteButton = styled.button`
    margin-right: 1rem;
    background: #e64980;
    font-weight: 600;
    border-radius: 10px;
`;

const ContentDiv = styled.div`
    font-size : 1.5rem;
    margin-right : 2rem;
    margin-left : 14rem;
    text-decoration : ${(props)=>(props.checked ? 'line-through' : 'none')};
`;

const Todo = ({text, checked, id, onRemove, onToggle}) =>{
    
    return(
        <>
            <TodoDiv>
                <ContentDiv onClick={()=> onToggle(id)} checked={checked}>
                    {text}
                </ContentDiv>
                <DeleteButton onClick={()=>onRemove(id)}>삭제</DeleteButton>
            </TodoDiv>

        </>
    );

};

export default Todo;