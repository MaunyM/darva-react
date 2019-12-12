import React from 'react';
import Item from '../type/Item';

interface PropsType {
    onAddItem: (item: Item) => void
}

interface Statetype {
    nouvelItem: Item
}

class TodoForm extends React.Component<PropsType, Statetype>  {
    constructor(props: PropsType) {
        super(props);
        this.state = { nouvelItem: new Item() }
    }

    submit(e:React.FormEvent): void {
        e.preventDefault();
        this.props.onAddItem(this.state.nouvelItem)
        this.setState({ nouvelItem: new Item() })
    }

    nameChange(newName: string): void {
        this.setState((prevState) => ({ nouvelItem: { ...prevState.nouvelItem, name: newName } }))
    }

    render() {
        return (
            <form onSubmit={(e) =>this.submit(e)}>
                <label>
                    Description
                    <input
                        value={this.state.nouvelItem.name}
                        onChange={(e) => this.nameChange(e.target.value)}
                    />
                </label>
                <input type={'submit'} value={'Ajouter'}></input>
            </form>
        )
    }
}

export default TodoForm;