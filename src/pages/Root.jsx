import { useRef } from 'react';
import { Outlet } from 'react-router-dom';

import MainHeader from '../components/MainHeader.jsx';

export default function RootLayout() {
    const aboutSectionRef = useRef();

    const scrollToAbout = () => {
        if (aboutSectionRef.current) {
          aboutSectionRef.current.scrollToSection();
        }
    };

    return (
        <>
            <MainHeader onAboutClick={scrollToAbout} />
            <Outlet context={{ aboutSectionRef }} />
        </>
    )
}