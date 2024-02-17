import {useState} from "react";

export const useTodoApp = () => {

    const [todoList, setTodoList] = useState([])


    const handleAddTodo = (todoName) => {
        const isNew = todoList.find((item) => item.title === todoName)

        if (!isNew) {
            const newTodoListItem = {
                id: todoList.length + 1,
                title: todoName,
                done: false
            };

            setTodoList([...todoList, newTodoListItem]);
        }else {
            alert("This item has already been added! Try a new one")
        }
    };

    const handleDeleteItem = (todoId) => {
        const newList = todoList.filter(({id}) => id !== todoId)
        setTodoList(newList);
    };

    const handleToggleItem = (todoId) => {
        setTodoList(todoList.map((item) => {
            if (item.id === todoId) item.done = !item.done
            return item
        }))
    };

    const handleToggleAll = () => {
        setTodoList(todoList.map( (item) => {
            item.done = true
            return item
        }))
    }

    const handleDeleteAll = () => {
        setTodoList([])
    }


    return [
        todoList,
        handleAddTodo,
        handleDeleteItem,
        handleToggleItem,
        handleToggleAll,
        handleDeleteAll
    ]
}