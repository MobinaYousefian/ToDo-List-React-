import {useState} from "react";

export const useTodoApp = () => {

    const [todoList, setTodoList] = useState([])

    const handleAddTodo = (todoName) => {
        const newtodoListItem = {
            id: todoList.length + 1,
            title: todoName,
            done: false
        };

        setTodoList([...todoList, newtodoListItem]);
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

    return [
        todoList,
        handleAddTodo,
        handleDeleteItem,
        handleToggleItem
    ]
}