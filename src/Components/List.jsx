import { TodoItem } from "./TodoItem";

export const List = ({ todos }) => {

    if (!todos.length) {
        return (
            <div>
                No todo Item
            </div>
        )
    }

    const handleOnDelete = () => {

    }

    return (
        <div>
            {todos.map((todos) => {
                return (
                    <TodoItem
                        key={todos.id}
                        title={todos.title}
                        status={todos.status}
                        onDelete={handleOnDelete}
                    />
                )
            })}
        </div>
    )
}