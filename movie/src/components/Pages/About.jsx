import React, {useState, useEffect, useRef} from 'react';
import styled from 'styled-components';
import Form from '../Todo/Form';
import TodoList from '../Todo/TodoList';
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
    margin-bottom : 1rem;
`;


const TodoMainDiv = styled.div`
    margin : 0 auto;
    context-align : center;
    text-align : center;
    width : 70%
`;

const TitleDiv = styled.div`
    padding : 2rem;
    background : #22b8cf;
    font-size : 2rem;
    color : white;
`;

const About = ()=>{

    const [todos, SetTodos] = useState( [
        { id: 0, text: ' TodoList 만들기 어렵네', checked: true },
        { id: 1, text: ' 로그인 공부 ', checked: true },
        { id: 2, text: ' 혜민 그래프 공부', checked: false },
        { id: 3, text: "DB에 넣어보는거 해봐야하는데..", checked:false},
        {id : 4, text: "React 어렵네...!", checked: false},
      ])

    const [input, SetInput] = useState('');
    
    const onToggle = (id) => {
        const index = todos.findIndex(todo => todo.id === id);
        const selected = todos[index];
        const newTodos = [...todos];

        newTodos[index] = {
            ...selected,
            checked : !selected.checked,
        };
        SetTodos(newTodos);
    }

    const handleChange = (e)=>{
        SetInput(e.target.value);
    }

    const handleCreate = ()=>{
        let newTodo = {id : todos.length+1 ,text : input, checked: false};
        SetInput('');
        SetTodos((prev)=>
            [...prev, newTodo]
        );
        inputEl.current.focus();
    }

    const handleRemove = (id) => {
        let newTodos = todos.filter(todo => todo.id !== id);
        SetTodos(newTodos);
      }

    const inputEl = useRef(null);


    return(
        <MainDiv>
            <div>
                <Text>With 동국대 17컴공 갓들..... <br/></Text>
                <Text>Front Master : 갓 혜 민 <br/></Text>
                <Text>Back-End Master : 갓 환 훈 </Text>
                <Text>노예 : 호준....<br/></Text>
            </div>
            <TodoMainDiv>
                <TitleDiv>
                    일해라 노예야 ~<br/>
                    ★Todo List★
                </TitleDiv>
                <Form
                    refinfo = {inputEl}
                    onChange={handleChange}
                    onCreate={handleCreate}
                    value = {input}/>
                <TodoList
                    todos={todos}
                    onToggle={onToggle}
                    onRemove={handleRemove}/>
            </TodoMainDiv>

        </MainDiv>
    );
};

export default About;