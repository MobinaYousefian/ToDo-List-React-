import clsx from "clsx";

function Card ({children, onClose, disabled, done}) {
    return (
        <div className={'card'}>
            <div className={clsx("card__content", {
                "done" : done
            })}>
                {children}
            </div>
        </div>


    )
}

export default Card;