import clsx from "clsx";

function Card ({ children, onClose, disabled, ...props }) {
    return (
        <div className={clsx('card', {
            'card--disabled' : disabled,
            'card--enabled' : !disabled,
        })} {...props}
        >
            <div className={'card__header'}>
                <button className={'card__close-button'} onClick={onClose}>
                    close
                </button>
            </div>

            <div className={"card__content"}>
                {children}
            </div>
        </div>


    )
}

export default Card;