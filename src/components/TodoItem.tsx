import React from 'react';
import Item from '../type/Item';

import './TodoItem.css'

interface PropsType {
    item: Item;
    onDone: (item: Item) => void;
    onUndone: (item: Item) => void;
}

function TodoItem({ item, onDone, onUndone }: PropsType) {

    const done = (event: React.ChangeEvent<HTMLInputElement>): void =>
        event.target.checked ? onDone(item) : onUndone(item)

    return (
        <div className='TodoItem'>
            <input type="checkbox" onChange={(event) => done(event)} />
            <span className={item.isDone ? 'done' : ''}>
                {item.name}
            </span>
        </div>
    )

}

export default TodoItem;