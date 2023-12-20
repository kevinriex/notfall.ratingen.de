"use client";
import { Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Contact from "../components/Contact";
import HeroContact from "../components/HeroContact";
import StyledLink from "../components/StyledLink";

const Contacts = [
    { name: "Büro Bürgermeister", tel: "02102 550 1080" },
    { name: "Vorstandssekretariat", tel: "02102 550 1001" },
    { name: "Rechnungsprüfungsamt", tel: "02102 550 1401" },
    {
        name: "Amt für Digitalisierung und Informationstechnologie",
        tel: "02102 550 1604",
    },
    { name: "Amt für Finanzwirtschaft", tel: "02102 550 2000" },
    { name: "Stadtkasse", tel: "02102 550 2101" },
    {
        name: "Amt für Gebäudemanagement - Grundstücksverwaltung",
        tel: "02102 550 2546",
    },
    {
        name: "Amt für Gebäudemanagement - Zentrale Störungsannahme",
        tel: "02102 550 2544",
    },
    {
        name: "Amt für Gebäudemanagement - Gebäudeservice",
        tel: "02102 550 2545",
    },
    { name: "Ordnungsamt", tel: "02102 550 3210" },
    { name: "Rechtsamt", tel: "02102 550 3006" },
    { name: "Bürgerbüro", tel: "02102 550 3222" },
    { name: "Standesamt", tel: "02102 550 3284" },
    { name: "Amt für Schulverwaltung und Sport", tel: "02102 550 4000" },
    { name: "Amt für Kultur und Tourismus", tel: "02102 550 4102" },
    { name: "Volkshochschule", tel: "02102 550 4306" },
    {
        name: "Amt für Soziales, Wohnen und Integration - Sozialhilfe, Grundsicherung, Asylleistungen",
        tel: "02102 550 5009",
    },
    {
        name: "Amt für Soziales, Wohnen und Integration - Wohngeld",
        tel: "02102 550 5024",
    },
    {
        name: "Amt für Soziales, Wohnen und Integration - Personenunterbringung",
        tel: "02102 550 5015",
    },
    {
        name: "Amt für Soziales, Wohnen und Integration - Unterhaltsvorschussleistungen",
        tel: "02102 550 5059",
    },
    {
        name: "Amt für Soziales, Wohnen und Integration - Integrationsbeauftragte",
        tel: "02102 550 5096",
    },
    { name: "Amt für Kinder, Jugend und Familie", tel: "02102 550 5103" },
    {
        name: "Amt für Stadtplanung, Vermessung und Bauordnung",
        tel: "02102 550 6100",
    },
    { name: "Tiefbauamt", tel: "02102 550 6641" },
    { name: "Amt für Kommunale Dienste", tel: "02102 550 7070" },
    { name: "Stabsstelle Verwaltungsorganisation", tel: "02102 550 1111" },
    { name: "Stabsstelle Öffentlichkeitsarbeit", tel: "02102 550 1063" },
    { name: "Beschwerdestelle", tel: "02102 550 1055" },
];

export default function ContactPage() {
    return (
        <>
            <Container className="px-4 py-5">
                <HeroContact title="Kontakt und Öffnungszeiten" />
                {Contacts.map((contact, idx) => (
                    <Row className="g-4 py-5" key={idx}>
                        <Contact name={contact.name} tel={contact.tel} />
                    </Row>
                ))}
                <div className="col-lg-8 mx-auto">
                    <h2>
                        Öffnungszeiten der städtischen Kultureinrichtungen
                        während der Feiertage
                    </h2>
                    <p className="lead mb-4 mt-4">
                        Die Stadtbibliothek und die Stadtteilbibliotheken sind
                        vom 24. bis 26. Dezember sowie an Silvester und Neujahr
                        geschlossen. Die Zweigstelle Hösel bleibt vom 24.
                        Dezember bis zum 10. Januar geschlossen. Die
                        Touristinformation sowie der Ticketverkauf des
                        Kulturamts sind zwischen Weihnachten und Neujahr vom 27.
                        bis zum 29. Dezember geöffnet. Das Stadtarchiv ist zu
                        den regulären Öffnungszeiten geöffnet, also am Mittwoch,
                        27. Dezember, und am Donnerstag, 28. Dezember.
                        <br />
                        <br />
                        Das Museum Ratingen ist am 24. und 25. Dezember sowie an
                        Silvester und Neujahr geschlossen. Vom 26. bis 30.
                        Dezember können die aktuellen Ausstellungen des Museums
                        jeweils von 11 bis 17 Uhr besucht werden. Das
                        Spielzeugmuseum mit der aktuellen Ausstellung „Busy Girl
                        - Barbie macht Karriere“ ist für die Besucher dieses
                        Jahr noch am 23., 26. und 30. Dezember geöffnet.
                    </p>
                    <h2>Eislaufzeiten in den Weihnachtsferien</h2>
                    <p className="lead mb-4 mt-4">
                        Die Ratinger Eissporthalle bietet auch über Weihnachten
                        und natürlich generell in den Ferien ein tolles
                        winterliches Programm für alle Eislauffans. Hier ein
                        Überblick über Öffnungszeiten und Aktionen:
                        <br />
                        <br />
                        <ul>
                            <li>
                                21. Dezember von 10 bis 14 Uhr und von 20 bis 22
                                Uhr
                            </li>
                            <li>22. Dezember von 10 bis 17 Uhr</li>
                            <li>
                                23. Dezember von 11 bis 13 Uhr und von 14 bis 17
                                Uhr (Familien-Disco)
                            </li>
                            <li>
                                Heiligabend und am ersten Weihnachtstag
                                geschlossen
                            </li>
                            <li>Zweiter Weihnachtstag von 10 bis 17 Uhr</li>
                            <li>
                                27. Dezember von 10 bis 17 Uhr und von 19 bis 21
                                Uhr (Disco)
                            </li>
                            <li>
                                28. Dezember von 10 bis 17 Uhr und von 20 bis 22
                                Uhr (Oldie-Disco mit DJ Rainer)
                            </li>
                            <li>29. Dezember von 10 bis 17 Uhr</li>
                            <li>
                                30. Dezember von 11 bis 13 Uhr und von14 bis 17
                                Uhr (Familien-Disco)
                            </li>
                            <li>
                                Silvester von 12 bis 16 Uhr (Silvester-Laufzeit
                                mit DJ Rainer)
                            </li>
                            <li>Neujahr geschlossen</li>
                            <li>2. Januar von 10 bis 14 Uhr</li>
                            <li>
                                3. Januar von 10 bis 17 Uhr und von 19 bis 21
                                Uhr (Disco)
                            </li>
                            <li>
                                4. Januar von 10 bis 14 Uhr und von 20 bis 22
                                Uhr (Oldie-Disco mit DJ Rainer)
                            </li>
                            <li>5. Januar von 10 bis 17 Uhr</li>
                        </ul>
                        <br />
                        <br />
                        Alle Informationen zu den Öffnungszeiten sind unter
                        Telefon <StyledLink href="tel:02102 550 5250" /> oder <StyledLink href="/" text="ratingen.de" /> zu erfahren.
                    </p>
                </div>
            </Container>
        </>
    );
}
