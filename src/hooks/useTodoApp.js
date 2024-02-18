import {useState} from "react";
import {useLocalStorage} from "./useLocalStorage.js";

export const useTodoApp = () => {

    const [defaultList, {set}] = useLocalStorage('todos')
    const [todoList, setTodoList] = useState([] || defaultList)


    const handleAddTodo = (todoName) => {
        const isNew = todoList.find((item) => item.title === todoName)

        if (!isNew) {
            const newTodoListItem = {
                id: todoList.length + 1,
                title: todoName,
                done: false
            };

            const newTodos = [...todoList, newTodoListItem]
            setTodoList(newTodos);
            set('todos', newTodos);
        }else {
            alert("This item has already been added! Try a new one")
        }
    };

    const handleDeleteItem = (todoId) => {
        const newList = todoList.filter(({id}) => id !== todoId)
        setTodoList(newList);
        set('todos', newList);
    };

    const handleToggleItem = (todoId) => {
        const toggleItems = todoList.map((item) => {
            if (item.id === todoId) item.done = !item.done
            return item
        })
        setTodoList(toggleItems);
        set('todos', toggleItems);
    };

    const handleToggleAll = () => {
        const toggleAllItems = todoList.map( (item) => {
            item.done = true
            return item
        })
        setTodoList(toggleAllItems);
        set('todos', toggleAllItems);
    }

    const handleDeleteAll = () => {
        setTodoList([])
        set('todos', []);
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