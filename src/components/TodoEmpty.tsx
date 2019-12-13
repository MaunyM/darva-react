import React from 'react';

interface PropsType {
    onClean: () => void
}

const TodoEmpty = ({ onClean }: PropsType) =>
    <button onClick={onClean}>Vider la liste</button>




export default TodoEmpty;