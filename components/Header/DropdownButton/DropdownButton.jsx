import style from "./style.module.css"

function DropdownButton(props) {
    const {label} = props;

    return (
        <div className={style.button}>
            <span>{props.children}</span>
            <img className={style.icon} src="icons/dropdown.svg" alt=""/>
        </div>
    )
}

export default DropdownButton;