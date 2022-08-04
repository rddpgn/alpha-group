import style from "./style.module.css";
import DropdownButton from "./DropdownButton/DropdownButton";
import {cs} from "../../utils/Utils";

function Header() {
    return (
        <header className={style.header}>
            <img className={style.logo} src="logo_header.png" alt="Альфа Групп"/>
            <a className={style.link} href="">Главная</a>
            <a className={style.link} href="">О нас</a>
            <a className={style.link} href="">Цены</a>
            <a className={style.link} href="">Галерея</a>
            <a className={style.link} href="">Команда</a>
            <a className={style.link} href="">Взаимодействие</a>
            <a className={style.link} href="">Контакты</a>
            <div className={style.shadow_block}>
                <div>Местоположение</div>
                <DropdownButton>Санкт-Петербург</DropdownButton>
            </div>
            <div className={cs(style.shadow_block, style.shadow_block_wide)}>
                <div className={style.phone_number}>8 812 448 08 09</div>
                <div className={style.blue}>Обратный звонок</div>
            </div>
        </header>
    );
}

export default Header;