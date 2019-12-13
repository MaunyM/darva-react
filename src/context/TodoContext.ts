import React from 'react';
import Item from '../type/Item';

export interface ITodoContext {
    todos: Item[],
    addItem: (item: Item) => void
    cleanItems: () => void
    itemIsDone: (item: Item) => void
    itemIsUndone: (item: Item) => void
}

const todos: Item[] = []
const addItem = () => { }
const cleanItems = () => { }
const itemIsDone = () => { }
const itemIsUndone = () => { }

const TodoContext = React.createContext<ITodoContext>(
    {
        todos,
        addItem,
        cleanItems,
        itemIsDone,
        itemIsUndone
    }
);

export default TodoContext;
