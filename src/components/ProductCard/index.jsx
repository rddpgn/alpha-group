import style from './style.module.css';

function ProductCard(data) {
    const {heading, text} = data;

    return (
        <div className={style.wrapper}>
            <div className={style.text}>
                <h5>{heading}</h5>
                <section>{text}</section>
                <a>Подробнее</a>
            </div>
        </div>
    );
}

export default ProductCard;