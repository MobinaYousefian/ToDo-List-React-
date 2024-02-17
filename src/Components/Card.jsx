import clsx from "clsx";

function Card ({children, done}) {
    return (
        <div className={'card'}>
            <div className={clsx("card__content", "flex", {
                "done" : done
            })}>
                {children}
            </div>
        </div>


    )
}

export default Card;