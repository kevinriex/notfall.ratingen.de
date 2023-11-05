import Hero from "./(components)/Hero";
import SideLinkBar from "./(components)/SideLinkBar";

export default function Home() {
    return (
        <>
            <Hero h1="Stadt Ratingen" />
            <SideLinkBar mastername="Ihre Dienstleistungen" />
        </>
    );
}
