import {useState} from "react";

export const Input = ({onTodoAdd}) => {
    const [todoName, setTodoName] = useState('');

    const handleOnClick = (e) => {
        e.preventDefault();
        onTodoAdd(todoName);
        setTodoName('')
        // if (todoName.trim()) {      //ye rahe dige braye inke bdone matn item nsaze.
        //     onTodoAdd(todoName.trim());
        //     setTodoName('')
        // }
    }

    return (
        <div className={"input"}>
            <input value={todoName} onChange={(e) => {
                setTodoName(e.target.value)
            }}/>
            <button onClick={handleOnClick} disabled={!todoName.trim()}>
                Add new item
            </button>
        </div>
    )
}