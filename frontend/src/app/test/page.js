export async function getStaticProps() {
    const strapires = await (fetch("/api/strapi/meta"))
    const meta = await strapires.json()
    return { props: { meta } }
}

export default function Test({meta}) {
    return (
        <>
        <h1>TEST</h1>
            <p>{meta}</p>
        </>
    );
}
