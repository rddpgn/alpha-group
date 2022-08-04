import HeaderContainer from "../containers/HeaderContainer/HeaderContainer";
import {Head} from "next/head";
import {useEffect} from "react";

export default function Home() {
    const tmp = {
        opacity: 0.2,
        position: 'absolute',
    }

    return (
        <>

            <HeaderContainer/>
        </>
    )
}
