import Card from "./Card.jsx";
import clsx from "clsx";


export const TodoItem = ({title, done, onDelete, onToggle}) => {
    return (
        <div>
            <Card done={done}>
                <div className={clsx({
                    "done": done
                })}>
                    {title}
                </div>
                <div>
                    <button onClick={onToggle}>✅</button>
                    <button onClick={onDelete}>❌</button>
                </div>
            </Card>
        </div>
    )
}