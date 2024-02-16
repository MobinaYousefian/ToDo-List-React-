import Card from "./Card.jsx";
import clsx from "clsx";

export const TodoItem = ({ title, status, onDelete }) => {
    return (
        <div>
            <Card onClose={onDelete}>
                <div className={clsx({
                    "done" : status === 'Done'
                })}>
                    {title}
                </div>
                <button>
                    {status !== "Done" ? "Done" : "Not Done Yet?"}
                </button>
            </Card>
        </div>
    )
}