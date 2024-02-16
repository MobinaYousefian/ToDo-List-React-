import {TodoItem} from "./TodoItem";

export const List = ({todos, handleDeleteItem, handleToggleItem}) => {

    if (!todos.length) {
        return (
            <div>
                No todo Item
            </div>
        )
    }

    return (
        <div>
            {todos.map((todos) => {
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