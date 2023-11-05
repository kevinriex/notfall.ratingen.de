export default function Hero({h1}) {
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
                    {h1}
                </h1>
                <div className="col-lg-8 mx-auto">
                    <p className="lead mb-4 mt-4">
                    Liebe Besucherinnen und Besucher der Internetseite der
                        Stadt Ratingen,
                        <br />
                        <br />
                        Ihre gewohnte Website www.ratingen.de ist aktuell nicht
                        erreichbar. Hintergrund ist ein Cyber-Angriff auf den
                        kommunalen Dienstleister Südwestfalen IT (SIT), der auch
                        die Website der Stadt Ratingen hostet. Anders als in
                        anderen Städten und Kreisen in NRW, in denen die gesamte
                        Verwaltungs-IT ausgefallen ist, sind die Auswirkungen in
                        Ratingen begrenzt und beschränken sich im Wesentlichen
                        auf die Website. Die Verwaltungs-IT in Ratingen wird
                        nicht durch die SIT betrieben und funktioniert daher.
                        <br />
                        <br />
                        Auch Online-Dienstleistungen der Stadtverwaltung, etwa
                        Terminbuchungen im Bürgerbüro, der Mängelmelder oder das
                        Ratsinformationssystem können weiterhin in Anspruch
                        genommen werden. Im Folgenden eine Reihe von Links zu
                        weiterhin funktionierenden Online-Diensten der Stadt
                        Ratingen. Wie lange die Störung anhält, ist zurzeit
                        nicht absehbar. Die SIT arbeitet unter Hochdruck an der
                        Behebung.
                        <br />
                        <br />
                        <em>Stadt Ratingen</em>
                    </p>
                </div>
            </div>
        </>
    );
}
