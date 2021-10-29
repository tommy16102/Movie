import React, {useEffect} from "react";
import styled from "styled-components";
import Todo from "./Todo";


const TodoList = ({todos, onToggle, onRemove}) => {

    const listItems = todos.map((todo, index) =>
        <Todo
        {...todo}
        onToggle={onToggle}
        onRemove={onRemove}
        key={index}/>
    );

    return(
        <div>
            {listItems}
        </div>
    );
};

export default TodoList;