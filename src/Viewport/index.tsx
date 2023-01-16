import React, { useEffect } from 'react';

import Footer from './Footer';
import Header from './Header';

interface ViewportProps {
    children: React.ReactNode;
}

const Viewport = (props: ViewportProps) => {
    const { children } = props;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default Viewport