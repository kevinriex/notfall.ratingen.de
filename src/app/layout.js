import { Inter } from 'next/font/google';
import "./globals.css"

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS

import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Stadt Ratingen',
    description: '',
};

export default function RootLayout({ children }) {
    return (
        <html lang="de" data-bs-theme="light">
            <body data-bs-theme="light" className={inter.className}>{children}</body>
        </html>
    );
}
