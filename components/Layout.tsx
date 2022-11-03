import React, { ReactNode } from 'react';
import styles from '../styles/Layout.module.css';
import Footer from './Footer';
import Header from './Header';

interface Props {
    children?: ReactNode
};

const Layout = ({ children }: Props) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;














