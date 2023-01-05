import style from "./style.module.css";
import {cs} from "../../../utils/Utils";

function Header() {
    return (
        <header className={cs(style.header, "flex_h_c_sb")}>
            <img
                className={style.img_logo}
                src="images/header_logo.png"
                alt="Альфа Групп"
            />
            <nav className={cs(style.nav_links, "flex_h_c_sb")}>
                <a className={style.nav_link} href="">Главная</a>
                <a className={style.nav_link} href="">О нас</a>
                <a className={style.nav_link} href="">Цены</a>
                <a className={style.nav_link} href="">Галерея</a>
                <a className={style.nav_link} href="">Команда</a>
                <a className={style.nav_link} href="">Взаимодействие</a>
                <a className={style.nav_link} href="">Контакты</a>
            </nav>
            <div className={style.location_wrapper}>
                <span className={style.location_label}>Местоположение</span>
                <button className={style.location_button}>Санкт-Петербург</button>
            </div>
            <div className={style.phone_wrapper}>
                <span className={style.phone_number}>8 812 448 08 09</span>
                <button className={style.phone_label}>Обратный звонок </button>
            </div>
        </header>
    )
}

export default Header;