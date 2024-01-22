import Link from "next/link";

export default function Footer() {
    return (
        <div className="container">
            <footer className="py-3 my-4">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item">
                        <Link
                            href="/"
                            className="nav-link px-2 text-body-secondary"
                        >
                            Startseite
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            href="/impressum"
                            className="nav-link px-2 text-body-secondary"
                        >
                            Impressum
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            href="/datenschutz"
                            className="nav-link px-2 text-body-secondary"
                        >
                            Datenschutz
                        </Link>
                    </li>
                </ul>
                <p className="text-center text-body-secondary">
                    &#169; 2024 Stadt Ratingen
                </p>
            </footer>
        </div>
    );
}
