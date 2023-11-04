import { Inter } from 'next/font/google';

import '@fortawesome/fontawesome-svg-core/styles.css';

import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

import '@/styles/styles.scss';

import Footer from './(components)/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Stadt Ratingen',
    description: '',
};

export default function RootLayout({ children }) {
    return (
        <html lang="de" data-bs-theme="light">
            <body data-bs-theme="light" className={inter.className}>
                {children}
                <Footer />
            </body>
        </html>
    );
}
