export default function Header({h1}) {
    return (
        <div className="text-center">
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
                    {h1}
                </h1>
    </div>
    )
}