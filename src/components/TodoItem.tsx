import React from 'react';
import Item from '../type/Item';

import './TodoItem.css'

interface PropsType {
    item: Item;
    onDone: (item: Item) => void;
    onUndone: (item: Item) => void;
}

class TodoItem extends React.Component<PropsType> {

    done(event: React.ChangeEvent<HTMLInputElement>): void {
        event.target.checked ?
            this.props.onDone(this.props.item) :
            this.props.onUndone(this.props.item)
    }
    render() {
        const { item } = this.props;
        return (
            <div className='TodoItem'>
                <input type="checkbox" onChange={(event) => this.done(event)} />
                <span className={item.isDone ? 'done' : ''}>
                    {item.name}
                </span>
            </div>
        )
    }
}

export default TodoItem;