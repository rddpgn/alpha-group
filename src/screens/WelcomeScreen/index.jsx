import CallButton from "../../components/CallButton";
import style from "./style.module.css";
import ProductCard from "../../components/ProductCard";

const productsData = [
    {
        heading: 'Окна',
        text: 'Пластиковые и алюминиевые',
    },
    {
        heading: 'Двери',
        text: 'Наружные и внутренние',
    },
    {
        heading: 'Остекление балконов',
        text: 'Любой сложности',
    },
    {
        heading: 'Загородное остекление',
        text: 'Домов и коттеджей',
    },
]

function WelcomeScreen() {
    return (
        <div className={style.wrapper}>
            <div className={style.text_wrapper}>
                <h1>
                    Светопрозрачные конструкции в Санкт-Петербурге
                </h1>
                <section>
                    Компания Альфа-Групп занимается энергоэффективными окнами, дверьми, фасадами, перегородками, и
                    многим
                    другим для объеектов по всей Ленинградской области.
                </section>
                <CallButton/>
            </div>
            <div className='flex_h_sb'>
                {productsData.map((data) => <ProductCard key={data.heading} {...data}/>)}
            </div>
        </div>
    );
}

export default WelcomeScreen;
