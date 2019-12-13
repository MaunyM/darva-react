import React, { useState, useContext } from 'react';
import Item from '../type/Item';
import IHistoryProps from '../type/History';
import TodoContext from '../context/TodoContext';
import { withRouter } from 'react-router-dom';

function TodoForm({ history }: IHistoryProps) {
    const [nouvelItem, setNouvelItem] = useState(new Item());
    const { addItem } = useContext(TodoContext);

    const submit = function (e: React.FormEvent, addItem: (item: Item) => void): void {
        e.preventDefault();
        addItem(nouvelItem)
        setNouvelItem(new Item())
        history.push('');
    }

    const nameChange = function (newName: string): void {
        setNouvelItem((prevState) => ({ ...prevState, name: newName }))
    }

    return (
        <form onSubmit={(e) => submit(e, addItem)}>
            <label>
                Description
                    <input
                    value={nouvelItem.name}
                    onChange={(e) => nameChange(e.target.value)}
                />
            </label>
            <input type={'submit'} value={'Ajouter'}></input>
        </form>
    )

}

export default withRouter(TodoForm);