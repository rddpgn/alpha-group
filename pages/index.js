import WelcomeScreen from "../src/screens/WelcomeScreen";
import WhyScreen from "../src/screens/WhyScreen";
import PriceScreen from "../src/screens/PriceScreen";
import Header from "../src/components/Header";

export default function Home() {
    return (
        <>
            <Header/>
            <div className='page_content'>
                <WelcomeScreen/>
                <WhyScreen/>
                <PriceScreen/>
            </div>
        </>
    )
}
