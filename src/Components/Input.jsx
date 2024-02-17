import {useState} from "react";

export const Input = ({onTodoAdd}) => {
    const [todoName, setTodoName] = useState('');

    const handleOnClick = (e) => {
        e.preventDefault();
        onTodoAdd(todoName);
        setTodoName('')
    }

    return (
        <div className={"input"}>
            <input value={todoName} onChange={(e) => {
                setTodoName(e.target.value)
            }}/>
            <button onClick={handleOnClick}>
                Add new item
            </button>
        </div>
    )
}