import Header from "@/app/components/Header";

export default function Hero({ title }) {
    return (
        <>
            <div className="px-4 py-5 my-5 text-center" data-bs-theme="light">
                <Header title={title} />
                <div className="col-lg-8 mx-auto">
                    <p className="lead mb-4 mt-4">
                        Liebe Besucherinnen und Besucher der Internetseite der
                        Stadt Ratingen,
                        <br />
                        <br />
                        Ihre gewohnte Website www.ratingen.de ist zurzeit nicht
                        erreichbar. Hintergrund ist ein Cyber-Angriff auf den
                        kommunalen Dienstleister Südwestfalen IT (SIT), der auch
                        die Website der Stadt Ratingen hostet. Wir arbeiten
                        aktuell unter Hochdruck am Aufbau einer völlig neuen
                        Website, die voraussichtlich im Laufe des Monats Januar
                        online gehen kann.
                        <br />
                        <br />
                        Doch auch bis dahin sind wir bemüht, Ihnen auf dieser
                        Not-Website so viele Online-Dienstleistungen wie möglich
                        zur Verfügung zu stellen. Verschaffen Sie sich weiter
                        unten auf der Seite einen Überblick!
                        <br />
                        <br />
                        Neu hinzugekommen sind jetzt der Abfallkalender 2024 und
                        eine Übersicht über Öffnungszeiten und Telefonnummern
                        der Stadt Ratingen, allgemein und rund um die Feiertage.
                        <br />
                        <br />
                        Wir wünschen Ihnen frohe Weihnachten und ein glückliches
                        neues Jahr 2024.
                        <br />
                        <br />
                        <em>Stadt Ratingen</em>
                    </p>
                </div>
            </div>
        </>
    );
}
