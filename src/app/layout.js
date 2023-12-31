import { Inter } from "next/font/google";

import "@fortawesome/fontawesome-svg-core/styles.css";

import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import "@/styles/styles.scss";

import Footer from "@/app/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Stadt Ratingen",
    description: "Notfallwebseite der Stadt Ratingen.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="de" data-bs-theme="light">
            <head>
                <meta property="og:title" content="Stadt Ratingen" />
                <meta
                    property="og:description"
                    content="Die Backup-Website der Stadt Ratingen"
                />
                <meta property="og:image" content="/wappen.jpg" />
            </head>
            <body data-bs-theme="light" className={inter.className}>
                {children}
                <Footer />
            </body>
        </html>
    );
}
