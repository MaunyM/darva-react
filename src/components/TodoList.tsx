import React, { useContext } from 'react';
import TodoItem from './TodoItem';
import TodoEmpty from './TodoEmpty';

import './TodoList.css';
import TodoContext from '../context/TodoContext';

const TodoList = () => {
    const { todos, cleanItems, itemIsDone, itemIsUndone } = useContext(TodoContext);
    return (
        <div className={'TodoList'}>
            {todos.length} à faire
            <TodoEmpty onClean={cleanItems} />
            {todos.map(itemCourant => (
                <TodoItem
                    key={itemCourant.key}
                    item={itemCourant}
                    onDone={(item) => itemIsDone(item)}
                    onUndone={(item) => itemIsUndone(item)}
                />
            )
            )
            }
        </div>
    )
}

export default TodoList;