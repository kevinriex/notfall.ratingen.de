export default function Header({ title }) {
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
                {title}
            </h1>
        </div>
    );
}
