import Hero from './(components)/Hero';
import SideLinkBar from './(components)/SideLinkBar';

export default function Home() {
    return (
        <>
            <Hero></Hero>
            <SideLinkBar mastername="Ihre Dienstleistungen"></SideLinkBar>
        </>
    );
}
