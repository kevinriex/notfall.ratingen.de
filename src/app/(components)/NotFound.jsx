import Link from "next/link"

export default function NotFound() {
    return (
        <>
            <div className="px-4 py-5 my-5 text-center" data-bs-theme="light">
                <img
                    className="d-block mx-auto mb-4"
                    src="/wappen.svg"
                    alt="Das Wappen der Stadt Ratingen"
                    height="250em"
                />
                <h1
                    data-bs-theme="light"
                    className="display-5 fw-bold text-body-emphasis"
                >
                    Seite nicht gefunden
                </h1>
                <Link href="/" className="btn btn-primary mt-5">
                    Zur Startseite
                </Link>
            </div>
        </>
    );
}
