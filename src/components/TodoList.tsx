import React from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import Item from '../type/Item';
import TodoEmpty from './TodoEmpty';

import './TodoList.css';

interface PropsType {

}

interface Statetype {
    mesItems: Item[]
}

class TodoList extends React.Component<PropsType, Statetype>  {
    constructor(props: PropsType) {
        super(props);
        this.state = {
            mesItems: [
                {
                    name: "Finir la formation",
                    isDone: false
                }, {
                    name: "Faire signer la feuille de présence",
                    isDone: true
                }, {
                    name: "Arreter de dire n'importe quoi",
                    isDone: false
                }
            ]
        }
    }

    itemIsDone = (item: Item) => {
        const nouvelleListe = this.state.mesItems.map((itemCourant) => {
            if (item.name === itemCourant.name) {
                return { ...item, isDone: true }
            } else {
                return itemCourant
            }
        }
        )
        this.setState({ mesItems: nouvelleListe })
    }

    itemIsUndone = (item: Item) => {
        const nouvelleListe = this.state.mesItems.map((itemCourant) => {
            if (item.name === itemCourant.name) {
                return { ...item, isDone: false }
            } else {
                return itemCourant
            }
        }
        )
        this.setState({ mesItems: nouvelleListe })
    }

    addItem = (item: Item) => this.setState((prevState) => ({ mesItems: [...prevState.mesItems, item] }))

    cleanItem = () => this.setState({ mesItems: [] })

    render = () => {
        return (
            <div className={'TodoList'}>
                {this.state.mesItems.length} à faire
                <TodoForm onAddItem={this.addItem} />
                <TodoEmpty onClean={this.cleanItem} />
                {
                    this.state.mesItems.map(itemCourant => (
                        <TodoItem
                            key={itemCourant.name}
                            item={itemCourant}
                            onDone={(item) => this.itemIsDone(item)}
                            onUndone={(item) => this.itemIsUndone(item)}

                        />
                    )
                    )
                }
            </div>
        )
    }
}
export default TodoList;