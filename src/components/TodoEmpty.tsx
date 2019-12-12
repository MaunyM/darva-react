import React from 'react';

interface PropsType {
    onClean: () => void
}

interface Statetype {
}

class TodoEmpty extends React.Component<PropsType, Statetype>  {

    render() {
        return (
           <button onClick={this.props.onClean}>Vider la liste</button>
        )
    }
}

export default TodoEmpty;