import {TodoItem} from "./TodoItem";

export const List = ({todos, handleDeleteItem, handleToggleItem, searchString}) => {

    if (!todos.length) {
        return (
            <div>
                No To-Do Item
            </div>
        )
    }

    return (
        <div>
            {todos
                // .filter( ({title}) => {title.includes(searchString)})
                .map((todos) => {
                return (
                    <TodoItem
                        key={todos.id}
                        title={todos.title}
                        done={todos.done}
                        onDelete={() => handleDeleteItem(todos.id)}
                        onToggle={() => handleToggleItem(todos.id)}
                    />
                )
            })}
        </div>
    )
}