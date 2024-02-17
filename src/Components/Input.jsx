import {useState} from "react";

export const Input = ({onTodoAdd, onSearch}) => {
    const [todoName, setTodoName] = useState('');
    const [searchTerm, setSearchTerm] = useState('')

    const handleOnClick = (e) => {
        e.preventDefault();
        onTodoAdd(todoName);
        setTodoName('')
        // if (todoName.trim()) {      //ye rahe dige braye inke bdone matn item nsaze.
        //     onTodoAdd(todoName.trim());
        //     setTodoName('')
        // }
    }

    const handleSearch  = ({target}) => {
        setSearchTerm(target.value)
        onSearch(target.value)
    }

    return (
        <div>
            <div className={"margin-bottom"}>
                <h4>Add</h4>
                <input value={todoName} onChange={(e) => {
                    setTodoName(e.target.value)
                }}/>
                <button onClick={handleOnClick} disabled={!todoName.trim()}>
                    Add new item
                </button>
            </div>

            <div className={"margin-bottom"}>
                <h4>Search</h4>
                <input value={searchTerm} onChange={handleSearch}/>
            </div>
        </div>
    )
}