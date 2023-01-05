import {useEffect} from "react";
import WelcomeScreen from "../src/screens/WelcomeScreen";
import WhyScreen from "../src/screens/WhyScreen";
import PriceScreen from "../src/screens/PriceScreen";

export default function Home() {
    return (
        <>
            <div className='page_content'>
                <WelcomeScreen/>
                <WhyScreen/>
                <PriceScreen/>
            </div>
        </>
    )
}
